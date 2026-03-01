# GT RACER TRAINING APP v3.0

GT300カテゴリー向けレーシングドライバー専用トレーニングアプリ

## セットアップ

```bash
npm install
npm run dev
```

## GitHubへのプッシュ方法

ターミナルで以下を実行（`gt-racer` フォルダの中で）：

```bash
git push origin main
```

このフォルダがどこにあるか分からない場合は、Macのターミナルで：

```bash
# gt-racerフォルダを探す
find ~ -name "gt-racer" -type d 2>/dev/null
# 表示されたパスに移動してpush
cd <表示されたパス>
git push origin main
```

## Vercelデプロイ設定

Vercelでプロジェクトをインポートする際の設定：

| 設定項目 | 値 |
|---|---|
| Framework Preset | Vite |
| Root Directory | `.` （変更不要） |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

> GitHubリポジトリのルート = このREADMEがある場所 = gt-racer フォルダ

## 技術スタック

- React 18 + Vite 5
- Tailwind CSS 3
- Dropbox API（メモ自動バックアップ）
