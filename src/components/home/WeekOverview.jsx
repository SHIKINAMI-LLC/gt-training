import { getTrainingDate } from '../../utils/dates.js';
import { getWeekDateRange } from '../../data/allMissions.js';

const DAY_ABBR_MAP = {
  0: '日', 1: '月', 2: '火', 3: '水', 4: '木', 5: '金', 6: '土',
};

function getDayAbbr(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return DAY_ABBR_MAP[d.getDay()] || '?';
}

export default function WeekOverview({ history, previewDayIdx, onSelectDay, currentWeek }) {
  const today = getTrainingDate();
  const missions = currentWeek ? currentWeek.missions : [];
  const weekLabel = currentWeek ? currentWeek.label : 'Week ?';
  const dateRange = currentWeek ? getWeekDateRange(currentWeek) : '';

  return (
    <div className="bg-bg-card rounded-2xl p-4 mb-4 border border-gray-700">
      <div className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wide">
        {weekLabel} — {dateRange}
      </div>
      <div className="flex justify-between gap-1">
        {missions.map((day, idx) => {
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
                {getDayAbbr(day.date)}
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
