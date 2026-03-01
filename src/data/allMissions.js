// ========== ALL MISSIONS — 全Week統合レジストリ ==========
// 新しいWeekファイルを追加したら、ここにimport + 配列に追加するだけ

import { WEEK1_MISSIONS } from './week1.js';
import { WEEK2_MISSIONS } from './week2.js';
import { WEEK3_MISSIONS } from './week3.js';
import { WEEK4_MISSIONS } from './week4.js';
import { WEEK5_MISSIONS } from './week5.js';
import { WEEK6_MISSIONS } from './week6.js';

// 全ミッションを1つの配列に結合（日付順）
export const ALL_MISSIONS = [
  ...WEEK1_MISSIONS,
  ...WEEK2_MISSIONS,
  ...WEEK3_MISSIONS,
  ...WEEK4_MISSIONS,
  ...WEEK5_MISSIONS,
  ...WEEK6_MISSIONS,
];

// Week定義（表示用）
export const WEEKS = [
  { id: 1, label: 'Week 1', missions: WEEK1_MISSIONS },
  { id: 2, label: 'Week 2', missions: WEEK2_MISSIONS },
  { id: 3, label: 'Week 3', missions: WEEK3_MISSIONS },
  { id: 4, label: 'Week 4', missions: WEEK4_MISSIONS },
  { id: 5, label: 'Week 5', missions: WEEK5_MISSIONS },
  { id: 6, label: 'Week 6', missions: WEEK6_MISSIONS },
];

// 日付から該当するWeekを取得
export function getWeekForDate(dateStr) {
  for (const week of WEEKS) {
    if (week.missions.some(m => m.date === dateStr)) {
      return week;
    }
  }
  // 日付が見つからない場合、最も近い未来のWeekを返す
  // または最後のWeekを返す
  return WEEKS[WEEKS.length - 1];
}

// 日付から該当するdayデータを取得
export function getDayForDate(dateStr) {
  return ALL_MISSIONS.find(m => m.date === dateStr) || null;
}

// 現在のWeekの開始・終了日を取得
export function getWeekDateRange(week) {
  if (!week || !week.missions || week.missions.length === 0) return '';
  const first = week.missions[0].date;
  const last = week.missions[week.missions.length - 1].date;
  const f = first.split('-');
  const l = last.split('-');
  return `${parseInt(f[1])}/${parseInt(f[2])}〜${parseInt(l[1])}/${parseInt(l[2])}`;
}
