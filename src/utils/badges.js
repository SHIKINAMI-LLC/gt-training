export function getBadgeHTML(badge) {
  if (!badge) return '';
  const map = {
    science: '<span class="science-badge">📊 科学的根拠</span>',
    f1:      '<span class="f1-badge">🏎️ F1公式</span>',
    safety:  '<span class="safety-badge">🛡️ 安全改訂</span>',
    new:     '<span class="new-badge">🆕 新規追加</span>',
  };
  return map[badge] || '';
}
