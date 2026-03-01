import { WEEK1_MISSIONS } from '../../data/week1.js';

const PAIN_LABELS = {
  shoulder_l: '左肩',
  shoulder_r: '右肩',
  knee_l:     '左膝',
  knee_r:     '右膝',
  back:       '腰',
  neck:       '首',
};

export default function HistoryPage({ appData }) {
  const { appData: data } = appData;
  const sorted = [...data.history].sort((a, b) => b.date.localeCompare(a.date));

  if (sorted.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-4">
        <h1 className="text-xl font-black text-racing-orange mb-4">📅 トレーニング記録</h1>
        <div className="text-center text-gray-500 mt-16">
          <div className="text-4xl mb-3">📋</div>
          <div>まだ記録がありません</div>
          <div className="text-xs mt-1">ミッションを完了すると記録されます</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-4">
      <h1 className="text-xl font-black text-racing-orange mb-4">📅 トレーニング記録</h1>

      <div className="space-y-3">
        {sorted.map(rec => {
          const dayData = WEEK1_MISSIONS.find(m => m.date === rec.date);
          const isPerfect = rec.isPerfectDay;
          const hasMemo   = !!rec.memo;

          return (
            <div
              key={rec.date}
              className={`bg-bg-card rounded-2xl border p-4 ${
                isPerfect ? 'border-yellow-500' : 'border-gray-700'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-xs text-gray-400">{rec.date}</div>
                  {dayData && (
                    <div className="font-bold text-sm text-white">
                      Day {dayData.dayNumber} — {dayData.dayName}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isPerfect && <span className="text-yellow-400 text-lg">🏆</span>}
                  <span className="text-racing-yellow font-bold text-sm">
                    +{rec.totalExp} EXP
                  </span>
                </div>
              </div>

              {/* Completions */}
              <div className="space-y-0.5 mb-2">
                {rec.completions?.map(c => {
                  const mission = dayData?.missions.find(m => m.id === c.missionId);
                  return (
                    <div key={c.missionId} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-green-400">✓</span>
                      <span>{mission?.title || c.missionId}</span>
                      <span className="text-gray-500 ml-auto">{c.exp} EXP</span>
                    </div>
                  );
                })}
              </div>

              {/* Memo */}
              {hasMemo && (
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="text-xs text-blue-400 font-semibold mb-1">📝 メモ</div>
                  {rec.memo.condition && (
                    <div className="text-xs text-gray-300">
                      体調: {'⭐'.repeat(rec.memo.condition)}{'☆'.repeat(5 - rec.memo.condition)} ({rec.memo.condition}/5)
                    </div>
                  )}
                  {rec.memo.fatigue !== undefined && (
                    <div className="text-xs text-gray-300">
                      疲労: {'🔴'.repeat(rec.memo.fatigue)}{'⚪'.repeat(5 - rec.memo.fatigue)} ({rec.memo.fatigue}/5)
                    </div>
                  )}
                  {rec.memo.pain?.length > 0 && (
                    <div className="text-xs text-red-400">
                      違和感: {rec.memo.pain.map(p => PAIN_LABELS[p] || p).join('・')}
                    </div>
                  )}
                  {rec.memo.text && (
                    <div className="text-xs text-gray-300 mt-1 leading-relaxed whitespace-pre-wrap">
                      {rec.memo.text}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
