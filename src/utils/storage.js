const KEY = 'gt-racer-app-data';

export function loadData() {
  try {
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getDefaultData() {
  return {
    profile: {
      name: 'Boss',
      startDate: '2026-02-18',
      currentRank: 'Rookie',
      totalExp: 0,
      currentStreak: 0,
      longestStreak: 0,
    },
    history: [],
    dropboxToken: '',
  };
}
