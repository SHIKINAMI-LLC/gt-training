import { WEEK1_MISSIONS } from '../../data/week1.js';
import { getTrainingDate } from '../../utils/dates.js';

const DAY_ABBR = ['月', '火', '水', '木', '金', '土', '日'];

export default function WeekOverview({ history, previewDayIdx, onSelectDay }) {
  const today = getTrainingDate();

  return (
    <div className="bg-bg-card rounded-2xl p-4 mb-4 border border-gray-700">
      <div className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wide">
        Week 1 — 2/18〜2/24
      </div>
      <div className="flex justify-between gap-1">
        {WEEK1_MISSIONS.map((day, idx) => {
          const isToday = day.date === today;
          const isPast  = day.date < today;
          const isFuture = day.date > today;

          // completion status
          const rec = history.find(h => h.date === day.date);
          const completedCount = rec?.completions?.length || 0;
          const totalMissions  = day.missions.length;
          const isPerfect      = rec?.isPerfectDay;
          const isSelected     = previewDayIdx === idx;

          // Ring color
          let ringClass = '';
          if (isSelected)        ringClass = 'ring-2 ring-white';
          else if (isToday && previewDayIdx < 0) ringClass = 'ring-2 ring-racing-orange';

          // Background
          let bgClass = 'bg-gray-800 text-gray-400';
          if (isPerfect)         bgClass = 'bg-yellow-500 text-black';
          else if (completedCount > 0) bgClass = 'bg-green-700 text-white';
          else if (isToday)      bgClass = 'bg-racing-orange text-white';
          else if (isPast)       bgClass = 'bg-gray-700 text-gray-500';

          return (
            <button
              key={day.date}
              onClick={() => onSelectDay(isSelected ? -1 : idx)}
              className={`flex-1 flex flex-col items-center gap-1 rounded-xl py-2 transition-all ${bgClass} ${ringClass}`}
            >
              <span className="text-xs font-bold">
                {DAY_ABBR[idx]}
              </span>
              <span className="text-lg font-black">
                {day.dayNumber}
              </span>
              {isPerfect ? (
                <span className="text-xs">🏆</span>
              ) : completedCount > 0 ? (
                <span className="text-xs">{completedCount}/{totalMissions}</span>
              ) : isToday ? (
                <span className="text-xs">▶</span>
              ) : isFuture ? (
                <span className="text-xs text-gray-500">○</span>
              ) : (
                <span className="text-xs">—</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
