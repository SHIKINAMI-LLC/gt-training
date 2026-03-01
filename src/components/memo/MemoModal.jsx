import { useState } from 'react';
import { buildMarkdown, uploadToDropbox } from './DropboxService.js';

const PAIN_OPTIONS = [
  { id: 'shoulder_l', label: '左肩' },
  { id: 'shoulder_r', label: '右肩' },
  { id: 'knee_l',     label: '左膝' },
  { id: 'knee_r',     label: '右膝' },
  { id: 'back',       label: '腰' },
  { id: 'neck',       label: '首' },
];

export default function MemoModal({ date, existingMemo, dropboxToken, profile, dayData, completions, onSave, onClose }) {
  const [condition, setCondition] = useState(existingMemo?.condition ?? 3);
  const [fatigue,   setFatigue]   = useState(existingMemo?.fatigue   ?? 2);
  const [pain,      setPain]      = useState(existingMemo?.pain      ?? []);
  const [text,      setText]      = useState(existingMemo?.text      ?? '');
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null); // null | 'ok' | 'error'
  const [uploadMsg, setUploadMsg] = useState('');

  function togglePain(id) {
    setPain(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  }

  async function handleSave() {
    const memo = { condition, fatigue, pain, text };
    onSave(memo);

    // Upload to Dropbox if token available
    if (dropboxToken) {
      setUploading(true);
      const md = buildMarkdown(date, memo, profile, dayData, completions);
      const result = await uploadToDropbox(dropboxToken, date, md);
      setUploading(false);
      if (result.ok) {
        setUploadStatus('ok');
        setUploadMsg('Dropboxに保存しました ✓');
      } else {
        setUploadStatus('error');
        setUploadMsg(result.error);
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50 px-4"
         style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}
         onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-bg-card rounded-2xl border border-gray-700 w-full max-w-lg p-5 overflow-y-auto"
           style={{ maxHeight: 'calc(100svh - 6rem - env(safe-area-inset-bottom))' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-black text-lg text-white">📝 今日の体調メモ</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>

        {/* 体調スコア */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-white mb-2">
            体調スコア: <span className="text-racing-yellow">{condition}/5</span>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(n => (
              <button
                key={n}
                onClick={() => setCondition(n)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
                  n <= condition
                    ? 'bg-racing-yellow text-black'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-0.5">
            <span>最悪</span><span>最高</span>
          </div>
        </div>

        {/* 疲労度 */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-white mb-2">
            疲労度: <span className="text-red-400">{fatigue}/5</span>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(n => (
              <button
                key={n}
                onClick={() => setFatigue(n)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
                  n <= fatigue
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-0.5">
            <span>元気</span><span>限界</span>
          </div>
        </div>

        {/* 痛み・違和感 */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-white mb-2">痛み・違和感（複数選択可）</div>
          <div className="flex flex-wrap gap-2">
            {PAIN_OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => togglePain(opt.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  pain.includes(opt.id)
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {pain.includes(opt.id) ? '⚠️ ' : ''}{opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* フリーメモ */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-white mb-2">フリーメモ</div>
          <textarea
            className="w-full bg-gray-800 border border-gray-600 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
            rows={4}
            placeholder="今日のトレーニング・体調について自由に記録..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        {/* Dropbox status */}
        {dropboxToken && uploadStatus === null && !uploading && (
          <div className="text-xs text-gray-500 mb-3">
            💾 保存時に Dropbox へも自動アップロードされます
          </div>
        )}
        {uploading && (
          <div className="text-xs text-blue-400 mb-3 animate-pulse">
            📤 Dropbox にアップロード中...
          </div>
        )}
        {uploadStatus === 'ok' && (
          <div className="text-xs text-green-400 mb-3">{uploadMsg}</div>
        )}
        {uploadStatus === 'error' && (
          <div className="text-xs text-red-400 mb-3">{uploadMsg}</div>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold text-sm transition-colors"
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            disabled={uploading}
            className="flex-2 flex-grow-[2] py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white font-bold text-sm transition-colors"
          >
            {uploading ? '保存中...' : '保存する'}
          </button>
        </div>
      </div>
    </div>
  );
}
