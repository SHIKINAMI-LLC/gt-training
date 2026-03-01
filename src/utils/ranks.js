export const RANKS = [
  { rank: 'Rookie',   minExp: 0,    maxExp: 499,      color: '#10B981', icon: '🟢' },
  { rank: 'Amateur',  minExp: 500,  maxExp: 1499,     color: '#3B82F6', icon: '🔵' },
  { rank: 'Semi-Pro', minExp: 1500, maxExp: 2999,     color: '#FBBF24', icon: '🟡' },
  { rank: 'Pro',      minExp: 3000, maxExp: 4999,     color: '#F97316', icon: '🟠' },
  { rank: 'Elite',    minExp: 5000, maxExp: 7499,     color: '#DC2626', icon: '🔴' },
  { rank: 'Legend',   minExp: 7500, maxExp: Infinity, color: '#000000', icon: '⚫' },
];

export function getRankByExp(exp) {
  for (const r of RANKS) if (exp >= r.minExp && exp <= r.maxExp) return r.rank;
  return 'Rookie';
}

export function getNextRankInfo(currentExp) {
  const cur = RANKS.find(r => currentExp >= r.minExp && currentExp <= r.maxExp);
  const idx = RANKS.findIndex(r => r.rank === cur?.rank);
  const next = RANKS[idx + 1];
  if (!next) return { nextRank: 'Legend', nextRankExp: Infinity, progress: 100 };
  const progress = ((currentExp - cur.minExp) / (next.minExp - cur.minExp)) * 100;
  return { nextRank: next.rank, nextRankExp: next.minExp, progress: Math.min(Math.round(progress), 100) };
}
