export default function ExpModal({ gained, rankUp, newRank, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      onClick={onClose}
    >
      <div className="bg-bg-card border border-racing-orange rounded-2xl px-8 py-6 text-center shadow-2xl pointer-events-auto animate-bounce-in">
        <div className="text-4xl mb-2">⚡</div>
        <div className="text-racing-yellow font-bold text-2xl mb-1">
          +{gained} EXP
        </div>
        {rankUp ? (
          <div className="text-racing-orange font-bold text-lg">
            🏆 RANK UP! → {newRank}
          </div>
        ) : (
          <div className="text-gray-300 text-sm">ミッション完了！</div>
        )}
      </div>
    </div>
  );
}
