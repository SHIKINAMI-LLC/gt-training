import {
  getStandardMobility,
  getCooldown,
  getCyclingCooldown,
} from './exercises.js';

export const WEEK6_MISSIONS = [
  // ============================================
  // DAY 36 - Wednesday, Mar 25: CARDIO (deload)
  // ============================================
  {
    date: '2026-03-25',
    dayNumber: 36,
    dayName: 'CARDIO',
    theme: 'デロードウィーク — Zone 2サイクリング減量',
    scienceNote: 'デロードウィークは量を減らして質を維持。回復＋適応の最大化（Supercompensation理論）',
    missions: [
      {
        id: 'm36-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm36-req2',
        type: 'required2',
        title: '必須2: インドアサイクリング (Zone 2)',
        description: 'スピンバイク or ローラー台で心拍130-145 bpmを60分キープ',
        duration: '60分',
        exp: 100,
        scienceBadge: 'science',
        exercises: [
          {
            name: 'Indoor Cycling (Zone 2)',
            detail: '60分',
            howto: [
              'スピンバイク or ローラー台でセットアップ',
              '心拍130-145 bpmを維持',
              '脱力感のない強度キープ（会話は短く）',
              'デロードウィーク = 量を減らして質を維持',
              '毎5分ごとに心拍チェック & ペースメモ',
            ],
            points: [
              '回復とスーパーコンペンセーション理論を活用',
              'Zone 2内での一貫性が最優先',
              '脚が重ければペダルスピンを下げてもOK',
            ],
            ng: 'NG: 高心拍化する、無理して負荷を上げる',
            interval: 'N/A',
          },
          ...getCyclingCooldown(),
        ],
      },
      {
        id: 'm36-bonus',
        type: 'bonus',
        title: 'ボーナス: 拡張サイクリング',
        description: 'Zone 2内で追加15分継続',
        duration: '15分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'Extended Cycling',
            detail: '+15分',
            howto: [
              'Zone 2内で追加15分継続',
              '気分が良い場合のみ実施',
              '強度は低める、ケイデンス重視',
            ],
            points: [
              'ボーナス心拍数を稼ぐ',
              'エアロベースの強化',
            ],
            ng: 'NG: 疲れているのに無理して続ける',
            interval: 'N/A',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 37 - Thursday, Mar 26: UPPER + NECK + GRIP
  // ============================================
  {
    date: '2026-03-26',
    dayNumber: 37,
    dayName: 'UPPER+NECK+GRIP',
    theme: '懸垂8回チャレンジ！🏆 月末テストに向けた最大強度',
    scienceNote: '肩甲骨の引き下ろしが重要（首・肩へのストレス軽減）。3秒ネガティブで高刺激',
    missions: [
      {
        id: 'm37-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm37-req2',
        type: 'required2',
        title: '必須2: 上半身 + 首 + グリップ強化セッション',
        description: '懸垂・デッドハング・腕立て・首強化・グリップトレーニング',
        duration: '50-60分',
        exp: 100,
        scienceBadge: 'science',
        exercises: [
          {
            name: '🏆 Pull-ups (懸垂)',
            detail: '8回×3チャレンジ',
            howto: [
              'セット1: 8回チャレンジ（新目標！3秒ネガティブで高刺激）',
              'セット2: 8回を目指す（出来なければ限界までのネガティブ移行）',
              'セット3: 完全回復（2-3分）後に8回チャレンジ',
              'ネガティブ: 3秒かけて降りる、肩甲骨引き下ろし意識',
              '月末テストなので全力を尽くす',
              '各セットの達成回数を記録。月末記録としてメモに記入',
            ],
            points: [
              '前回6-7回から月末8回突破 = MONTHLY TARGET！',
              '肩甲骨の引き下ろしが重要（首・肩へのストレス軽減）',
              '握幅は肩幅より少し広め（約50cm）',
              '揺れ・反動禁止 = strict form',
            ],
            ng: 'NG: 反動を使う、肩を立てる（肩への負荷増加）、急速に降りる',
            interval: '完全回復3-4分',
          },
          {
            name: 'Dead Hang (デッドハング)',
            detail: '60秒×3',
            howto: [
              'セット1: 60秒キープ（達成目標）',
              'セット2: 60秒キープ',
              'セット3: 60秒or限界まで',
              '握力が先に限界の場合はパワーグリップ使用OK',
              '肩甲骨は下げた状態を維持',
            ],
            points: [
              'グリップ強化の基本エクササイズ',
              '肩の安定性向上',
              'デッドハング中は呼吸を止めない',
            ],
            ng: 'NG: 肩をすくめる、揺れる',
            interval: '1-2分',
          },
          {
            name: 'Push-ups (腕立て伏せ)',
            detail: '28回×3',
            howto: [
              'セット1: 28回（月末基準達成！）',
              'セット2: 28回',
              'セット3: 28回またはルーズで30回以上',
              '手幅は肩幅より少し広め',
              'フルレンジ（胸がほぼ地面まで）',
              'コア締結 = 反り腰なし',
            ],
            points: [
              'フォーム重視月間（全回数strict form）',
              'コアを忘れずに力を入れる',
              '呼吸: 下ろしながら吸気、上げながら呼気',
            ],
            ng: 'NG: 肘が90度未満（肩への負荷増加）、反り腰、ヒップドロップ',
            interval: '1-2分',
          },
          {
            name: 'Isometric Neck (首アイソメトリック壁押し)',
            detail: '4方向×20秒×3',
            howto: [
              '前: 両手で額に抵抗、20秒全力',
              '後ろ: 両手で後頭部に抵抗、20秒全力',
              '左側: 左手で左頭部に抵抗、20秒全力',
              '右側: 右手で右頭部に抵抗、20秒全力',
              'セット×3（1セット = 4方向1周約80秒）',
              '首は動かさない、絶対的な静止力',
            ],
            points: [
              '月末目標20秒×3を維持',
              'F1ドライバーの首強化プロトコル',
              '等尺性収縮が最も効果的',
              'コーナリングGフォース対応',
            ],
            ng: 'NG: 首を動かす、力をセーブする',
            interval: '30秒',
          },
          {
            name: 'Towel Neck Resistance (タオル抵抗首トレ)',
            detail: '4方向×15回×3',
            howto: [
              'タオルを首に巻く',
              '前: 15回ゆっくり（1秒1回）',
              '後ろ: 15回',
              '左側: 15回',
              '右側: 15回',
              'セット×3（フル可動域）',
            ],
            points: [
              '動的な首筋トレ、アイソメトリックの補完',
              'タオル張力を一定に',
              '肩・背中が一緒に動かないよう注意',
            ],
            ng: 'NG: タオルを強く引きすぎて首が曲がる、反動的な動き',
            interval: '30秒',
          },
          {
            name: "Farmer's Carry (ファーマーズウォーク)",
            detail: '45秒×3',
            howto: [
              'ダンベルor kettlebell両手持ち',
              '45秒間歩行（直進またはその場）',
              'グリップ強化 & コア安定性',
              'セット×3',
            ],
            points: [
              'グリップ月末目標達成の仕上げ',
              'F1ドライバー標準: 45kg以上',
              'コアを締結したまま',
            ],
            ng: 'NG: 肩をすくめる、背中を丸める',
            interval: '1分',
          },
          {
            name: 'Knee Raises (ニーレイズ)',
            detail: '20回×3',
            howto: [
              'ハングポジションから膝を引き上げ',
              '腹筋の主力で、反動禁止',
              'セット×3',
            ],
            points: [
              'コア強化（プランク補完）',
              'グリップ練習を兼ねる',
            ],
            ng: 'NG: 反動、肩のすくみ',
            interval: '1分',
          },
          ...getCooldown(),
        ],
      },
      {
        id: 'm37-bonus',
        type: 'bonus',
        title: 'ボーナス: 懸垂限界チャレンジ',
        description: '3セット終了後、10分休息してから限界回数に挑戦',
        duration: '10分',
        exp: 50,
        scienceBadge: 'science',
        exercises: [
          {
            name: '🏆 Extra Pull-up Set (限界チャレンジ)',
            detail: '限界回数×1',
            howto: [
              '3セット終了後、10分休息',
              '追加1セット: 限界までの回数に挑戦',
              '月末記録（個人ベスト更新狙い）',
              'この回数を月末最高記録として記入',
            ],
            points: [
              '月末のピークパフォーマンス記録',
              'モチベーション向上',
            ],
            ng: 'NG: 疲労困憊状態での無理',
            interval: 'N/A',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 38 - Friday, Mar 27: HIIT + SAFE LOWER
  // ============================================
  {
    date: '2026-03-27',
    dayNumber: 38,
    dayName: 'HIIT+SAFE LOWER',
    theme: 'ランナーズニー対応 — 高衝撃ジャンプなしのHIIT',
    scienceNote: 'ランナーズニー回復: 高衝撃は禁止、エキセントリックで回復促進',
    missions: [
      {
        id: 'm38-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm38-req2',
        type: 'required2',
        title: '必須2: HIIT + 安全下半身セッション',
        description: 'バーピー（ジャンプなし）タバタ + ステップアップ + バンドウォーク + カーフレイズ + 縄跳び',
        duration: '45-50分',
        exp: 100,
        scienceBadge: 'science',
        exercises: [
          {
            name: 'Burpees (no jump) — Tabata',
            detail: '8ラウンド (20秒ON / 10秒OFF)',
            howto: [
              '立ち位置から両手を床に付く',
              '脚を後ろへステップアウト（ジャンプなし！）',
              'プランク位置で1秒キープ',
              '脚を戻す（ステップイン）',
              '立ち上がる',
              'ジャンプはしない（膝への負荷軽減）',
              '20秒間この動きを繰り返す',
              '10秒休息 × 8ラウンド',
            ],
            points: [
              'ランナーズニーに配慮 = ジャンプ・高衝撃なし',
              '全身の有酸素能力向上',
              'コア安定性の応用',
            ],
            ng: 'NG: ジャンプ、膝に加わる衝撃、腰を反らせる',
            interval: '10秒（自動休息）',
          },
          {
            name: 'Step-ups (ステップアップ)',
            detail: '左右15回×3',
            howto: [
              'ベンチ or 40-50cm高の段差を使用',
              '左脚を前にステップアップ',
              '右脚を続ける（左15回）',
              '左右入れ替えて右側15回',
              'セット×3',
              'ゆっくり制御された動き',
            ],
            points: [
              '膝への直接的な衝撃が少ない',
              'グルート & 大腿四頭筋を活性化',
              'バランス向上',
            ],
            ng: 'NG: 膝がつま先より内側に来る（膝蓋大腿部症候群リスク）',
            interval: '1分',
          },
          {
            name: 'Lateral Band Walk (ラテラルバンドウォーク)',
            detail: '左右20歩×3',
            howto: [
              'レジスタンスバンドを膝上に巻く',
              '軽く腰を落とした状態（スクワットの浅い位置）',
              '左に20歩（横移動）',
              '右に20歩（戻り）',
              'セット×3',
            ],
            points: [
              '股関節外転筋の活性化（グルート・側部）',
              'ランナーズニー予防',
              '膝の安定性向上',
            ],
            ng: 'NG: 膝が内側に入る、前かがみになる',
            interval: '1分',
          },
          {
            name: 'Single-Leg Calf Raises (カーフレイズ シングルレッグ)',
            detail: '15回×3 each',
            howto: [
              '左脚を軸に、右脚は浮かせる',
              'つま先で立ち上がる（最大高さまで）',
              '15回繰り返す',
              '左脚に切り替え、15回',
              'セット×3',
            ],
            points: [
              'ふくらはぎ・足首の安定性向上',
              'シングルレッグバランスの強化',
              'F1ドライバーの精密コントロール',
            ],
            ng: 'NG: 足首が内反する、バランス崩れ',
            interval: '1分',
          },
          {
            name: 'Rope Skipping (縄跳び)',
            detail: '2分30秒×3',
            howto: [
              'ダブルアンダー or シングルで安定したペース',
              '2分30秒間連続（ノーミスが目標）',
              '脚への衝撃は縄跳びの反動で分散',
              'セット×3',
            ],
            points: [
              'リズム感＆反応速度向上',
              'レーシングドライバーの必須スキル',
              'カーディオベース構築',
            ],
            ng: 'NG: 膝が曲がったまま（足首ジャンプで完結）、足踏み低い',
            interval: '1-2分',
          },
          ...getCooldown(),
        ],
      },
      {
        id: 'm38-bonus',
        type: 'bonus',
        title: 'ボーナス: フルタバタ回路 × 2周',
        description: 'バーピー・マウンテンクライマー・ハイニー・プランクジャック各20秒 × 8ラウンド × 2周',
        duration: '15分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'Full Tabata Circuit (フルタバタ回路)',
            detail: '×2周',
            howto: [
              'サーキット内容:',
              '  1. Burpees (no jump) × 20秒',
              '  2. Mountain Climbers × 20秒',
              '  3. High Knees × 20秒',
              '  4. Plank Jacks × 20秒',
              '各間に10秒休息',
              'このサーキット×2周（約12分）',
            ],
            points: [
              'ボーナス心拍獲得',
              '全身HIITの極致',
              'メンタルトレーニング',
            ],
            ng: 'NG: 質を下げてまで回数稼ぎ',
            interval: '10秒自動（サーキット内）',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 39 - Saturday, Mar 28: FULL BODY PUSH
  // MONTHLY TEST DAY 🏆
  // ============================================
  {
    date: '2026-03-28',
    dayNumber: 39,
    dayName: 'FULL BODY PUSH',
    theme: '🏆 月末テストデー — 3月の成果を全力で測る！',
    scienceNote: '月次テストで進捗を数値化。目標: 懸垂8回、デッドハング60秒、プランク6分、反応速度300ms以下',
    missions: [
      {
        id: 'm39-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm39-req2',
        type: 'required2',
        title: '必須2: 月末テストセッション — 全力測定',
        description: '懸垂・腕立て・ブルガリアン・デッドハング・首・コア・プランク最大テスト',
        duration: '90-100分',
        exp: 150,
        scienceBadge: 'science',
        exercises: [
          {
            name: '🏆 Pull-ups Max Test (懸垂 限界テスト)',
            detail: '限界回数×1 → 通常8回×2',
            howto: [
              'セット1: 完全に全力で限界までチャレンジ（月末記録！）',
              '記録を取る: 達成した回数',
              'セット2-3: 通常目標の8回×2を維持',
              '3秒ネガティブを意識',
              '限界テストセットの回数を月末最高記録として詳細メモ',
            ],
            points: [
              '月末パフォーマンステスト',
              '3月の最高記録を更新する好機',
              'メンタルピークのトレーニング',
            ],
            ng: 'NG: 2セット目以降も限界テスト（回復不足）',
            interval: '完全回復4-5分',
          },
          {
            name: '🏆 Push-ups Max Test (腕立て 限界テスト)',
            detail: '限界回数×1 → 通常28回×2',
            howto: [
              'セット1: 完全フォームで限界までチャレンジ',
              '記録: 達成した回数',
              'セット2-3: 通常の28回を維持',
              'フルレンジ & strict form',
              '限界セット回数を月末最高記録として記入',
            ],
            points: [
              '月末テスト（上半身プッシュ力）',
              'フォーム完璧さの記録',
            ],
            ng: 'NG: セット1で力を全てセーブ',
            interval: '2-3分',
          },
          {
            name: 'Bulgarian Split Squat (ブルガリアンスクワット)',
            detail: '15回×3 加重',
            howto: [
              'ベンチに右脚後ろを乗せ、左脚で前に立つ',
              'ダンベルまたはバーベル持参で加重',
              '左脚で15回しゃがみこみ',
              '左右入れ替え（右脚15回）',
              'セット×3',
              'ゆっくり下ろす（3秒）、爆発的に上げる',
            ],
            points: [
              'グルート＆大腿四頭筋の非対称トレ',
              'バランス＆安定性',
              'ランナーズニー対応（一脚最大負荷）',
            ],
            ng: 'NG: 膝がつま先より内側、反り腰',
            interval: '2分',
          },
          {
            name: '🏆 Dead Hang Max Test (デッドハング 限界テスト)',
            detail: '限界テスト×1 → 60秒×1',
            howto: [
              'セット1: 完全グリップでぶら下がり、限界まで継続',
              'タイマーで秒数を記録',
              'セット2: 通常の60秒キープ',
              '月末の最長記録を目指す',
              '限界テスト秒数を月末最高グリップ記録として記入',
            ],
            points: [
              '月末グリップ力のピークテスト',
              '肩の安定性の完成度測定',
            ],
            ng: 'NG: 握力が弱って脚を床に付く（カウント停止）',
            interval: '完全回復3-4分',
          },
          {
            name: 'Isometric Neck (首アイソメトリック壁押し)',
            detail: '4方向×20秒×3',
            howto: [
              '前後左右×20秒×3セット',
              '全力の等尺性収縮',
            ],
            points: [
              '月末目標20秒達成の確認',
              'F1ドライバー首強化',
            ],
            ng: 'NG: 首が動く、力をセーブ',
            interval: '30秒',
          },
          {
            name: 'Towel Neck Resistance (タオル抵抗首トレ)',
            detail: '4方向×15回×2',
            howto: [
              'タオル首巻き',
              '4方向×15回 (2セット)',
              '動的首筋強化',
            ],
            points: [
              '首の可動性＆強度確保',
            ],
            ng: 'NG: 過度な力による首への負荷',
            interval: '30秒',
          },
          {
            name: 'Racing Core: Pallof Press (レーシングコア：パロフプレス)',
            detail: '左右12回×3',
            howto: [
              'ケーブルマシンorレジスタンスバンド',
              '正面向きで、バンドを胸前で持つ',
              'コアを締結し、左右に押す（12回）',
              'セット×3',
              'ローテーション不可、真っすぐ押出す',
            ],
            points: [
              '回転力の抵抗＝コア安定性',
              'レーシングのコーナリング耐性',
            ],
            ng: 'NG: 上半身が回転する、軸がぶれる',
            interval: '1分',
          },
          {
            name: 'V-sit & Stair Drill (V-sit＆ステアドリル)',
            detail: '30回×2',
            howto: [
              'V-sit: 腹筋の最大短縮ポジション（膝を胸に引き上げ）',
              'ステアドリル: 膝を交互にステップアップ（階段状に）',
              '合計30回を2セット',
            ],
            points: [
              'コア最大短縮での筋力構築',
              'ハンドリング精密性向上',
            ],
            ng: 'NG: 反動、背中が落ちる',
            interval: '1分',
          },
          {
            name: '🏆 Plank Max Test (プランク 限界テスト)',
            detail: '限界テスト×1（6分+目標！）',
            howto: [
              'プランク正位置（肘と脚で支える）',
              'コアを全力締結',
              'タイマーで秒数を記録',
              '限界まで継続',
              '月末目標: 6分以上！',
              '達成秒数を月末最高プランク記録として記入（目標6分以上）',
            ],
            points: [
              '月末プランク最高記録テスト',
              'コア耐久力の完成度',
              '反り腰改善の指標',
            ],
            ng: 'NG: 腰が落ちる・上がる、呼吸を止める',
            interval: 'N/A',
          },
          ...getCooldown(),
        ],
      },
      {
        id: 'm39-bonus',
        type: 'bonus',
        title: 'ボーナス: HIIT フィニッシャー タバタ回路 × 2周',
        description: 'テスト後の余力があればバーピー・マウンテンクライマー・ハイニー・プランクジャック × 8R × 2周',
        duration: '15分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'HIIT Finisher Tabata Circuit',
            detail: '×2周',
            howto: [
              'テスト後の余力があれば実施',
              'バーピー（ジャンプなし）→ マウンテンクライマー → ハイニー → プランクジャック',
              '各20秒 / 10秒休息 × 8ラウンド×2周',
            ],
            points: [
              '月末完全制覇ボーナス',
              'メンタルトレーニング',
            ],
            ng: 'NG: テスト後に疲労困憊での実施',
            interval: '10秒自動',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 40 - Sunday, Mar 29: ACTIVE REST + MENTAL
  // ============================================
  {
    date: '2026-03-29',
    dayNumber: 40,
    dayName: 'ACTIVE REST+MENTAL',
    theme: 'リカバリー＆メンタルテスト — テストデー翌日の戦略的リカバリー',
    scienceNote: '有酸素ベース維持 + メンタルリセット。反応速度テストで神経系向上を測定',
    missions: [
      {
        id: 'm40-req1',
        type: 'required1',
        title: '必須1: 拡張モビリティ',
        description: '肩甲骨・股関節・足首を中心とした20-30分のストレッチング',
        duration: '20-30分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          ...getStandardMobility(),
          {
            name: 'Additional Mobility Focus',
            detail: '肩甲骨・股関節・足首',
            howto: [
              '肩甲骨: CAT-COWストレッチ×10回、ショルダーロール×20回',
              '股関節: 90/90ストレッチ×60秒each side',
              '足首: アンクルモビリティ×15回each direction',
            ],
            points: [
              '左肩リハビリの継続',
              '関節の完全な可動域回復',
            ],
            ng: 'NG: 痛みを超えるストレッチ',
            interval: 'N/A',
          },
        ],
      },
      {
        id: 'm40-req2',
        type: 'required2',
        title: '必須2: ウォーキング + 反応速度テスト + スポーツビジョン',
        description: 'ウォーキング30分 + humanbenchmark.com反応速度テスト + 視覚認識訓練',
        duration: '50分',
        exp: 100,
        scienceBadge: 'science',
        exercises: [
          {
            name: 'Walking (ウォーキング)',
            detail: '30分',
            howto: [
              '楽なペースで30分散歩',
              '屋外が理想（景色の変化がメンタルに有効）',
              '心拍: 無理のない範囲（会話できるペース）',
            ],
            points: [
              '有酸素ベースの維持',
              'メンタルリセット',
              '脚の回復促進',
            ],
            ng: 'NG: 無理して速歩、高心拍',
            interval: 'N/A',
          },
          {
            name: '🏆 Reaction Speed Test (反応速度テスト)',
            detail: '月末記録（humanbenchmark.com）',
            howto: [
              'パソコン or タブレットで humanbenchmark.com にアクセス',
              '"Reaction Time"テストを実施',
              '5回連続テストを実施（平均を記録）',
              '月末目標: 300ms以下',
              'テスト結果をメモに記録',
              '5回の平均反応時間を月末最高記録として記入',
            ],
            points: [
              'レーシングドライバーの最重要指標',
              '神経系の反応速度向上',
              '月末スポーツビジョンの成果測定',
            ],
            ng: 'NG: 1回だけで判断（複数回平均を取る）',
            interval: 'N/A',
          },
          {
            name: 'Sports Vision Activation (スポーツビジョン)',
            detail: '10-15分',
            howto: [
              '目玉焦点トレ: 近～遠を素早く切り替え×10回',
              '周辺視野: 中央固視で側面の動きを追う×30秒',
              'ビジュアライゼーション: 次週のコース走行をイメージ',
              '眼球運動: 上下左右の最大移動×10回each',
            ],
            points: [
              'F1ドライバーの視覚認識システム',
              '反応速度テストの補完',
              'メンタル準備',
            ],
            ng: 'NG: 目が疲れるまでの無理',
            interval: 'N/A',
          },
        ],
      },
      {
        id: 'm40-bonus',
        type: 'bonus',
        title: 'ボーナス: 拡張ビジュアライゼーション＆瞑想',
        description: '来週のトレーニングスケジュールを心に描く + 呼吸法',
        duration: '10分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'Extended Visualization & Meditation',
            detail: '+10分',
            howto: [
              '静かな環境で瞑想',
              '来週のトレーニングスケジュール・目標をイメージ',
              '呼吸法: 4秒吸入 - 4秒保持 - 6秒呼気 ×10回',
            ],
            points: [
              'メンタルレジリエンス構築',
              'ビジュアライゼーション週5回達成（月末目標）',
            ],
            ng: 'NG: 無理して瞑想時間を延長',
            interval: 'N/A',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 41 - Monday, Mar 30: REST
  // ============================================
  {
    date: '2026-03-30',
    dayNumber: 41,
    dayName: 'REST',
    theme: '完全リカバリー＋月末振り返り — 次月に向けた心理的準備',
    scienceNote: 'リカバリー強化。メンタルリセット + 来月戦略の立案',
    missions: [
      {
        id: 'm41-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm41-req2',
        type: 'required2',
        title: '必須2: ビジュアライゼーション + 月末振り返り',
        description: '来月に向けた戦略イメージング + 3月全体の成果と課題を整理',
        duration: '20分',
        exp: 100,
        scienceBadge: null,
        exercises: [
          {
            name: 'Visualization (ビジュアライゼーション)',
            detail: '10分',
            howto: [
              '快適な環境で瞑想',
              '来月のトレーニング戦略をイメージ',
              '達成した目標を思い返す',
              '改善点を心に留める',
            ],
            points: [
              'メンタルリセット',
              '次月への心理的準備',
            ],
            ng: 'NG: 外部干渉',
            interval: 'N/A',
          },
          {
            name: 'Monthly Reflection (来月に向けた振り返り)',
            detail: 'メモ記入',
            howto: [
              '3月全体を通じて',
              '達成できた項目: 懸垂、デッドハング、プランク、反応速度、首トレ',
              '改善が必要な項目: ___',
              '次月（4月）への誓い: ___',
              'メモに記入して保存',
            ],
            points: [
              'トレーニングの継続性強化',
              'モチベーション維持',
            ],
            ng: 'NG: 批判的になりすぎる（肯定的に）',
            interval: 'N/A',
          },
        ],
      },
      {
        id: 'm41-bonus',
        type: 'bonus',
        title: 'ボーナス: 深い呼吸法 + 筋膜リリース',
        description: '副交感神経優位化と筋肉緊張の解放',
        duration: '20分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'Deep Recovery Breathing',
            detail: '+10分',
            howto: [
              '4秒吸気 - 8秒呼気の深い腹式呼吸',
              'Box breathing: 4秒吸気 - 4秒保持 - 4秒呼気 - 4秒保持 ×5回',
              '副交感神経優位状態を作る',
            ],
            points: [
              '自律神経バランス調整',
              'ストレス軽減',
            ],
            ng: 'NG: 過呼吸（ゆっくり呼吸）',
            interval: 'N/A',
          },
          {
            name: 'Myofascial Release (筋膜リリース)',
            detail: '+10分',
            howto: [
              'フォームローラーで大腿部（表側・側面）',
              'ふくらはぎ',
              '背中（肩甲骨周り）',
              '各部位30秒×2回',
            ],
            points: [
              '筋肉の緊張をほぐす',
              '血流促進',
            ],
            ng: 'NG: 靭帯や骨の上でローリング（筋肉のみ）',
            interval: 'N/A',
          },
        ],
      },
    ],
  },

  // ============================================
  // DAY 42 - Tuesday, Mar 31: LOWER POWER + WRAP-UP
  // FINAL DAY OF WEEK 6 & MARCH
  // ============================================
  {
    date: '2026-03-31',
    dayNumber: 42,
    dayName: 'LOWER POWER',
    theme: '3月最終日 — 下半身仕上げ + グリップ最終テスト 🏁',
    scienceNote: '月末完全制覇。下半身 + グリップテストで3月の全目標達成を検証',
    missions: [
      {
        id: 'm42-req1',
        type: 'required1',
        title: '必須1: ウォームアップ + モビリティ + 左肩リハビリ',
        description: '関節ほぐし → 体幹モビリティ5種 → 左肩リハビリ3種',
        duration: '18-20分',
        exp: 50,
        scienceBadge: null,
        exercises: getStandardMobility(),
      },
      {
        id: 'm42-req2',
        type: 'required2',
        title: '必須2: 下半身最終セッション + グリップテスト',
        description: 'ブルガリアン・シングルレッグブリッジ・ステップアップ・カーフレイズ・デッドハング最長テスト・パロフ・プランク',
        duration: '60-70分',
        exp: 150,
        scienceBadge: 'science',
        exercises: [
          {
            name: 'Bulgarian Split Squat (ブルガリアンスクワット)',
            detail: '15回×3 加重',
            howto: [
              'ベンチに脚を乗せ、ダンベル or バーベル加重',
              '左脚15回、右脚15回',
              'セット×3',
              '3秒かけてしゃがむ、爆発的に立ち上がる',
            ],
            points: [
              '下半身の集大成',
              'ランナーズニー対応（一脚最大負荷）',
            ],
            ng: 'NG: 膝が内側、反り腰',
            interval: '2分',
          },
          {
            name: 'Single-Leg Glute Bridge (シングルレッグ・グルートブリッジ)',
            detail: '15回×3 (3秒キープ)',
            howto: [
              '仰向けで左脚を立て、右脚は浮かす',
              '左足で床を押し、ヒップを上げる',
              '最上部で3秒キープ',
              '15回繰り返す',
              'セット×3',
            ],
            points: [
              'グルート最大活性化',
              '反り腰改善（大臀筋強化）',
              'シングルレッグバランス',
            ],
            ng: 'NG: 腰が反る、ヒップが下がる',
            interval: '1-2分',
          },
          {
            name: 'Step-ups (ステップアップ)',
            detail: '15回×3',
            howto: [
              'ベンチorステップ（40-50cm）',
              '左脚で15回、右脚で15回',
              'ゆっくりコントロール',
              'セット×3',
            ],
            points: [
              '膝への低衝撃での下半身強化',
              'レッグパワー総仕上げ',
            ],
            ng: 'NG: 膝がつま先より内側',
            interval: '1分',
          },
          {
            name: 'Calf Raises (カーフレイズ)',
            detail: '30回×3 (3秒キープ)',
            howto: [
              'ダンベル両手or片手持ち',
              'つま先で立ち上がり、最上部で3秒キープ',
              '30回連続',
              'セット×3',
            ],
            points: [
              'ふくらはぎの完全強化',
              '足首の安定性',
              'ペダル操作精度向上',
            ],
            ng: 'NG: ネガティブで急速に落とす（つま先への衝撃）',
            interval: '1分',
          },
          {
            name: '🏆 Dead Hang Final Test (デッドハング最長記録テスト)',
            detail: '限界テスト×2（月末最終記録！）',
            howto: [
              'セット1: 完全グリップで限界までぶら下がり',
              'タイマーで秒数記録',
              'セット2: 回復後、再度限界テスト',
              '月末の最高グリップ記録を目指す',
              '2回のテスト結果の最長秒数を月末最終グリップ記録として記入',
            ],
            points: [
              '3月最終日のグリップピーク測定',
              'F1ドライバー基準40kgを超えるか確認',
            ],
            ng: 'NG: パワーグリップを使う（素手テスト）',
            interval: '完全回復4-5分',
          },
          {
            name: 'Pallof Press (パロフプレス)',
            detail: '左右12回×3',
            howto: [
              'ケーブルorバンド',
              '胸前で持ち、コア締結して左右に押出す',
              'ローテーション抵抗のコアトレ',
              'セット×3',
            ],
            points: [
              'レーシングコア最終確認',
              'ローテーション力の確保',
            ],
            ng: 'NG: 上半身が回転、軸ぶれ',
            interval: '1分',
          },
          {
            name: 'Plank (プランク)',
            detail: '5分×1',
            howto: [
              'プランク正位置（肘と脚で支える）',
              'コア全力締結',
              '5分間キープ',
              '月末の標準ホールド（目安：6分達成者は+1分）',
            ],
            points: [
              '月末プランク標準値確認',
              '反り腰改善指標',
              '月末完全仕上げ',
            ],
            ng: 'NG: 腰が落ちる、呼吸を止める',
            interval: 'N/A',
          },
          ...getCooldown(),
        ],
      },
      {
        id: 'm42-bonus',
        type: 'bonus',
        title: 'ボーナス: タバタマウンテンクライマー × 8ラウンド',
        description: '3月完全制覇フィニッシャー！20秒全力 × 8ラウンド + 10秒休息',
        duration: '12分',
        exp: 50,
        scienceBadge: null,
        exercises: [
          {
            name: 'Full Tabata Final Burst (タバタ式マウンテンクライマー)',
            detail: '8ラウンド + 3月完全制覇！🏁',
            howto: [
              'マウンテンクライマー: 膝を胸に引き上げながら走る（20秒全力）',
              '10秒休息',
              'これを8ラウンド（合計4分）',
              '3月最終日の全力を尽くして終了',
            ],
            points: [
              'Week 6最後のメンタルファイナル',
              '3月完全制覇のボーナス心拍獲得',
              'April Week 7への弾み',
            ],
            ng: 'NG: 質を下げての継続',
            interval: '10秒自動',
          },
        ],
      },
    ],
  },
];
