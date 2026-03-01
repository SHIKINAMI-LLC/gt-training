import { useState } from 'react';
import { getTrainingDate } from '../../utils/dates.js';
import { WEEK1_MISSIONS } from '../../data/week1.js';
import RankCard from './RankCard.jsx';
import WeekOverview from './WeekOverview.jsx';
import MissionCard from './MissionCard.jsx';
import MemoModal from '../memo/MemoModal.jsx';

function getTodayMissions() {
  const today = getTrainingDate();
  return WEEK1_MISSIONS.find(m => m.date === today) || WEEK1_MISSIONS[0];
}

export default function HomePage({ appData, onMissionComplete }) {
  const [previewDayIdx, setPreviewDayIdx] = useState(-1);
  const [showMemo, setShowMemo] = useState(false);

  const { appData: data, isMissionCompleted, undoMission, saveMemo } = appData;
  const today = getTrainingDate();

  // Which day to display in main area
  const todayMissions = getTodayMissions();
  const displayedDay  = previewDayIdx >= 0 ? WEEK1_MISSIONS[previewDayIdx] : todayMissions;
  // previewDayIdx === -1 のとき「今日モード」 → 操作可能
  // Week1の日程（2/18-24）が過ぎていても、previewしていなければ今日として扱う
  const isViewingToday = previewDayIdx === -1;
  const isPastDay      = displayedDay.date < today;

  function handleSelectDay(idx) {
    setPreviewDayIdx(idx);
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-400">GT RACER TRAINING APP</div>
          <h1 className="text-xl font-black text-racing-orange tracking-wide">
            🏁 MISSION CONTROL
          </h1>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">{today}</div>
          <div className="text-xs text-gray-400">Week 1</div>
        </div>
      </div>

      {/* Rank Card */}
      <RankCard profile={data.profile} />

      {/* Week Overview */}
      <WeekOverview
        history={data.history}
        previewDayIdx={previewDayIdx}
        onSelectDay={handleSelectDay}
      />

      {/* "Viewing past/future" banner */}
      {!isViewingToday && (
        <div className="flex items-center justify-between bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 mb-4">
          <span className="text-xs text-gray-300">
            {isPastDay ? '📅 過去のトレーニングを表示中' : '🔮 予定のトレーニングを表示中'}
          </span>
          <button
            onClick={() => setPreviewDayIdx(-1)}
            className="text-xs text-racing-orange hover:text-orange-300 font-semibold whitespace-nowrap ml-2"
          >
            今日に戻る ✕
          </button>
        </div>
      )}

      {/* Day header */}
      <div className="mb-3">
        <div className="text-xs text-gray-400 mb-0.5">
          Day {displayedDay.dayNumber} — {displayedDay.date}
        </div>
        <h2 className="text-lg font-black text-white">{displayedDay.dayName}</h2>
        <p className="text-xs text-gray-400">{displayedDay.theme}</p>
        {displayedDay.scienceNote && (
          <p className="text-xs text-blue-400 mt-1 leading-relaxed">
            🔬 {displayedDay.scienceNote}
          </p>
        )}
      </div>

      {/* Mission Cards */}
      <div>
        {displayedDay.missions.map((mission, idx) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            isCompleted={isMissionCompleted(mission.id, displayedDay.date)}
            canAct={isViewingToday}
            onComplete={onMissionComplete}
            onUndo={undoMission}
            onMemo={() => setShowMemo(true)}
            showMemoButton={idx === displayedDay.missions.length - 1}
          />
        ))}
      </div>

      {/* Memo button (floating, only today) */}
      {isViewingToday && (
        <div className="mt-2 mb-6">
          <button
            onClick={() => setShowMemo(true)}
            className="w-full border border-gray-600 hover:border-blue-400 text-gray-400 hover:text-blue-400 text-sm py-2.5 rounded-xl transition-colors"
          >
            📝 今日の体調メモを記録する
          </button>
        </div>
      )}

      {/* Memo Modal */}
      {showMemo && (
        <MemoModal
          date={today}
          existingMemo={data.history.find(h => h.date === today)?.memo}
          dropboxToken={data.dropboxToken}
          profile={data.profile}
          dayData={todayMissions}
          completions={data.history.find(h => h.date === today)?.completions}
          onSave={(memo) => {
            saveMemo(memo);
            setShowMemo(false);
          }}
          onClose={() => setShowMemo(false)}
        />
      )}
    </div>
  );
}
