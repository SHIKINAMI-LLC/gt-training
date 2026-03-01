/**
 * Dropbox API service (PKCE/Personal Access Token mode)
 * Uploads a Markdown file to Training_App/GT_Racer_Memos/YYYY-MM-DD.md
 */

const DROPBOX_UPLOAD_URL = 'https://content.dropboxapi.com/2/files/upload';

const PAIN_LABELS = {
  shoulder_l: '左肩',
  shoulder_r: '右肩',
  knee_l:     '左膝',
  knee_r:     '右膝',
  back:       '腰',
  neck:       '首',
};

/**
 * Build Markdown content from a memo object.
 * @param {string} date - YYYY-MM-DD
 * @param {object} memo - { condition, fatigue, pain[], text }
 * @param {object} profile - { name, currentRank, totalExp }
 * @param {object} dayData - { dayNumber, dayName, missions[] }
 * @param {Array}  completions - [{ missionId, exp }]
 */
export function buildMarkdown(date, memo, profile, dayData, completions) {
  const stars  = '⭐'.repeat(memo.condition || 0) + '☆'.repeat(5 - (memo.condition || 0));
  const fatigue = '🔴'.repeat(memo.fatigue || 0) + '⚪'.repeat(5 - (memo.fatigue || 0));
  const painText = memo.pain?.length
    ? memo.pain.map(p => PAIN_LABELS[p] || p).join('・')
    : 'なし';

  const completedMissions = completions?.map(c => {
    const m = dayData?.missions?.find(m => m.id === c.missionId);
    return `- ✅ ${m?.title || c.missionId}（+${c.exp} EXP）`;
  }).join('\n') || '（記録なし）';

  return `# GT RACER トレーニングメモ — ${date}

## 📊 基本情報
- **日付**: ${date}
- **レーサー**: ${profile?.name || 'Boss'}
- **ランク**: ${profile?.currentRank || '-'}（累計 ${profile?.totalExp?.toLocaleString() || 0} EXP）

## 🏋️ トレーニング内容
${dayData ? `**Day ${dayData.dayNumber}: ${dayData.dayName}**` : ''}

### 完了ミッション
${completedMissions}

## 💊 コンディション
- **体調スコア**: ${stars} (${memo.condition || 0}/5)
- **疲労度**: ${fatigue} (${memo.fatigue || 0}/5)
- **痛み・違和感**: ${painText}

## 📝 フリーメモ
${memo.text || '（なし）'}

---
*GT RACER TRAINING APP v3.0 | ${new Date().toISOString()}*
`;
}

/**
 * Upload Markdown memo to Dropbox.
 * @param {string} token - Dropbox personal access token
 * @param {string} date  - YYYY-MM-DD (used as filename)
 * @param {string} content - Markdown string
 * @returns {Promise<{ok: boolean, error?: string}>}
 */
export async function uploadToDropbox(token, date, content) {
  if (!token) {
    return { ok: false, error: 'Dropbox トークンが設定されていません' };
  }

  const path = `/Training_App/GT_Racer_Memos/${date}.md`;
  const bytes = new TextEncoder().encode(content);

  try {
    const res = await fetch(DROPBOX_UPLOAD_URL, {
      method: 'POST',
      headers: {
        'Authorization':    `Bearer ${token}`,
        'Content-Type':     'application/octet-stream',
        'Dropbox-API-Arg':  JSON.stringify({
          path,
          mode: 'overwrite',
          autorename: false,
          mute: true,
        }),
      },
      body: bytes,
    });

    if (!res.ok) {
      const errText = await res.text();
      return { ok: false, error: `Dropbox エラー: ${res.status} ${errText}` };
    }

    return { ok: true };
  } catch (err) {
    return { ok: false, error: `ネットワークエラー: ${err.message}` };
  }
}
