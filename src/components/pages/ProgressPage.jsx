import { RANKS, getNextRankInfo } from '../../utils/ranks.js';
import { WEEK1_MISSIONS } from '../../data/week1.js';

export default function ProgressPage({ appData }) {
  const { appData: data } = appData;
  const { profile, history } = data;
  const { nextRank, nextRankExp, progress } = getNextRankInfo(profile.totalExp);

  const completedDays   = history.filter(h => h.completions?.length > 0).length;
  const perfectDays     = history.filter(h => h.isPerfectDay).length;
  const totalExpEarned  = history.reduce((s, h) => s + (h.totalExp || 0), 0);

  const rankData = RANKS.find(r => r.rank === profile.currentRank);

  return (
    <div className="max-w-lg mx-auto px-4 pt-4">
      <h1 className="text-xl font-black text-racing-orange mb-4">📊 進捗ダッシュボード</h1>

      {/* Rank overview */}
      <div className="bg-bg-card rounded-2xl p-4 mb-4 border border-gray-700">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{rankData?.icon}</span>
          <div>
            <div className="text-xs text-gray-400">現在のランク</div>
            <div className="text-2xl font-black" style={{ color: rankData?.color }}>
              {profile.currentRank}
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-xs text-gray-400">TOTAL EXP</div>
            <div className="text-2xl font-black text-racing-yellow">
              {profile.totalExp.toLocaleString()}
            </div>
          </div>
        </div>

        {profile.currentRank !== 'Legend' && (
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>次のランク: {nextRank}</span>
              <span>{nextRankExp - profile.totalExp} EXP 残り</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, backgroundColor: rankData?.color }}
              />
            </div>
            <div className="text-right text-xs text-gray-500 mt-0.5">{progress}%</div>
          </div>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'トレーニング日数', value: completedDays, unit: '日', icon: '📅' },
          { label: 'パーフェクトデー', value: perfectDays, unit: '日', icon: '🏆' },
          { label: '連続記録',         value: profile.currentStreak, unit: '日', icon: '🔥' },
          { label: '最長連続記録',      value: profile.longestStreak, unit: '日', icon: '⚡' },
        ].map(stat => (
          <div key={stat.label} className="bg-bg-card rounded-xl p-3 border border-gray-700 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-black text-white">{stat.value}<span className="text-sm text-gray-400">{stat.unit}</span></div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Rank road map */}
      <div className="bg-bg-card rounded-2xl p-4 border border-gray-700 mb-4">
        <div className="text-sm font-bold text-white mb-3">🗺️ ランクロードマップ</div>
        <div className="space-y-2">
          {RANKS.map(r => {
            const isCurrentRank = r.rank === profile.currentRank;
            const isUnlocked    = profile.totalExp >= r.minExp;
            return (
              <div
                key={r.rank}
                className={`flex items-center gap-3 p-2 rounded-lg ${
                  isCurrentRank ? 'bg-gray-700 border border-gray-500' : ''
                }`}
              >
                <span className="text-xl">{r.icon}</span>
                <div className="flex-1">
                  <div className={`font-bold text-sm ${isUnlocked ? '' : 'text-gray-500'}`}
                       style={{ color: isUnlocked ? r.color : undefined }}>
                    {r.rank}
                    {isCurrentRank && <span className="text-xs text-gray-300 ml-2">← 現在</span>}
                  </div>
                  <div className="text-xs text-gray-500">{r.minExp.toLocaleString()} EXP〜</div>
                </div>
                {isUnlocked && <span className="text-green-400 text-sm">✓</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Week 1 completion */}
      <div className="bg-bg-card rounded-2xl p-4 border border-gray-700">
        <div className="text-sm font-bold text-white mb-3">📋 Week 1 達成状況</div>
        <div className="space-y-1.5">
          {WEEK1_MISSIONS.map(day => {
            const rec = history.find(h => h.date === day.date);
            const completed = rec?.completions?.length || 0;
            const total     = day.missions.length;
            const pct       = total > 0 ? Math.round((completed / total) * 100) : 0;
            return (
              <div key={day.date} className="flex items-center gap-2">
                <div className="text-xs text-gray-400 w-24 flex-shrink-0">
                  Day {day.dayNumber} {day.dayName.split(' ')[0]}
                </div>
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: rec?.isPerfectDay ? '#FBBF24' : '#22c55e',
                    }}
                  />
                </div>
                <div className="text-xs text-gray-400 w-10 text-right">{completed}/{total}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
