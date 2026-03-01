import { useState } from 'react';

export default function SettingsPage({ appData }) {
  const { appData: data, saveDropboxToken, resetData } = appData;
  const [tokenInput, setTokenInput] = useState(data.dropboxToken || '');
  const [saved, setSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  function handleSaveToken() {
    saveDropboxToken(tokenInput.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleReset() {
    if (confirmReset) {
      resetData();
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
      setTimeout(() => setConfirmReset(false), 5000);
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-4">
      <h1 className="text-xl font-black text-racing-orange mb-4">⚙️ 設定</h1>

      {/* Profile */}
      <div className="bg-bg-card rounded-2xl border border-gray-700 p-4 mb-4">
        <div className="text-sm font-bold text-white mb-3">👤 プロフィール</div>
        <div className="space-y-1.5 text-sm">
          {[
            { label: 'レーサー名',     value: data.profile.name },
            { label: '開始日',        value: data.profile.startDate },
            { label: '現在のランク',   value: data.profile.currentRank },
            { label: '累計 EXP',      value: `${data.profile.totalExp.toLocaleString()} EXP` },
            { label: '連続記録',       value: `${data.profile.currentStreak}日` },
          ].map(item => (
            <div key={item.label} className="flex justify-between">
              <span className="text-gray-400">{item.label}</span>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dropbox token */}
      <div className="bg-bg-card rounded-2xl border border-gray-700 p-4 mb-4">
        <div className="text-sm font-bold text-white mb-1">📦 Dropbox 連携</div>
        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
          トークンを設定すると、メモを Dropbox の
          <code className="text-blue-400 mx-1">Training_App/GT_Racer_Memos/</code>
          フォルダへ自動保存します。
          <br />
          取得方法: <span className="text-blue-400">developer.dropbox.com</span> → App Console → アプリ作成 → Access Token 生成
        </p>
        <textarea
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
          rows={3}
          placeholder="sl.xxxxxxxxxxxxxxxx..."
          value={tokenInput}
          onChange={e => setTokenInput(e.target.value)}
        />
        <button
          onClick={handleSaveToken}
          className={`mt-2 w-full py-2 rounded-lg font-semibold text-sm transition-colors ${
            saved
              ? 'bg-green-700 text-white'
              : 'bg-blue-700 hover:bg-blue-600 text-white'
          }`}
        >
          {saved ? '✓ 保存しました' : 'トークンを保存'}
        </button>
        {data.dropboxToken && (
          <div className="mt-1.5 text-xs text-green-400">✓ Dropbox 連携済み</div>
        )}
      </div>

      {/* About */}
      <div className="bg-bg-card rounded-2xl border border-gray-700 p-4 mb-4">
        <div className="text-sm font-bold text-white mb-2">ℹ️ アプリ情報</div>
        <div className="text-xs text-gray-400 space-y-0.5">
          <div>GT RACER TRAINING APP v3.0</div>
          <div>Goal: GT300 Racing Driver</div>
          <div>Framework: Vite + React + Tailwind</div>
          <div>Data: LocalStorage (端末内のみ)</div>
        </div>
      </div>

      {/* Reset */}
      <div className="bg-bg-card rounded-2xl border border-red-900 p-4 mb-8">
        <div className="text-sm font-bold text-red-400 mb-2">⚠️ データリセット</div>
        <p className="text-xs text-gray-400 mb-3">
          すべてのトレーニング記録・EXP・ランクを初期化します。この操作は取り消せません。
        </p>
        <button
          onClick={handleReset}
          className={`w-full py-2 rounded-lg font-semibold text-sm transition-colors ${
            confirmReset
              ? 'bg-red-700 hover:bg-red-600 text-white animate-pulse'
              : 'bg-gray-800 hover:bg-red-900 text-red-400 border border-red-800'
          }`}
        >
          {confirmReset ? '⚠️ もう一度タップで確定リセット' : 'データをリセット'}
        </button>
      </div>
    </div>
  );
}
