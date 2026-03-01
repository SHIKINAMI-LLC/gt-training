import { useState } from 'react';
import ExerciseItem from './ExerciseItem.jsx';
import { getBadgeHTML } from '../../utils/badges.js';

const TYPE_STYLES = {
  required1: { border: 'border-blue-500',   bg: 'bg-blue-900/20',   tag: 'bg-blue-600',   label: '必須' },
  required2: { border: 'border-racing-orange', bg: 'bg-orange-900/20', tag: 'bg-racing-orange', label: '必須' },
  bonus:     { border: 'border-gray-500',   bg: 'bg-gray-800/40',   tag: 'bg-gray-600',   label: 'BONUS' },
};

export default function MissionCard({
  mission,
  isCompleted,
  canAct,
  onComplete,
  onUndo,
  onMemo,
  showMemoButton,
}) {
  const [open, setOpen] = useState(false);
  const [weatherMode, setWeatherMode] = useState(false);

  const style = TYPE_STYLES[mission.type] || TYPE_STYLES.bonus;
  const hasWeather = !!mission.weatherExercises;
  const displayExercises = weatherMode && hasWeather ? mission.weatherExercises : mission.exercises;

  // Build badge HTML string (used via dangerouslySetInnerHTML)
  const badgeHtml = getBadgeHTML(mission.scienceBadge);

  return (
    <div className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden mb-3`}>
      {/* Card Header */}
      <div
        className="flex items-start justify-between gap-2 p-3 cursor-pointer"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${style.tag} text-white`}>
              {style.label}
            </span>
            <span className="text-xs text-racing-yellow font-semibold">+{mission.exp} EXP</span>
            {badgeHtml && (
              <span
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: badgeHtml }}
              />
            )}
          </div>
          <div className="font-bold text-sm text-white leading-tight">{mission.title}</div>
          <div className="text-xs text-gray-400 mt-0.5">{mission.description}</div>
          <div className="text-xs text-gray-500 mt-0.5">⏱ {mission.duration}</div>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          {isCompleted && (
            <span className="text-green-400 text-lg font-bold">✓</span>
          )}
          <span className="text-gray-500 text-xs">{open ? '▲' : '▼'}</span>
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-gray-700 px-3 pb-3 pt-2">
          {/* Weather toggle */}
          {hasWeather && canAct && (
            <button
              className={`mb-3 text-xs px-3 py-1 rounded-full border transition-colors ${
                weatherMode
                  ? 'border-blue-400 text-blue-400 bg-blue-900/20'
                  : 'border-gray-500 text-gray-400 hover:border-gray-300'
              }`}
              onClick={() => setWeatherMode(m => !m)}
            >
              {weatherMode ? '☀️ 通常プランに戻す' : '🌧️ 天気NG → 室内代替プランを表示'}
            </button>
          )}

          {/* Exercise list */}
          <div className="space-y-1">
            {displayExercises?.map((ex, i) => (
              <ExerciseItem key={i} ex={ex} />
            ))}
          </div>

          {/* Action buttons */}
          {canAct && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {!isCompleted ? (
                <button
                  className="flex-1 bg-racing-orange hover:bg-orange-500 text-white font-bold text-sm py-2 rounded-lg transition-colors"
                  onClick={(e) => { e.stopPropagation(); onComplete(mission.id, mission.exp); }}
                >
                  ✓ 完了 +{mission.exp} EXP
                </button>
              ) : (
                <button
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold text-sm py-2 rounded-lg transition-colors"
                  onClick={(e) => { e.stopPropagation(); onUndo(mission.id, mission.exp); }}
                >
                  ↩ 取り消し
                </button>
              )}
              {showMemoButton && isCompleted && (
                <button
                  className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                  onClick={(e) => { e.stopPropagation(); onMemo(); }}
                >
                  📝 メモ
                </button>
              )}
            </div>
          )}

          {!canAct && (
            <div className="mt-3 text-xs text-gray-500 text-center">
              {isCompleted ? '✓ 完了済み' : '（この日は操作できません）'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
