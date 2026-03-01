export default function BottomNav({ currentPage, onNavigate }) {
  const tabs = [
    { id: 'home',     icon: '🏠', label: 'ホーム' },
    { id: 'progress', icon: '📊', label: '進捗' },
    { id: 'science',  icon: '🔬', label: '科学' },
    { id: 'history',  icon: '📅', label: '記録' },
    { id: 'settings', icon: '⚙️', label: '設定' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-card border-t border-gray-700 z-50">
      <div className="flex justify-around items-center py-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
              currentPage === tab.id
                ? 'text-racing-orange'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
