// JST（UTC+9）で午前3時を日付変更ラインとする
// UTC+9 - 3h = UTC+6 相当にシフト
export function getTrainingDate() {
  const shifted = new Date(Date.now() + 6 * 60 * 60 * 1000);
  return shifted.toISOString().split('T')[0];
}
