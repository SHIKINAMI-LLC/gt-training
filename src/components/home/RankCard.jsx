import { RANKS, getNextRankInfo } from '../../utils/ranks.js';

export default function RankCard({ profile }) {
  const { nextRank, nextRankExp, progress } = getNextRankInfo(profile.totalExp);
  const rankData = RANKS.find(r => r.rank === profile.currentRank);
  const isLegend = profile.currentRank === 'Legend';

  return (
    <div className="bg-bg-card rounded-2xl p-4 mb-4 border border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-gray-400 mb-0.5">RACER RANK</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{rankData?.icon}</span>
            <span className="text-xl font-black" style={{ color: rankData?.color }}>
              {profile.currentRank}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">TOTAL EXP</div>
          <div className="text-2xl font-black text-racing-yellow">{profile.totalExp.toLocaleString()}</div>
        </div>
      </div>

      {/* EXP Progress Bar */}
      {!isLegend && (
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{profile.totalExp} EXP</span>
            <span>→ {nextRank} ({nextRankExp} EXP)</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                backgroundColor: rankData?.color || '#F97316',
              }}
            />
          </div>
          <div className="text-right text-xs text-gray-500 mt-0.5">{progress}%</div>
        </div>
      )}

      {isLegend && (
        <div className="text-center text-xs text-gray-400">
          🏆 最高ランク達成！
        </div>
      )}

      {/* Streak */}
      {profile.currentStreak > 0 && (
        <div className="mt-2 flex items-center gap-2 text-xs text-racing-orange">
          <span>🔥</span>
          <span>{profile.currentStreak}日連続トレーニング中</span>
        </div>
      )}
    </div>
  );
}
