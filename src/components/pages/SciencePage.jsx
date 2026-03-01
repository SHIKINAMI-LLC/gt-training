import { SCIENCE_NOTES } from '../../data/scienceNotes.js';

const BADGE_STYLES = {
  science: { bg: 'bg-blue-900/40 border-blue-500',  label: '🔬 科学的根拠',  text: 'text-blue-400' },
  f1:      { bg: 'bg-red-900/40 border-red-500',    label: '🏎️ F1/Red Bull', text: 'text-red-400'  },
  safety:  { bg: 'bg-yellow-900/40 border-yellow-500', label: '🛡️ 安全',    text: 'text-yellow-400' },
};

export default function SciencePage() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-4">
      <h1 className="text-xl font-black text-racing-orange mb-1">🔬 科学的根拠</h1>
      <p className="text-xs text-gray-400 mb-4">このトレーニングプログラムの背景にある研究・公式データ</p>

      <div className="space-y-3">
        {SCIENCE_NOTES.map((note, i) => {
          const badge = BADGE_STYLES[note.badge] || BADGE_STYLES.science;
          return (
            <div key={i} className={`rounded-2xl border p-4 ${badge.bg}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{note.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gray-800 ${badge.text}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs text-gray-500">{note.category}</span>
                  </div>
                  <div className="font-bold text-sm text-white mb-1 leading-tight">{note.title}</div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-2">{note.content}</p>
                  <div className="text-xs text-gray-500 italic">📖 {note.source}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-xs text-gray-600 text-center pb-4">
        ※ このプログラムは科学的研究に基づいていますが、個人の体調に合わせて調整してください。
      </div>
    </div>
  );
}
