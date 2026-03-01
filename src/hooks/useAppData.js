import { useState, useCallback } from 'react';
import { loadData, saveData, getDefaultData } from '../utils/storage';
import { getRankByExp } from '../utils/ranks';
import { getTrainingDate } from '../utils/dates';

function init() {
  return loadData() || getDefaultData();
}

export function useAppData() {
  const [appData, setAppData] = useState(init);

  const persist = useCallback((updater) => {
    setAppData(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveData(next);
      return next;
    });
  }, []);

  // 今日のレコードを取得
  function getTodayRecord(data = appData) {
    const today = getTrainingDate();
    return data.history.find(h => h.date === today) || null;
  }

  // ミッション完了確認（指定日 or 今日）
  function isMissionCompleted(missionId, date) {
    const d = date || getTrainingDate();
    const rec = appData.history.find(h => h.date === d);
    return rec?.completions?.some(c => c.missionId === missionId) || false;
  }

  // ミッション完了
  function completeMission(missionId, exp) {
    const today = getTrainingDate();
    let rankUp = false;
    persist(prev => {
      const next = structuredClone(prev);
      let rec = next.history.find(h => h.date === today);
      if (!rec) {
        rec = { date: today, completions: [], totalExp: 0, isPerfectDay: false, memo: null };
        next.history.push(rec);
      }
      if (!rec.completions.some(c => c.missionId === missionId)) {
        rec.completions.push({ missionId, exp, completedAt: new Date().toISOString() });
        rec.totalExp += exp;
        const oldRank = next.profile.currentRank;
        next.profile.totalExp += exp;
        next.profile.currentRank = getRankByExp(next.profile.totalExp);
        rankUp = oldRank !== next.profile.currentRank;
      }
      return next;
    });
    return rankUp;
  }

  // ミッション完了取り消し
  function undoMission(missionId, exp) {
    const today = getTrainingDate();
    persist(prev => {
      const next = structuredClone(prev);
      const rec = next.history.find(h => h.date === today);
      if (!rec) return prev;
      const idx = rec.completions.findIndex(c => c.missionId === missionId);
      if (idx === -1) return prev;
      rec.completions.splice(idx, 1);
      rec.totalExp = Math.max(0, rec.totalExp - exp);
      next.profile.totalExp = Math.max(0, next.profile.totalExp - exp);
      next.profile.currentRank = getRankByExp(next.profile.totalExp);
      return next;
    });
  }

  // メモ保存
  function saveMemo(memo) {
    const today = getTrainingDate();
    persist(prev => {
      const next = structuredClone(prev);
      let rec = next.history.find(h => h.date === today);
      if (!rec) {
        rec = { date: today, completions: [], totalExp: 0, isPerfectDay: false, memo: null };
        next.history.push(rec);
      }
      rec.memo = memo;
      return next;
    });
  }

  // Dropboxトークン保存
  function saveDropboxToken(token) {
    persist(prev => ({ ...prev, dropboxToken: token }));
  }

  // データリセット
  function resetData() {
    const d = getDefaultData();
    setAppData(d);
    saveData(d);
  }

  return {
    appData,
    getTodayRecord,
    isMissionCompleted,
    completeMission,
    undoMission,
    saveMemo,
    saveDropboxToken,
    resetData,
    persist,
  };
}
