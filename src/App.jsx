import { useState } from 'react';
import { useAppData } from './hooks/useAppData.js';
import BottomNav from './components/layout/BottomNav.jsx';
import ExpModal from './components/layout/ExpModal.jsx';
import HomePage from './components/home/HomePage.jsx';
import ProgressPage from './components/pages/ProgressPage.jsx';
import SciencePage from './components/pages/SciencePage.jsx';
import HistoryPage from './components/pages/HistoryPage.jsx';
import SettingsPage from './components/pages/SettingsPage.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [expModal, setExpModal] = useState(null); // { gained, newTotal, rankUp, newRank }
  const appData = useAppData();

  function handleMissionComplete(missionId, exp) {
    // completeMission returns rankUp boolean synchronously (updater runs sync)
    const rankUp = appData.completeMission(missionId, exp);
    // Show EXP modal — newRank is read after state update in next render,
    // so we pull currentRank from the hook's stale value then re-read after timeout
    setExpModal({ gained: exp, rankUp });
    setTimeout(() => setExpModal(null), 2500);
  }

  return (
    <div className="min-h-screen bg-bg-dark text-white overflow-x-hidden" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}>
      {page === 'home' && (
        <HomePage
          appData={appData}
          onMissionComplete={handleMissionComplete}
        />
      )}
      {page === 'progress' && <ProgressPage appData={appData} />}
      {page === 'science' && <SciencePage />}
      {page === 'history' && <HistoryPage appData={appData} />}
      {page === 'settings' && <SettingsPage appData={appData} />}

      <BottomNav currentPage={page} onNavigate={setPage} />
      {expModal && (
        <ExpModal
          gained={expModal.gained}
          rankUp={expModal.rankUp}
          newRank={expModal.newRank}
          onClose={() => setExpModal(null)}
        />
      )}
    </div>
  );
}
