import { characters, rackets, courts, beginnerVideos, changelog, tierPurposeRecommendations, officialTierSections, tips } from "../data.js";

const translations = {
  ja: {
    site: { pageTitle: "マリオテニスフィーバー Explorer", pageDescription: "マリオテニスフィーバーのキャラクターやラケット、システム関連データを一覧で確認できる参照サイト。", title: "マリオテニスフィーバー Explorer", language: "Language", lead: "キャラクターやラケットの特徴などを確認できるデータまとめサイトです。フィルタ・ソートで目的の情報を整理しながら参照できます。" },
    nav: { faq: "FAQ", characters: "キャラ", rackets: "ラケット", courts: "コート", tier: "Tier" },
    section: { faq: { title: "FAQ", description: "最短で知りたいことに辿り着けるよう、FAQを先頭にまとめています。" }, characters: { title: "キャラクター一覧", description: "タイプ別の特徴やパラメータを比較できます。" }, rackets: { title: "ラケット一覧", description: "効果やタイミングを比較できます。" }, courts: { title: "コート一覧", description: "コートごとのたまあしとバウンドの特性を比較できます。" }, tips: { description: "試合で役立つ操作のポイントを素早く確認できます。" }, tier: { title: "Tier表", description: "キャラとラケットを自分基準でランク付けできます。" } },
    filter: { searchAndFilter: "検索・絞り込み", search: "検索", type: "タイプ", special: "特殊能力", favoritesOnly: "お気に入りのみ", sortBy: "ソート項目", order: "並び順", category: "種類", timing: "効果タイミング", tipsCategory: "カテゴリ", verification: "検証" },
    modal: { characterFilter: "キャラクターの検索・絞り込み", racketFilter: "ラケットの検索・絞り込み", courtFilter: "コートの検索・絞り込み" },
    placeholder: { characterSearch: "キャラクター名で検索", racketSearch: "ラケット名で検索", courtSearch: "コート名で検索" },
    footer: { note: "データは仮入力を含みます。後日更新予定です。", contactLabel: "作成者・問い合わせ先:", contactAccount: "@Lu_Na_Clock", changelog: "更新履歴" },
    stat: { speed: "スピード", power: "パワー", control: "コントロール", spin: "スピン" },
    court: { ballSpeed: "たまあし", bounce: "バウンド", note: "説明" },
    courtPrediction: { title: "次コート予測（β）", description: "ランクマッチの観測順をもとに、現在のコートから次に来る可能性が高い候補を表示します。", currentCourt: "現在のコート", candidate: "候補{{rank}}", confidence: "確度", deterministic: "確定候補", note: "※ベータ版: データが増えるほど精度が向上します。" },
    sort: { name: "名前", ballSpeed: "たまあし", bounce: "バウンド" },
    order: { game: "ゲーム内順", asc: "昇順", desc: "降順", high: "数値が高い順", low: "数値が低い順" },
    common: { any: "指定なし", yes: "あり", no: "なし", wip: "仮実装", count: "{{count}}件表示", showCount: "{{count}}件を表示", searchHit: "検索ヒット: {{count}}件", noCharacter: "一致するキャラクターが見つかりません。", noRacket: "一致するラケットが見つかりません。", noTip: "一致するTipsが見つかりません。", language: "言語" },
    accordion: { special: "特殊能力", gameText: "ゲーム内テキスト", details: "全項目を見る", unlockCondition: "ラケットの開放条件", video: "動画で効果を確認する" },
    video: { unavailable: "動画は準備中です。", checking: "動画の有無を確認中です…", openYoutube: "YouTubeで開く" },
    chip: { type: "タイプ", search: "検索", special: "特殊能力", favorites: "お気に入り", sort: "ソート", order: "並び順", category: "種類", timing: "効果タイミング", yes: "あり", no: "なし" },
    aria: { sectionNav: "セクションナビゲーション", mobileNav: "モバイルセクションナビ", close: "閉じる", showChangelog: "更新履歴を表示", collapseNav: "セクションナビをたたむ", expandNav: "セクションナビを表示", contactX: "Xアカウント @Lu_Na_Clock", officialTierTabs: "固定Tier項目" },
    type: { "オールラウンド": "オールラウンド", "テクニック": "テクニック", "パワー": "パワー", "ディフェンス": "ディフェンス", "トリッキー": "トリッキー", "スピード": "スピード" },
    category: { "妨害": "妨害", "強化": "強化", "その他": "その他", "不明": "不明" },
    timing: { "即時": "即時", "バウンド時": "バウンド時", "不明": "不明" },
    tipsCategory: { "仕様": "仕様", "実践知識": "実践知識" },
    verification: { "検証中": "検証中", "検証済": "検証済" },
    tierValue: { hard: "ハード", clay: "クレー", grass: "グラス", singles: "シングルス", doubles: "ダブルス", fever: "フィーバー" },
    meta: { iconSuffix: "のアイコン" },
    changelog: { title: "更新履歴" },

    faq: {
      categories: { beginner: "初心者向け", tier: "Tier基準", losing: "勝てない際の考え方" },
      beginnerCharacter: {
        question: "初心者にオススメのキャラは？",
        answer1: "デイジー・マリオ・ボスパックンのいずれかがオススメです。",
        answer2: "強いキャラを使いたいなら、ドンキーやロゼッタも候補に挙がります。",
        link: "詳しくはTierのおすすめキャラ欄を確認してください。 →"
      },
      learnPriority: {
        question: "何を優先して覚えるとランクマで通用する？",
        answer1: "まずは得点パターンを覚えましょう。",
        point1: "角度のついた返球や、その裏を読んで正面に打つ。",
        point2: "相手がいなくて取れなさそうな方向にフィーバーショットを打つ。",
        answer2: "ゲーム内メインメニューの「遊び方」でも得点パターンに触れられているので、まずはそちらの確認がおすすめです。"
      },
      shotBasics: {
        question: "そもそもどんなショットを打てば良いかも分からない",
        answer1: "ゲーム内の遊び方やストーリーモードで確認しましょう。",
        point1: "ゲーム内の遊び方を一回で覚えなくて良いのでサラッと見る",
        point2: "ストーリーモードが専門用語の解説もまじえたチュートリアル的な設計なので、順番に学んでいける構造",
        answer2: "ストーリーをやらずに遊び方を熟読して実戦で覚えたい人もいる為、お好みの方法で学んでいくのが良いです。"
      },
      weakShot: {
        question: "弱打ってどんなショット?",
        answer1: "各球種のボタンを1回だけ押したショットです。",
        point1: "弱打は角度をつけたショットを打ちやすく、前作で慣れてるプレイヤーはよく使う用語の1つです。",
        point2: "なお、ボタンを2回以上押すと強打になります。弱打より角度をつけづらい代わりに、球速が速い弾になります。",
        answer2: "角度をつけたショットを打つなら弱打、速い球速で打ちたいなら強打と覚えると良いです。"
      },
      tierDiff: {
        question: "各ランク帯の違いは？",
        answer1: "S は抜けて強い評価です。",
        answer2: "A はSほどではないものの、上位環境でも強く通用するキャラです。"
      },
      tierTrust: {
        question: "Tier表はそのまま信じて良い？",
        answer1: "複数の上位勢(S+ランク)の意見も取り入れましたが、あくまで目安です。コートやルールによって評価は変化します。"
      },
      losing: {
        question: "負けてしまう",
        answer1: "まずは得点パターンを見直しましょう。何のショットで得点しようとしていたかを振り返ることが重要です。",
        answer2: "その状況では有効ではなかったり、他に強い選択肢がある可能性があります。手軽な見直し方法は、失点時の動画を本体機能で撮ることです。",
        answer3: "次に失点パターンを見直します。得点パターンを掴めたら、防御面も考えましょう。",
        point1: "角度ショット後にさらに角度をつけられて失点するなら、一旦角度を抑えて返す。",
        point2: "ロブやドロップで失点するなら、立ち位置を少し後ろ/前に調整する。",
        answer4: "「なぜ自分がそう動いたか」を整理できると、短期的に負け込んでも後から勝率が上がりやすくなります。"
      },
      reasonUnknown: {
        question: "負ける理由がよく分からない",
        answer1: "失点時の3手前くらいまで動画で見直すと、原因が見つかることがあります。",
        point1: "相手に有利な行動を取っている。",
        point2: "フィーバーショットを打つ/打たれる展開を考慮できていない。",
        answer2: "など複数の要因があるはずです。",
        answer3: "どうしても分からなければ、Xで質問してもらえれば答えられる範囲で対応できます。動画があるとより具体的に回答しやすいです。",
        link: "Xのリンクはページ最下部にあります。 ↓"
      },
      backToFaq: "← FAQへ戻る"
    },
    favorite: { addCharacter: "お気に入りに追加", removeCharacter: "お気に入り解除", addRacket: "お気に入りに追加", removeRacket: "お気に入り解除", addCourt: "お気に入りに追加", removeCourt: "お気に入り解除" },
    tier: { characterBoard: "キャラTier", racketBoard: "ラケットTier", poolTitle: "未配置アイコン", modalTitle: "Tier行を編集", labelName: "ラベル名", labelColor: "背景色", clearRow: "行の中身をクリア", addAbove: "上に行追加", addBelow: "下に行追加", deleteRow: "行を削除", addItem: "行を追加", unassigned: "未配置", ruleTitle: "ルール条件", addGlobal: "全ルール共通Tierを追加", addConditional: "条件別Tierを追加", deleteProfile: "現在のTierを削除", courtType: "コート種別", gameMode: "ゲームモード", itemRule: "フィーバーラケット", matchupBase: "選択キャラ", matchupBaseNone: "指定なし", matchupBaseIconAlt: "選択キャラのアイコン", matchupSummary: "相性Tier:", matchupPerspectiveSuffix: "視点", globalLabel: "全ルール共通Tier", conditionalLabel: "条件別Tier", allConditions: "全条件", noProfiles: "該当するTierはありません", globalTab: "全ルール共通", conditionalTab: "条件別", profileDeleted: "Tierを削除しました", shareX: "Xへ画像投稿", saveImage: "画像で保存", shareXClipboard: "画像をコピーしました。X投稿画面で貼り付けてください", shareXClipboardAlert: "Tier画像をクリップボードにコピーしました。\nX投稿画面が開いたら、本文入力欄で貼り付け（Ctrl+V / 長押し→貼り付け）してください。", shareXFallback: "画像保存後にX投稿画面を開きました", shareXFallbackAlert: "クリップボードへのコピーに失敗したため、Tier画像を端末に保存しました。\nX投稿画面で画像を選択して添付してください。", shareXFailed: "X投稿画面を開けませんでした", imageSaved: "画像を保存しました", imageSaveFailed: "画像の保存に失敗しました", freeNote: "メモ", freeNotePlaceholder: "環境に多いキャラ", purposeTitle: "目的別おすすめ", purposeBeginner: "初心者向け（扱いやすさ重視）", purposeWinrate: "勝率重視（現環境で安定）", purposeGrowth: "伸びしろ重視（使い込むと強い）", purposeCharacterPicks: "キャラおすすめ", purposeRacketPicks: "ラケットおすすめ", officialTitle: "固定Tier表", officialCurrentMetaStrongCharacters: "現環境で強いキャラ", officialCurrentMetaStrongRackets: "現環境で強いラケット", officialGroupFeverSingles: "フィーバーあり/シングルス", officialGroupNoFeverSingles: "フィーバーなし/シングルス", officialPlaceholderComingSoon: "このカテゴリは準備中です。", officialGroupTabsAria: "固定Tierの大カテゴリ", officialSectionTabsAria: "固定Tierのカテゴリ" },
  },
  en: {
    site: { pageTitle: "Mario Tennis Fever Explorer", pageDescription: "Reference site for Mario Tennis Fever character, racket, and system data.", title: "Mario Tennis Fever Explorer", language: "Language", lead: "A reference site to compare character and racket traits with filters and sorting." },
    nav: { faq: "FAQs", characters: "Characters", rackets: "Rackets", courts: "Courts", tier: "Tier" },
    section: { faq: { title: "FAQs", description: "Common questions are placed first so you can reach the right section quickly." }, characters: { title: "Character List", description: "Compare traits and parameters by type." }, rackets: { title: "Racket List", description: "Compare effects and trigger timing." }, courts: { title: "Court List", description: "Compare each court's ball speed and bounce characteristics." }, tips: { description: "Quickly review useful operation tips for matches." }, tier: { title: "Tier Board", description: "Rank characters and rackets by your own criteria." } },
    filter: { searchAndFilter: "Search / Filter", search: "Search", type: "Type", special: "Special", favoritesOnly: "Favorites only", sortBy: "Sort by", order: "Order", category: "Category", timing: "Effect timing", tipsCategory: "Category", verification: "Verification" },
    modal: { characterFilter: "Character Search / Filter", racketFilter: "Racket Search / Filter", courtFilter: "Court Search / Filter" },
    placeholder: { characterSearch: "Search by character name", racketSearch: "Search by racket name", courtSearch: "Search by court name" },
    footer: { note: "Some data is provisional and will be updated later.", contactLabel: "Creator & Contact:", contactAccount: "@Lu_Na_Clock", changelog: "Changelog" },
    stat: { speed: "Speed", power: "Power", control: "Control", spin: "Spin" },
    court: { ballSpeed: "Ball Speed", bounce: "Bounce", note: "Notes" },
    courtPrediction: { title: "Next Court Prediction (Beta)", description: "Shows likely next courts from the current court based on observed ranked-match rotations.", currentCourt: "Current court", candidate: "Candidate {{rank}}", confidence: "Confidence", deterministic: "Fixed candidate", note: "*Beta: prediction accuracy improves as more data is added." },
    sort: { name: "Name", ballSpeed: "Ball Speed", bounce: "Bounce" },
    order: { game: "Game order", asc: "A → Z", desc: "Z → A", high: "High → Low", low: "Low → High" },
    common: { any: "Any", yes: "Yes", no: "None", wip: "Work in progress", count: "{{count}} shown", showCount: "Show {{count}}", searchHit: "Search hits: {{count}}", noCharacter: "No matching characters found.", noRacket: "No matching rackets found.", noTip: "No matching tips found.", language: "Language" },
    accordion: { special: "Special", gameText: "In-game text", details: "Show all", unlockCondition: "Unlock condition", video: "Watch effect video" },
    video: { unavailable: "Video is coming soon.", checking: "Checking video availability…", openYoutube: "Open on YouTube" },
    chip: { type: "Type", search: "Search", special: "Special", favorites: "Favorites", sort: "Sort", order: "Order", category: "Category", timing: "Effect timing", yes: "Yes", no: "No" },
    aria: { sectionNav: "Section navigation", mobileNav: "Mobile section navigation", close: "Close", showChangelog: "Show changelog", collapseNav: "Collapse section nav", expandNav: "Expand section nav", contactX: "X account @Lu_Na_Clock", officialTierTabs: "Fixed tier categories" },
    type: { "オールラウンド": "All-Around", "テクニック": "Technical	", "パワー": "Powerful", "ディフェンス": "Defensive", "トリッキー": "Tricky", "スピード": "Speedy" },
    category: { "妨害": "Disruptive", "強化": "Boost", "その他": "Other", "不明": "Unknown" },
    timing: { "即時": "Instant", "バウンド時": "On Bounce", "不明": "Unknown" },
    tipsCategory: { "仕様": "Spec", "実践知識": "Practical" },
    verification: { "検証中": "Verifying", "検証済": "Verified" },
    tierValue: { hard: "Hard", clay: "Clay", grass: "Grass", singles: "Singles", doubles: "Doubles", fever: "Fever" },
    meta: { iconSuffix: " icon" },
    changelog: { title: "Changelog" },
    faq: {
      categories: { beginner: "For beginners", tier: "Tier criteria", losing: "How to think when you keep losing" },
      beginnerCharacter: {
        question: "Which character is recommended for beginners?",
        answer1: "Daisy, Mario, or Petey Piranha are good starter picks.",
        answer2: "If you want stronger meta options, Donkey Kong and Rosalina are also candidates.",
        link: "See the recommended characters in the Tier section. →"
      },
      learnPriority: {
        question: "What should I learn first to compete in ranked matches?",
        answer1: "Start by learning reliable scoring patterns.",
        point1: "Use angled returns, and occasionally hit straight to punish reads.",
        point2: "Use Fever Shots toward spaces the opponent cannot reasonably cover.",
        answer2: "The in-game \"How to Play\" also introduces scoring patterns, so checking that first is recommended."
      },
      shotBasics: {
        question: "I don’t even know which shots I should use yet.",
        answer1: "Use the in-game How to Play and Story Mode as your starting point.",
        point1: "Skim through How to Play first—you don't need to memorize everything in one go.",
        point2: "Story Mode works like a tutorial and explains core terms step by step.",
        answer2: "Some players prefer to skip Story Mode and learn by reading then practicing in matches. Choose the method that fits you best."
      },
      weakShot: {
        question: "What is a weak shot?",
        answer1: "It is a shot where you press the shot-type button only once.",
        point1: "Weak shots are easier to angle, and it is a common term among players familiar with previous titles.",
        point2: "If you press the button two or more times, it becomes a strong shot. It is harder to angle than a weak shot, but the ball speed is faster.",
        answer2: "Remember it as: use weak shots for angle, and strong shots for speed. Since this terminology is mainly used in Japanese-speaking communities, names may differ overseas."
      },
      tierDiff: {
        question: "What is the difference between each tier rank?",
        answer1: "A means exceptionally strong.",
        answer2: "B is slightly below A, but still highly viable even at top level."
      },
      tierTrust: {
        question: "Should I trust the Tier list as-is?",
        answer1: "It includes opinions from multiple top players (S+ level), but it is still a guideline. Ratings can change depending on court and rules."
      },
      losing: {
        question: "I keep losing.",
        answer1: "First, review your scoring patterns. It is important to look back at what shot pattern you were trying to score with.",
        answer2: "That option might not have been effective in that situation, and there may have been a stronger alternative. A quick review method is to record points you lost and watch them back.",
        answer3: "Next, review your losing patterns. Once you understand how you score, think about defense as well.",
        point1: "If you lose after giving too much angle repeatedly, return safer and reduce angle once.",
        point2: "If you often lose to lobs or drops, adjust your position slightly backward/forward.",
        answer4: "If you can organize why you moved the way you did, your win rate tends to recover even after short losing streaks."
      },
      reasonUnknown: {
        question: "I can’t figure out why I’m losing.",
        answer1: "Watching back the 2–3 shots before each lost point often reveals the cause.",
        point1: "You are choosing actions that favor your opponent.",
        point2: "You are not accounting for Fever Shot offense/defense scenarios.",
        answer2: "In many cases, multiple factors are involved.",
        answer3: "If you still can’t tell, feel free to ask on X and I’ll answer what I can. Video clips help provide much more specific feedback.",
        link: "The X link is at the bottom of this page. ↓"
      },
      backToFaq: "← Back to FAQs",
      toBeginnerQuestion: "See beginner-friendly question"
    },
    favorite: { addCharacter: "Add to favorites", removeCharacter: "Remove from favorites", addRacket: "Add to favorites", removeRacket: "Remove from favorites", addCourt: "Add to favorites", removeCourt: "Remove from favorites" },
    tier: { characterBoard: "Character Tier", racketBoard: "Racket Tier", poolTitle: "Unassigned Icons", modalTitle: "Edit Tier Row", labelName: "Label", labelColor: "Background color", clearRow: "Clear row", addAbove: "Add row above", addBelow: "Add row below", deleteRow: "Delete row", addItem: "Add row", unassigned: "Unassigned", ruleTitle: "Rule filters", addGlobal: "Add Global Tier", addConditional: "Add Conditional Tier", deleteProfile: "Delete Current Tier", courtType: "Court Type", gameMode: "Game Mode", itemRule: "Fever Racket", matchupBase: "Selected Character", matchupBaseNone: "None", matchupBaseIconAlt: "Selected character icon", matchupSummary: "Matchup Tier:", matchupPerspectiveSuffix: " perspective", globalLabel: "Global Tier", conditionalLabel: "Conditional Tier", allConditions: "All Conditions", noProfiles: "No tier boards match this filter", globalTab: "Global", conditionalTab: "Conditional", profileDeleted: "Tier deleted", shareX: "Post Image to X", saveImage: "Save as Image", shareXClipboard: "Image copied. Paste it in the X composer.", shareXClipboardAlert: "Tier image copied to your clipboard.\nWhen the X composer opens, paste it into the post field.", shareXFallback: "Saved image and opened X post dialog", shareXFallbackAlert: "Clipboard copy failed, so the Tier image was downloaded.\nPlease attach the saved image in the X composer.", shareXFailed: "Failed to open X post dialog", imageSaved: "Image saved", imageSaveFailed: "Failed to save image", freeNote: "Free note", freeNotePlaceholder: "Popular characters in the current meta", purposeTitle: "Recommendations by Purpose", purposeBeginner: "For Beginners (ease of use)", purposeWinrate: "Win Rate Focus (stable in current meta)", purposeGrowth: "Growth Potential (strong with mastery)", purposeCharacterPicks: "Recommended Characters", purposeRacketPicks: "Recommended Rackets", officialTitle: "Fixed Tier Board", officialCurrentMetaStrongCharacters: "Strong Characters in the Current Meta", officialCurrentMetaStrongRackets: "Strong Rackets in the Current Meta", officialGroupFeverSingles: "Fever On / Singles", officialGroupNoFeverSingles: "Fever Off / Singles", officialPlaceholderComingSoon: "This category is in progress.", officialGroupTabsAria: "Fixed tier main categories", officialSectionTabsAria: "Fixed tier categories" },
  },
};

translations.ja.section.beginnerVideos = {
  title: "お役立ち動画",
  description: "最初に見ておくと理解しやすい動画を、基礎・フィーバー・応用の順でまとめています。",
};
translations.en.section.beginnerVideos = {
  title: "Helpful Videos",
  description: "Starter-friendly video picks grouped into fundamentals, Fever Shots, and follow-up practice.",
};

translations.ja.beginnerVideos = {
  categories: {
    basics: "基礎的な動き",
    "fever-shot": "フィーバーショット",
    advanced: "応用編",
  },
  more: "もっと見る",
  less: "閉じる",
  play: "再生する",
  close: "閉じる",
  japaneseNotice: "※ 英語ページでも、掲載している動画自体は日本語です。",
  japaneseBadge: "日本語動画",
};
translations.en.beginnerVideos = {
  categories: {
    basics: "Fundamentals",
    "fever-shot": "Fever Shots",
    advanced: "Advanced",
  },
  more: "Show more",
  less: "Show less",
  play: "Play",
  close: "Close",
  japaneseNotice: "These videos are in Japanese.",
  japaneseBadge: "Japanese video",
};

translations.ja.faq.videoGuideLink = "お役立ち動画もあわせて見る ->";
translations.en.faq.videoGuideLink = "See helpful videos ->";
translations.ja.beginnerVideos.play = "YouTubeで見る";
translations.en.beginnerVideos.play = "Open on YouTube";

const DEFAULT_RACKET_UNLOCK_CONDITION = {
  ja: "初期状態で開放済み",
  en: "Unlocked from the start.",
};

const RACKET_UNLOCK_CONDITIONS = new Map([
  ["マメキノコラケット", { ja: "ストーリーでキッズクラスクリア", en: "Clear Story Mode Kids Class." }],
  ["ファイアフラワーラケット", { ja: "ストーリーでEランククリア", en: "Clear Story Mode Rank E." }],
  ["アイスフラワーラケット", { ja: "ストーリーでDランククリア", en: "Clear Story Mode Rank D." }],
  ["スターラケット", { ja: "ストーリーでCランククリア", en: "Clear Story Mode Rank C." }],
  ["たつまきラケット", { ja: "ストーリーでBランククリア", en: "Clear Story Mode Rank B." }],
  ["サンボラケット", { ja: "ストーリーでAランククリア", en: "Clear Story Mode Rank A." }],
  ["シャドウラケット", { ja: "テニスの試合を2回プレイする", en: "Play 2 tennis matches." }],
  ["ファイアバーラケット", { ja: "テニスの試合を4回プレイする", en: "Play 4 tennis matches." }],
  ["フリーズラケット", { ja: "テニスの試合を6回プレイする", en: "Play 6 tennis matches." }],
  ["ビリキューラケット", { ja: "テニスの試合を8回プレイする", en: "Play 8 tennis matches." }],
  ["カーブラケット", { ja: "テニスの試合を12回プレイする", en: "Play 12 tennis matches." }],
  ["インクラケット", { ja: "テニスの試合を14回プレイする", en: "Play 14 tennis matches." }],
  ["バナナラケット", { ja: "テニスの試合を16回プレイする", en: "Play 16 tennis matches." }],
  ["かざんラケット", { ja: "テニスの試合を18回プレイする", en: "Play 18 tennis matches." }],
  ["おばけラケット", { ja: "テニスの試合を22回プレイする", en: "Play 22 tennis matches." }],
  ["ダッシュラケット", { ja: "テニスの試合を24回プレイする", en: "Play 24 tennis matches." }],
  ["ブルラケット", { ja: "テニスの試合を26回プレイする", en: "Play 26 tennis matches." }],
  ["トゲゾーラケット", { ja: "テニスの試合を28回プレイする", en: "Play 28 tennis matches." }],
  ["マジックラケット", { ja: "テニスの試合を32回プレイする", en: "Play 32 tennis matches." }],
  ["キラーラケット", { ja: "テニスの試合を34回プレイする", en: "Play 34 tennis matches." }],
  ["ドッスンラケット", { ja: "テニスの試合を36回プレイする", en: "Play 36 tennis matches." }],
  ["オシダシーラケット", { ja: "テニスの試合を38回プレイする", en: "Play 38 tennis matches." }],
  ["メタルラケット", { ja: "テニスの試合を42回プレイする", en: "Play 42 tennis matches." }],
  ["ハテナケット", { ja: "このラケット以外のすべてのラケットを入手する", en: "Obtain every racket except this one." }],
]);

const localeSelect = document.getElementById("locale-select");
const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
  ? navigator.languages
  : [navigator.language || "ja"];
const browserLocale = browserLanguages.some((lang) => String(lang).toLowerCase().startsWith("ja"))
  ? "ja"
  : "en";
const routeLocale = window.location.pathname.startsWith("/en") ? "en" : "ja";
let currentLocale = routeLocale || localStorage.getItem("locale") || browserLocale;
if (!translations[currentLocale]) {
  currentLocale = "ja";
}

function getLocalizedPath(pathname, nextLocale) {
  const normalizeTrailingSlash = (path) => {
    if (!path || path === "/") return "/";

    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "";
    const isFilePath = lastSegment.includes(".");
    if (isFilePath) return path;

    return path.endsWith("/") ? path : `${path}/`;
  };

  const splitPathQueryHash = (value) => {
    const source = value || "/";
    const match = source.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
    return {
      path: match?.[1] || "/",
      query: match?.[2] || "",
      hash: match?.[3] || "",
    };
  };

  const joinPathQueryHash = (path, query, hash) => `${path}${query}${hash}`;
  const { path, query, hash } = splitPathQueryHash(pathname);
  const normalizedPath = path || "/";
  const isEnglishPath = normalizedPath === "/en" || normalizedPath.startsWith("/en/");

  if (nextLocale === "en") {
    const nextPath = isEnglishPath
      ? normalizedPath
      : (normalizedPath === "/" ? "/en/" : `/en${normalizedPath}`);
    return joinPathQueryHash(normalizeTrailingSlash(nextPath), query, hash);
  }

  const jaPath = !isEnglishPath
    ? normalizedPath
    : (normalizedPath.replace(/^\/en/, "") || "/");
  return joinPathQueryHash(normalizeTrailingSlash(jaPath), query, hash);
}

function t(key, vars = {}) {
  const keys = key.split(".");
  let value = keys.reduce((acc, part) => (acc ? acc[part] : undefined), translations[currentLocale]);
  if (value == null) {
    value = keys.reduce((acc, part) => (acc ? acc[part] : undefined), translations.ja) ?? key;
  }
  if (typeof value !== "string") {
    return String(value);
  }
  return value.replace(/\{\{(\w+)\}\}/g, (_, name) => String(vars[name] ?? ""));
}

function localizeValue(value) {
  if (value && typeof value === "object") {
    return value[currentLocale] ?? value.ja ?? value.en ?? "";
  }
  return value;
}

function rawValue(value) {
  if (value && typeof value === "object") {
    return value.ja ?? value.en ?? "";
  }
  return value;
}

function assetUrl(src) {
  if (!src) return "";
  if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith("/") || src.startsWith("data:")) {
    return src;
  }
  return `/${src.replace(/^\.?\//, "")}`;
}

const statLabels = {
  speed: () => t("stat.speed"),
  power: () => t("stat.power"),
  control: () => t("stat.control"),
  spin: () => t("stat.spin"),
};

const characterSortLabels = {
  name: () => t("sort.name"),
  ...statLabels,
};

const maxStatValue = 5;
const mobileDetailsStatOrder = ["speed", "power", "control", "spin"];

function getStatTier(value) {
  return Math.min(maxStatValue, Math.max(1, Math.floor(value)));
}

const characterList = document.getElementById("character-list");
const racketList = document.getElementById("racket-list");
const courtList = document.getElementById("court-list");
const characterCount = document.getElementById("character-count");
const racketCount = document.getElementById("racket-count");
const courtCount = document.getElementById("court-count");
const tipsList = document.getElementById("tips-list");
const tipsCount = document.getElementById("tips-count");
const tipsEmpty = document.getElementById("tips-empty");
const beginnerVideoCategories = document.getElementById("beginner-video-categories");
const beginnerVideosNotice = document.getElementById("beginner-videos-notice");

const characterTypeFilter = document.getElementById("character-type-filter");
const characterSpecialFilter = document.getElementById("character-special-filter");
const characterSort = document.getElementById("character-sort");
const characterOrder = document.getElementById("character-order");
const characterSearch = document.getElementById("character-search");
const characterActiveFilters = document.getElementById("character-active-filters");
const characterSearchResults = document.getElementById("character-search-results");
const characterModalSearchResults = document.getElementById("character-modal-search-results");

const racketTypeFilter = document.getElementById("racket-type-filter");
const racketTimingFilter = document.getElementById("racket-timing-filter");
const racketOrder = document.getElementById("racket-order");
const racketSearch = document.getElementById("racket-search");
const racketActiveFilters = document.getElementById("racket-active-filters");
const racketSearchResults = document.getElementById("racket-search-results");
const racketModalSearchResults = document.getElementById("racket-modal-search-results");

const courtSort = document.getElementById("court-sort");
const courtOrder = document.getElementById("court-order");
const courtSearch = document.getElementById("court-search");
const courtFavoriteFilter = document.getElementById("court-favorite-filter");
const courtActiveFilters = document.getElementById("court-active-filters");
const courtPredictionCurrent = document.getElementById("court-prediction-current");
const courtPredictionList = document.getElementById("court-prediction-list");

const characterFavoriteFilter = document.getElementById("character-favorite-filter");
const racketFavoriteFilter = document.getElementById("racket-favorite-filter");
const tipsCategoryFilter = document.getElementById("tips-category-filter");
const tipsVerificationFilter = document.getElementById("tips-verification-filter");

const FAVORITE_STORAGE_KEYS = {
  characters: "favoriteCharacters",
  rackets: "favoriteRackets",
  courts: "favoriteCourts",
};

const beginnerVideoCategoryOrder = ["basics", "fever-shot", "advanced"];
const beginnerVideoExpandedCategories = new Set();
const beginnerVideoVisibleCount = 3;
let beginnerVideoMetadata = {};

function loadFavoriteSet(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((v) => Number.isInteger(v) && v >= 0));
  } catch {
    return new Set();
  }
}

let favoriteCharacterIds = loadFavoriteSet(FAVORITE_STORAGE_KEYS.characters);
let favoriteRacketIds = loadFavoriteSet(FAVORITE_STORAGE_KEYS.rackets);
let favoriteCourtIds = loadFavoriteSet(FAVORITE_STORAGE_KEYS.courts);

function saveFavoriteSet(key, valueSet) {
  localStorage.setItem(key, JSON.stringify([...valueSet]));
}

function isFavoriteCharacter(character) {
  const index = characterIndexMap.get(character);
  return Number.isInteger(index) && favoriteCharacterIds.has(index);
}

function isFavoriteRacket(racket) {
  const index = racketIndexMap.get(racket);
  return Number.isInteger(index) && favoriteRacketIds.has(index);
}

function isFavoriteCourt(court) {
  const index = courtIndexMap.get(court);
  return Number.isInteger(index) && favoriteCourtIds.has(index);
}

const sectionNavItems = Array.from(document.querySelectorAll(".js-section-nav a[data-target]"));
const sectionNavGroups = Array.from(document.querySelectorAll(".js-section-nav"));
const sectionNavSections = Array.from(
  new Set(
    sectionNavItems
      .map((item) => document.getElementById(item.dataset.target))
      .filter(Boolean)
  )
);

const sectionRouteBaseMap = {
  faq: "/faq/",
  characters: "/characters/",
  rackets: "/rackets/",
  courts: "/courts/",
  techniques: "/techniques/",
  tier: "/tier/",
};
const sectionRoutePrefix = window.location.pathname.startsWith("/en") ? "/en" : "";
const SECTION_ROUTE_MAP = Object.fromEntries(
  Object.entries(sectionRouteBaseMap).map(([sectionId, routePath]) => [sectionId, `${sectionRoutePrefix}${routePath}`])
);

function normalizeSectionPath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  if (pathname === "/en" || pathname === "/en/") {
    return "/en/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

const ROUTE_SECTION_MAP = Object.entries(SECTION_ROUTE_MAP).reduce((acc, [sectionId, routePath]) => {
  const normalized = normalizeSectionPath(routePath);
  acc[normalized] = sectionId;

  if (normalized !== "/" && normalized !== "/en/") {
    acc[normalized.replace(/\/$/, "")] = sectionId;
  }

  return acc;
}, {});

const characterIndexMap = new Map(characters.map((character, index) => [character, index]));
const tierTabButtons = Array.from(document.querySelectorAll(".tier-tab"));
const tierPanels = Array.from(document.querySelectorAll(".tier-panel"));
const characterTierBoard = document.getElementById("character-tier-board");
const characterTierPool = document.getElementById("character-tier-pool");
const racketTierBoard = document.getElementById("racket-tier-board");
const racketTierPool = document.getElementById("racket-tier-pool");
const tierPurposeList = document.getElementById("tier-purpose-list");
const officialTierList = document.getElementById("official-tier-list");
const officialTierGroupTabs = document.getElementById("official-tier-group-tabs");
const officialTierSectionTabs = document.getElementById("official-tier-section-tabs");

const tierPurposeLabelKeyMap = {
  beginner: "tier.purposeBeginner",
  winrate: "tier.purposeWinrate",
  growth: "tier.purposeGrowth",
};

const characterByJaName = new Map(characters.map((character) => [rawValue(character.name), character]));
const racketByJaName = new Map(rackets.map((racket) => [rawValue(racket.name), racket]));
const tierRowModal = document.getElementById("tier-row-modal");
const tierRowModalClose = document.getElementById("tier-row-modal-close");
const tierRowLabelInput = document.getElementById("tier-row-label-input");
const tierRowColorInput = document.getElementById("tier-row-color-input");
const tierRowClearButton = document.getElementById("tier-row-clear");
const tierRowAddAboveButton = document.getElementById("tier-row-add-above");
const tierRowAddBelowButton = document.getElementById("tier-row-add-below");
const tierRowDeleteButton = document.getElementById("tier-row-delete");

const canonicalTierDefaultRows = [
  { label: "S", color: "#f07575" },
  { label: "A", color: "#efb676" },
  { label: "B", color: "#ecd37a" },
  { label: "C", color: "#e2ea72" },
  { label: "D", color: "#aee56f" },
];

const englishTierDisplayMap = {
  S: "A",
  A: "B",
  B: "C",
  C: "D",
  D: "E",
  E: "F",
};

const englishTierCanonicalMap = Object.fromEntries(
  Object.entries(englishTierDisplayMap).map(([canonical, display]) => [display, canonical]),
);

function getTierDefaultRows(locale = currentLocale) {
  return canonicalTierDefaultRows.map((row) => ({ ...row }));
}

function getTierDisplayLabel(label, locale = currentLocale) {
  const normalized = typeof label === "string" ? label.trim() : "";
  if (locale !== "en") return normalized || "?";
  return englishTierDisplayMap[normalized] || normalized || "?";
}

function getCanonicalTierLabel(label, locale = currentLocale) {
  const normalized = typeof label === "string" ? label.trim() : "";
  if (locale !== "en") return normalized || "?";
  return englishTierCanonicalMap[normalized] || normalized || "?";
}

function isLegacyEnglishTierRows(rows) {
  return rows.length === canonicalTierDefaultRows.length && rows.every((row, index) => (
    row?.label === englishTierDisplayMap[canonicalTierDefaultRows[index].label]
    && row?.color === canonicalTierDefaultRows[index].color
  ));
}

const TIER_STORAGE_KEY = "tierBoardsV3";
let currentTierTab = "characters";
let rowModalState = null;
let currentOfficialTierGroupKey = officialTierSections[0]?.key || null;
let currentOfficialTierSectionKey = officialTierSections[0]?.sections?.[0]?.key || null;

const tierRuleLabels = {
  characters: document.querySelector('[data-tier-rule-label="characters"]'),
  rackets: document.querySelector('[data-tier-rule-label="rackets"]'),
};
const tierMetaSelects = {
  characters: Array.from(document.querySelectorAll('[data-tier-meta][data-tier-type="characters"]')),
  rackets: Array.from(document.querySelectorAll('[data-tier-meta][data-tier-type="rackets"]')),
};

const tierShareStatus = {
  characters: document.querySelector('[data-tier-share-status="characters"]'),
  rackets: document.querySelector('[data-tier-share-status="rackets"]'),
};


const tierCharacterMatchupBase = document.getElementById("tier-character-matchup-base");
const tierCharacterMatchupBasePreview = document.getElementById("tier-character-matchup-base-preview");
const characterTierMatchupSummary = document.getElementById("character-tier-matchup-summary");

function makeTierRow(label, color) {
  return {
    id: `row-${Math.random().toString(36).slice(2, 10)}`,
    label,
    color,
  };
}

function createTierMeta(kind = "global") {
  return {
    kind,
    courtType: "all",
    gameMode: "singles",
    items: "on",
    matchupBase: "",
    freeNote: "",
  };
}

function createInitialTierBoard(itemCount, kind = "global") {
  const rows = getTierDefaultRows(currentLocale).map((row) => makeTierRow(row.label, row.color));
  const rowOrders = Object.fromEntries(rows.map((row) => [row.id, []]));
  return {
    id: `profile-${Math.random().toString(36).slice(2, 10)}`,
    rows,
    placements: Object.fromEntries(Array.from({ length: itemCount }, (_, index) => [String(index), null])),
    poolOrder: Array.from({ length: itemCount }, (_, index) => index),
    rowOrders,
    meta: createTierMeta(kind),
  };
}

function normalizeRowOrders(rawRowOrders, rows, placements, itemCount) {
  const rowIdSet = new Set(rows.map((row) => row.id));
  const rowOrders = Object.fromEntries(rows.map((row) => [row.id, []]));

  if (rawRowOrders && typeof rawRowOrders === "object") {
    rows.forEach((row) => {
      const rawOrder = Array.isArray(rawRowOrders[row.id]) ? rawRowOrders[row.id] : [];
      rowOrders[row.id] = rawOrder.filter((value, index, source) => {
        if (!Number.isInteger(value) || value < 0 || value >= itemCount) return false;
        if (source.indexOf(value) !== index) return false;
        return placements[String(value)] === row.id;
      });
    });
  }

  for (let index = 0; index < itemCount; index += 1) {
    const rowId = placements[String(index)];
    if (!rowIdSet.has(rowId)) continue;
    if (!rowOrders[rowId].includes(index)) {
      rowOrders[rowId].push(index);
    }
  }

  return rowOrders;
}

function getRowItems(board, rowId) {
  if (!board || !rowId) return [];
  if (!board.rowOrders || !Array.isArray(board.rowOrders[rowId])) {
    return Object.entries(board.placements)
      .filter(([, targetRowId]) => targetRowId === rowId)
      .map(([index]) => Number(index))
      .sort((a, b) => a - b);
  }
  return board.rowOrders[rowId].filter((index) => board.placements[String(index)] === rowId);
}

function normalizeTierMeta(raw, fallbackKind = "conditional") {
  return {
    kind: raw?.kind === "global" ? "global" : fallbackKind,
    courtType: typeof raw?.courtType === "string" ? raw.courtType : "all",
    gameMode: raw?.gameMode === "singles" || raw?.gameMode === "doubles" ? raw.gameMode : "singles",
    items: raw?.items === "on" || raw?.items === "off" ? raw.items : "on",
    matchupBase: typeof raw?.matchupBase === "string" ? raw.matchupBase : "",
    freeNote: typeof raw?.freeNote === "string" ? raw.freeNote.slice(0, 40) : "",
  };
}

function normalizeSingleTierBoard(raw, itemCount, fallbackKind = "conditional") {
  const fallback = createInitialTierBoard(itemCount, fallbackKind);
  if (!raw || !Array.isArray(raw.rows) || typeof raw.placements !== "object") {
    return fallback;
  }

  let rows = raw.rows
    .filter((row) => row && typeof row.id === "string")
    .map((row) => ({
      id: row.id,
      label: typeof row.label === "string" && row.label.trim() ? row.label.trim().slice(0, 24) : "?",
      color: typeof row.color === "string" && row.color ? row.color : "#666666",
    }));

  if (isLegacyEnglishTierRows(rows)) {
    rows = rows.map((row) => ({
      ...row,
      label: getCanonicalTierLabel(row.label, "en"),
    }));
  }

  if (!rows.length) {
    return fallback;
  }

  const rowIdSet = new Set(rows.map((row) => row.id));
  const placements = {};
  for (let index = 0; index < itemCount; index += 1) {
    const key = String(index);
    const rowId = raw.placements[key];
    placements[key] = rowIdSet.has(rowId) ? rowId : null;
  }

  const placed = new Set(Object.entries(placements).filter(([, rowId]) => rowId != null).map(([index]) => Number(index)));
  const rawPool = Array.isArray(raw.poolOrder) ? raw.poolOrder : [];
  const poolOrder = rawPool.filter((value) => Number.isInteger(value) && value >= 0 && value < itemCount && !placed.has(value));
  for (let index = 0; index < itemCount; index += 1) {
    if (placements[String(index)] == null && !poolOrder.includes(index)) {
      poolOrder.push(index);
    }
  }

  return {
    ...fallback,
    ...raw,
    rows,
    placements,
    poolOrder,
    rowOrders: normalizeRowOrders(raw.rowOrders, rows, placements, itemCount),
    id: typeof raw.id === "string" ? raw.id : fallback.id,
    meta: normalizeTierMeta(raw.meta, fallbackKind),
  };
}

function normalizeTierBoardCollection(raw, itemCount) {
  if (!raw || typeof raw !== "object") {
    return {
      profiles: [createInitialTierBoard(itemCount, "global")],
      activeProfileId: null,
    };
  }

  if (Array.isArray(raw.profiles)) {
    const profiles = raw.profiles.map((profile, index) => normalizeSingleTierBoard(profile, itemCount, index === 0 ? "global" : "conditional"));
    if (!profiles.length) profiles.push(createInitialTierBoard(itemCount, "global"));
    const activeProfileId = profiles.some((profile) => profile.id === raw.activeProfileId) ? raw.activeProfileId : profiles[0].id;
    return { profiles, activeProfileId };
  }

  const legacy = normalizeSingleTierBoard(raw, itemCount, "global");
  return { profiles: [legacy], activeProfileId: legacy.id };
}

function loadTierBoards() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TIER_STORAGE_KEY) || "{}");
    const boards = {
      characters: normalizeTierBoardCollection(parsed.characters, characters.length),
      rackets: normalizeTierBoardCollection(parsed.rackets, rackets.length),
    };

    if (!boards.characters.activeProfileId) boards.characters.activeProfileId = boards.characters.profiles[0].id;
    if (!boards.rackets.activeProfileId) boards.rackets.activeProfileId = boards.rackets.profiles[0].id;
    return boards;
  } catch {
    return {
      characters: { profiles: [createInitialTierBoard(characters.length, "global")], activeProfileId: null },
      rackets: { profiles: [createInitialTierBoard(rackets.length, "global")], activeProfileId: null },
    };
  }
}

const tierBoards = loadTierBoards();
if (!tierBoards.characters.activeProfileId) tierBoards.characters.activeProfileId = tierBoards.characters.profiles[0].id;
if (!tierBoards.rackets.activeProfileId) tierBoards.rackets.activeProfileId = tierBoards.rackets.profiles[0].id;

function showTierShareStatus(boardKey, messageKey) {
  const el = tierShareStatus[boardKey];
  if (!el) return;
  el.textContent = t(messageKey);
  window.clearTimeout(el._clearTimerId);
  el._clearTimerId = window.setTimeout(() => {
    el.textContent = "";
  }, 2400);
}

function getTierShareText(boardKey) {
  const title = boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard");
  const profile = getActiveTierProfile(boardKey);
  const baseMeta = getProfileMetaLabel(profile.meta, boardKey);
  const selectedCharacter = boardKey === "characters" ? getMatchupBaseCharacter(profile) : null;
  const selectedLabel = selectedCharacter ? ` / ${t("tier.matchupSummary")} ${localizeValue(selectedCharacter.name)}${t("tier.matchupPerspectiveSuffix")}` : "";
  return `#マリオテニスフィーバー ${title} | ${baseMeta}${selectedLabel}
https://mariotennis-fever-explorer.ai-lifebook.com/
#MariTenniExplorer`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = assetUrl(src);
  });
}

async function buildTierBoardCanvas(boardKey) {
  const profile = getActiveTierProfile(boardKey);
  if (!profile) throw new Error("profile not found");

  const labelWidth = 90;
  const iconSize = 42;
  const gap = 6;
  const rowMinHeight = 56;
  const maxColumns = 8;
  const boardWidth = 860;
  const contentWidth = boardWidth - labelWidth - 24;

  sanitizeTierBoardForMatchup(boardKey, profile);
  const rows = profile.rows.map((row) => {
    const itemIndexes = getAvailableItemIndexes(boardKey, profile, getRowItems(profile, row.id));
    return { row, itemIndexes };
  });

  const rowHeights = rows.map(({ itemIndexes }) => {
    const lines = Math.max(1, Math.ceil(itemIndexes.length / maxColumns));
    return Math.max(rowMinHeight, lines * iconSize + (lines - 1) * gap + 14);
  });

  const freeNoteText = profile.meta?.freeNote?.trim() || "";
  const freeNoteHeight = freeNoteText ? 46 : 0;
  const headerHeight = 56 + freeNoteHeight;
  const matchupSummaryHeight = boardKey === "characters" && getMatchupBaseCharacter(profile) ? 52 : 0;
  const totalHeight = headerHeight + matchupSummaryHeight + rowHeights.reduce((a, b) => a + b, 0) + 16;

  const canvas = document.createElement("canvas");
  canvas.width = boardWidth;
  canvas.height = totalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas context unavailable");

  ctx.fillStyle = "#061522";
  ctx.fillRect(0, 0, boardWidth, totalHeight);

  ctx.fillStyle = "#d8eaff";
  ctx.font = "bold 26px sans-serif";
  ctx.fillText(boardKey === "characters" ? t("tier.characterBoard") : t("tier.racketBoard"), 18, 36);

  const matchupCharacter = boardKey === "characters" ? getMatchupBaseCharacter(profile) : null;
  const matchupIcon = matchupCharacter ? await loadImage(matchupCharacter.image).catch(() => null) : null;

  if (freeNoteText) {
    const noteY = 52;
    ctx.fillStyle = "rgba(18, 43, 64, 0.95)";
    ctx.fillRect(14, noteY, boardWidth - 28, 32);
    ctx.strokeStyle = "rgba(114, 178, 221, 0.45)";
    ctx.lineWidth = 1;
    ctx.strokeRect(14.5, noteY + 0.5, boardWidth - 29, 31);
    ctx.fillStyle = "#8eb4d1";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText(`${t("tier.freeNote")}:`, 24, noteY + 21);
    ctx.fillStyle = "#e7f4ff";
    ctx.font = "bold 18px sans-serif";
    ctx.fillText(freeNoteText, 122, noteY + 22);
  }

  let y = headerHeight;
  if (boardKey === "characters" && matchupCharacter) {
    const summaryHeight = 44;
    ctx.fillStyle = "rgba(46, 16, 101, 0.45)";
    ctx.fillRect(14, y - 6, boardWidth - 28, summaryHeight);
    ctx.strokeStyle = "rgba(208, 186, 255, 0.45)";
    ctx.lineWidth = 1;
    ctx.strokeRect(14.5, y - 5.5, boardWidth - 29, summaryHeight - 1);

    if (matchupIcon) {
      const summaryIconSize = 30;
      const iconX = 24;
      const iconY = y + 1;
      drawRoundedRect(ctx, iconX, iconY, summaryIconSize, summaryIconSize, 7);
      ctx.save();
      ctx.clip();
      ctx.drawImage(matchupIcon, iconX, iconY, summaryIconSize, summaryIconSize);
      ctx.restore();
      ctx.strokeStyle = "rgba(208, 186, 255, 0.65)";
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, iconX + 0.5, iconY + 0.5, summaryIconSize - 1, summaryIconSize - 1, 7);
      ctx.stroke();
    }

    ctx.fillStyle = "#efe7ff";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(`${t("tier.matchupSummary")} ${localizeValue(matchupCharacter.name)}${t("tier.matchupPerspectiveSuffix")}`, 62, y + 24);
    y += summaryHeight + 8;
  }
  for (let i = 0; i < rows.length; i += 1) {
    const { row, itemIndexes } = rows[i];
    const h = rowHeights[i];

    ctx.fillStyle = row.color;
    ctx.fillRect(12, y, labelWidth, h);
    ctx.fillStyle = getContrastingColor(row.color);
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(getTierDisplayLabel(row.label), 22, y + 32);

    ctx.fillStyle = "#0b1f31";
    ctx.fillRect(12 + labelWidth, y, contentWidth, h);

    for (let idx = 0; idx < itemIndexes.length; idx += 1) {
      const itemIndex = itemIndexes[idx];
      const col = idx % maxColumns;
      const line = Math.floor(idx / maxColumns);
      const x = 12 + labelWidth + 10 + col * (iconSize + gap);
      const iy = y + 8 + line * (iconSize + gap);
      const item = getBoardItem(boardKey, itemIndex);
      try {
        const img = await loadImage(item.image);
        ctx.drawImage(img, x, iy, iconSize, iconSize);
      } catch {
        ctx.fillStyle = "#375c78";
        ctx.fillRect(x, iy, iconSize, iconSize);
      }
    }

    y += h;
  }

  return canvas;
}

function downloadCanvasAsPng(canvas, filename) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
  link.click();
}

async function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("blob conversion failed"));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
}

async function exportTierBoardAsImage(boardKey) {
  const canvas = await buildTierBoardCanvas(boardKey);
  downloadCanvasAsPng(canvas, `tier-${boardKey}-${Date.now()}.png`);
}

function saveTierBoards() {
  localStorage.setItem(TIER_STORAGE_KEY, JSON.stringify(tierBoards));
}

function getActiveTierProfile(boardKey) {
  const board = tierBoards[boardKey];
  return board.profiles.find((profile) => profile.id === board.activeProfileId) || board.profiles[0];
}

function getMatchupBaseIndex(profile) {
  const raw = profile?.meta?.matchupBase;
  if (raw == null || raw === "") return null;
  const value = Number(raw);
  return Number.isInteger(value) && value >= 0 && value < characters.length ? value : null;
}
function getMatchupBaseCharacter(profile) {
  const index = getMatchupBaseIndex(profile);
  return Number.isInteger(index) ? characters[index] : null;
}


function getExcludedItemIndex(boardKey, profile) {
  if (boardKey !== "characters") return null;
  return getMatchupBaseIndex(profile);
}

function getAvailableItemIndexes(boardKey, profile, indexes) {
  const excluded = getExcludedItemIndex(boardKey, profile);
  if (!Number.isInteger(excluded)) return indexes;
  return indexes.filter((index) => index !== excluded);
}

function sanitizeTierBoardForMatchup(boardKey, profile) {
  const excluded = getExcludedItemIndex(boardKey, profile);
  if (!Number.isInteger(excluded)) return;
  const key = String(excluded);
  profile.placements[key] = null;
  profile.poolOrder = profile.poolOrder.filter((index) => index !== excluded);
  Object.values(profile.rowOrders || {}).forEach((order) => {
    if (!Array.isArray(order)) return;
    const idx = order.indexOf(excluded);
    if (idx >= 0) order.splice(idx, 1);
  });
}

function syncTierCharacterMatchupBaseOptions() {
  if (!tierCharacterMatchupBase) return;
  const active = getActiveTierProfile("characters");
  if (!active) return;

  const selectedValue = active.meta.matchupBase ?? "";
  const options = [
    `<option value="" data-i18n="tier.matchupBaseNone">${t("tier.matchupBaseNone")}</option>`,
    ...characters.map((character, index) => (`<option value="${index}">${localizeValue(character.name)}</option>`)),
  ];
  tierCharacterMatchupBase.innerHTML = options.join("");
  tierCharacterMatchupBase.value = String(selectedValue);

  if (!tierCharacterMatchupBasePreview) return;
  const baseCharacter = getMatchupBaseCharacter(active);
  if (!baseCharacter) {
    tierCharacterMatchupBasePreview.hidden = true;
    tierCharacterMatchupBasePreview.replaceChildren();
    return;
  }

  const image = document.createElement("img");
  image.src = assetUrl(baseCharacter.image);
  image.alt = `${localizeValue(baseCharacter.name)} ${t("tier.matchupBaseIconAlt")}`;
  tierCharacterMatchupBasePreview.hidden = false;
  tierCharacterMatchupBasePreview.replaceChildren(image);
}

function updateCharacterTierMatchupSummary(profile) {
  if (!characterTierMatchupSummary) return;
  const baseCharacter = getMatchupBaseCharacter(profile);
  if (!baseCharacter) {
    characterTierMatchupSummary.hidden = true;
    characterTierMatchupSummary.replaceChildren();
    return;
  }

  const image = document.createElement("img");
  image.src = assetUrl(baseCharacter.image);
  image.alt = `${localizeValue(baseCharacter.name)} ${t("tier.matchupBaseIconAlt")}`;

  const text = document.createElement("span");
  text.textContent = `${t("tier.matchupSummary")} ${localizeValue(baseCharacter.name)}${t("tier.matchupPerspectiveSuffix")}`;

  characterTierMatchupSummary.hidden = false;
  characterTierMatchupSummary.replaceChildren(image, text);
}

function getProfileMetaLabel(meta, boardKey = "characters") {
  const courtLabel = meta.courtType === "all" ? t("common.any") : t(`tierValue.${meta.courtType}`);
  const modeLabel = t(`tierValue.${meta.gameMode}`);
  const itemLabels = { on: t("common.yes"), off: t("common.no") };
  const parts = [];
  parts.push(`${t("tier.itemRule")}: ${itemLabels[meta.items] ?? meta.items}`);
  parts.push(`${t("tier.gameMode")}: ${modeLabel}`);
  parts.push(`${t("tier.courtType")}: ${courtLabel}`);
  if (meta.freeNote) parts.push(`${t("tier.freeNote")}: ${meta.freeNote}`);
  return parts.join(" / ");
}

function getProfileMetaParts(meta, boardKey = "characters") {
  const courtLabel = meta.courtType === "all" ? t("common.any") : t(`tierValue.${meta.courtType}`);
  const modeLabel = t(`tierValue.${meta.gameMode}`);
  const itemLabels = { on: t("common.yes"), off: t("common.no") };
  const parts = [];
  parts.push({ label: `${t("tier.itemRule")}: `, value: itemLabels[meta.items] ?? meta.items, color: "#f97316" });
  parts.push({ label: `${t("tier.gameMode")}: `, value: modeLabel, color: "#22c55e" });
  parts.push({ label: `${t("tier.courtType")}: `, value: courtLabel, color: "#38bdf8" });
  if (meta.freeNote) parts.push({ label: `${t("tier.freeNote")}: `, value: meta.freeNote, color: "#facc15" });
  return parts;
}

function measureTierMetaPartsWidth(ctx, parts) {
  let width = 0;
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    width += ctx.measureText(part.label).width;
    width += ctx.measureText(part.value).width + 18;
    if (i < parts.length - 1) width += ctx.measureText(" / ").width;
  }
  return width;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawTierMetaParts(ctx, parts, startX, baselineY) {
  let x = startX;

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    ctx.fillStyle = "#b9d5eb";
    ctx.fillText(part.label, x, baselineY);
    x += ctx.measureText(part.label).width;

    const valueWidth = ctx.measureText(part.value).width;
    const boxWidth = valueWidth + 18;
    const boxHeight = 28;
    const boxY = baselineY - 22;

    ctx.fillStyle = part.color;
    drawRoundedRect(ctx, x, boxY, boxWidth, boxHeight, 8);
    ctx.fill();

    ctx.fillStyle = "#061522";
    ctx.fillText(part.value, x + 9, baselineY);
    x += boxWidth;

    if (i < parts.length - 1) {
      ctx.fillStyle = "#8eb4d1";
      ctx.fillText(" / ", x, baselineY);
      x += ctx.measureText(" / ").width;
    }
  }
}

function updateTierRuleLabel(boardKey) {
  const labelEl = tierRuleLabels[boardKey];
  const active = getActiveTierProfile(boardKey);
  if (!labelEl || !active) return;
  labelEl.textContent = getProfileMetaLabel(active.meta, boardKey);
}

function getBoardItem(datasetKey, index) {
  return datasetKey === "characters" ? characters[index] : rackets[index];
}

function getBoardImageClass(datasetKey) {
  return datasetKey === "characters" ? "tier-item__image" : "tier-item__image tier-item__image--racket";
}

function getBoardName(datasetKey, item) {
  return datasetKey === "characters" ? localizeValue(item.name) : localizeValue(item.name);
}

const racketIndexMap = new Map(rackets.map((racket, index) => [racket, index]));
const courtIndexMap = new Map(courts.map((court, index) => [court, index]));

const courtPredictionAliases = {
  グラス: "スタジアム グラス",
  ハード: "スタジアム ハード",
  クレイ: "スタジアム クレイ",
  ウッド: "アカデミー ウッド",
  ブロック: "アカデミー ブロック",
  カーペット: "アカデミー カーペット",
  サンド: "アカデミー サンド",
  ワンダー: "ワンダーコート",
  飛行船: "飛行船コート",
  フォレスト: "フォレストコート",
  ピンボール: "ワルイージピンボール",
  ファクトリー: "ラケットファクトリー",
};

const rankedCourtObservedSequences = [
  ["グラス", "カーペット", "ピンボール", "ハード", "ワンダー", "クレイ", "グラス", "ウッド", "飛行船", "ハード"],
  ["ハード", "ブロック", "ファクトリー", "クレイ", "サンド", "フォレスト", "グラス", "カーペット"],
  ["サンド", "フォレスト", "グラス", "カーペット", "ピンボール", "ハード", "ワンダー"],
  ["ワンダー", "カーペット", "グラス", "ウッド", "飛行船", "ハード", "ブロック", "ファクトリー", "クレイ", "サンド", "フォレスト", "グラス", "カーペット"],
];

function resolveCourtPredictionAlias(name) {
  return courtPredictionAliases[name] || name;
}

function buildCourtTransitionMatrix() {
  const matrix = new Map();

  const addTransition = (from, to, weight = 1) => {
    const fromName = resolveCourtPredictionAlias(from);
    const toName = resolveCourtPredictionAlias(to);
    const fromCourt = courts.find((court) => rawValue(court.name) === fromName);
    const toCourt = courts.find((court) => rawValue(court.name) === toName);
    if (!fromCourt || !toCourt) return;

    const fromKey = rawValue(fromCourt.name);
    const toKey = rawValue(toCourt.name);
    if (!matrix.has(fromKey)) matrix.set(fromKey, new Map());
    const nextMap = matrix.get(fromKey);
    nextMap.set(toKey, (nextMap.get(toKey) || 0) + weight);
  };

  rankedCourtObservedSequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length - 1; i += 1) {
      addTransition(sequence[i], sequence[i + 1], 1);
    }
  });

  return matrix;
}

const courtTransitionMatrix = buildCourtTransitionMatrix();

function getCourtPredictionCandidates(currentCourtJaName) {
  const nextMap = courtTransitionMatrix.get(currentCourtJaName);
  if (!nextMap || nextMap.size === 0) return [];

  const total = [...nextMap.values()].reduce((sum, value) => sum + value, 0);
  return [...nextMap.entries()]
    .map(([name, score]) => ({ name, score, probability: total > 0 ? score / total : 0 }))
    .sort((a, b) => b.score - a.score || b.probability - a.probability);
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function createPredictedCourtStatRow(label, value, symbol, meterClassName) {
  const row = document.createElement("div");
  row.className = "court-prediction-card__stat-row";

  const name = document.createElement("span");
  name.className = "court-prediction-card__stat-label";
  name.textContent = label;

  const valueWrap = document.createElement("div");
  valueWrap.className = "court-prediction-card__stat-value";

  const meter = document.createElement("div");
  meter.className = `court-meter ${meterClassName}`;

  for (let i = 1; i <= 5; i += 1) {
    const segment = document.createElement("span");
    segment.className = "court-meter__segment";
    segment.textContent = symbol;
    if (i <= value) {
      segment.dataset.active = "true";
      segment.dataset.level = String(i);
    }
    meter.append(segment);
  }

  const numeric = document.createElement("span");
  numeric.className = "court-prediction-card__stat-number";
  numeric.textContent = `${value.toFixed(0)}`;

  valueWrap.append(meter, numeric);
  row.append(name, valueWrap);

  return row;
}

function focusCourtCard(court) {
  const courtSectionToggle = document.querySelector('[data-collapse-target="court-content"]');
  if (courtSectionToggle?.getAttribute("aria-expanded") === "false") {
    courtSectionToggle.click();
  }

  const ensureVisibleWithCurrentFilters = () => {
    const targetId = `court-card-${courtIndexMap.get(court)}`;
    return document.getElementById(targetId);
  };

  let targetCard = ensureVisibleWithCurrentFilters();

  if (!targetCard && (courtSearch?.value || courtFavoriteFilter?.value === "favorites")) {
    if (courtSearch) courtSearch.value = "";
    if (courtFavoriteFilter) courtFavoriteFilter.value = "all";
    renderCourts();
    targetCard = ensureVisibleWithCurrentFilters();
  }

  document.getElementById("courts")?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (!targetCard) return;

  targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function createPredictedCourtCard(court) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "court-prediction-card";

  const image = document.createElement("img");
  image.className = "court-prediction-card__image";
  image.src = assetUrl(court.image);
  image.alt = `${localizeValue(court.name)} ${t("meta.iconSuffix")}`;
  image.loading = "lazy";

  const content = document.createElement("div");
  content.className = "court-prediction-card__content";

  const name = document.createElement("strong");
  name.className = "court-prediction-card__name";
  name.textContent = localizeValue(court.name);

  const stats = document.createElement("div");
  stats.className = "court-prediction-card__stats";
  stats.append(
    createPredictedCourtStatRow(t("court.ballSpeed"), court.ballSpeed, "→", "court-meter--speed"),
    createPredictedCourtStatRow(t("court.bounce"), court.bounce, "↗", "court-meter--bounce")
  );

  content.append(name, stats);
  card.append(image, content);
  card.addEventListener("click", () => focusCourtCard(court));

  return card;
}

function renderCourtPrediction() {
  if (!courtPredictionCurrent || !courtPredictionList) return;

  const currentCourtJaName = courtPredictionCurrent.value;
  const candidates = getCourtPredictionCandidates(currentCourtJaName);
  const isDeterministic = candidates.length > 0 && candidates[0].probability === 1;
  const displayCandidates = isDeterministic ? [candidates[0]] : candidates.slice(0, 3);

  courtPredictionList.replaceChildren();

  if (displayCandidates.length === 0) {
    const empty = document.createElement("li");
    empty.className = "court-prediction__item";
    empty.textContent = "-";
    courtPredictionList.append(empty);
    return;
  }

  displayCandidates.forEach((candidate, index) => {
    const item = document.createElement("li");
    item.className = "court-prediction__item";

    const label = document.createElement("span");
    label.className = "court-prediction__candidate-label";
    label.textContent = isDeterministic
      ? t("courtPrediction.deterministic")
      : t("courtPrediction.candidate", { rank: index + 1 });

    const matchedCourt = courts.find((court) => rawValue(court.name) === candidate.name);

    const value = document.createElement("strong");
    value.className = "court-prediction__candidate-name";
    value.textContent = matchedCourt ? localizeValue(matchedCourt.name) : candidate.name;

    const confidence = document.createElement("span");
    confidence.className = "court-prediction__candidate-confidence";
    confidence.textContent = `${t("courtPrediction.confidence")}: ${formatPercent(candidate.probability)}`;

    if (matchedCourt) {
      item.append(label, createPredictedCourtCard(matchedCourt), confidence);
    } else {
      item.append(label, value, confidence);
    }
    courtPredictionList.append(item);
  });
}

function syncCourtPredictionLocale() {
  if (!courtPredictionCurrent) return;

  Array.from(courtPredictionCurrent.options).forEach((option) => {
    const matchedCourt = courts.find((court) => rawValue(court.name) === option.value);
    if (matchedCourt) {
      option.textContent = localizeValue(matchedCourt.name);
    }
  });

  renderCourtPrediction();
}

function setupCourtPrediction() {
  if (!courtPredictionCurrent) return;

  const options = courts.map((court) => ({
    jaName: rawValue(court.name),
    label: localizeValue(court.name),
  }));

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.jaName;
    option.textContent = optionData.label;
    courtPredictionCurrent.append(option);
  });

  const defaultCourt = resolveCourtPredictionAlias("飛行船");
  const fallback = options[0]?.jaName || "";
  courtPredictionCurrent.value = options.some((item) => item.jaName === defaultCourt) ? defaultCourt : fallback;

  courtPredictionCurrent.addEventListener("change", renderCourtPrediction);
  renderCourtPrediction();
}


function createStatRow(label, value) {
  const row = document.createElement("div");
  row.className = "stat-row";

  const name = document.createElement("span");
  name.className = "stat-label";
  name.textContent = typeof label === "function" ? label() : label;

  const valueWrap = document.createElement("div");
  valueWrap.className = "stat-value";

  const bar = document.createElement("div");
  bar.className = "stat-bar";

  const fill = document.createElement("span");
  fill.className = "stat-fill";
  fill.dataset.statTier = String(getStatTier(value));
  fill.style.setProperty("--stat-width", `${(value / maxStatValue) * 100}%`);

  bar.append(fill);

  const numeric = document.createElement("span");
  numeric.className = "stat-number";
  numeric.textContent = value.toFixed(1);

  valueWrap.append(bar, numeric);
  row.append(name, valueWrap);

  return row;
}

function createCourtMeterRow(label, value, symbol, meterClassName) {
  const row = document.createElement("div");
  row.className = "stat-row";

  const name = document.createElement("span");
  name.className = "stat-label";
  name.textContent = label;

  const valueWrap = document.createElement("div");
  valueWrap.className = "stat-value";

  const meter = document.createElement("div");
  meter.className = `court-meter ${meterClassName}`;

  for (let i = 1; i <= 5; i += 1) {
    const segment = document.createElement("span");
    segment.className = "court-meter__segment";
    segment.textContent = symbol;
    if (i <= value) {
      segment.dataset.active = "true";
      segment.dataset.level = String(i);
    }
    meter.append(segment);
  }

  const numeric = document.createElement("span");
  numeric.className = "stat-number";
  numeric.textContent = `${value.toFixed(0)}`;

  valueWrap.append(meter, numeric);
  row.append(name, valueWrap);

  return row;
}

function createCourtCard(court) {
  const card = document.createElement("article");
  card.className = "card";

  const courtIndex = courtIndexMap.get(court);
  if (courtIndex != null) {
    card.id = `court-card-${courtIndex}`;
    card.dataset.courtJaName = rawValue(court.name);
  }

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `<h3>${localizeValue(court.name)}</h3>`;

  const image = document.createElement("img");
  image.className = "card-image card-image--court";
  image.src = assetUrl(court.image);
  image.alt = `${localizeValue(court.name)} ${t("meta.iconSuffix")}`;

  const media = document.createElement("div");
  media.className = "card-media";
  const favoriteButton = createFavoriteButton("court", isFavoriteCourt(court), (active) => {
    if (courtIndex == null) return;
    if (active) {
      favoriteCourtIds.add(courtIndex);
    } else {
      favoriteCourtIds.delete(courtIndex);
    }
    saveFavoriteSet(FAVORITE_STORAGE_KEYS.courts, favoriteCourtIds);
    if (courtFavoriteFilter?.value === "favorites" && !active) {
      renderCourts();
    }
  });

  media.append(image, favoriteButton);
  header.append(title, media);

  const stats = document.createElement("div");
  stats.className = "stats";
  stats.append(
    createCourtMeterRow(t("court.ballSpeed"), court.ballSpeed, "→", "court-meter--speed"),
    createCourtMeterRow(t("court.bounce"), court.bounce, "↗", "court-meter--bounce")
  );

  const gameText = createAccordion(t("accordion.gameText"), localizeValue(court.text));

  card.append(header, stats, gameText);
  return card;
}

function getFilteredCourts() {
  const searchValue = normalizeKana(courtSearch?.value?.trim() || "");
  const favoriteValue = courtFavoriteFilter?.value || "all";

  let filtered = courts;
  if (searchValue) {
    filtered = filtered.filter((court) => normalizeKana(localizeValue(court.name)).includes(searchValue));
  }
  if (favoriteValue === "favorites") {
    filtered = filtered.filter((court) => isFavoriteCourt(court));
  }
  return filtered;
}

function sortCourts(items, key, order) {
  if (order === "game" && key === "name") {
    return [...items];
  }

  const sorted = [...items];
  sorted.sort((a, b) => {
    if (key === "name") {
      return order === "asc"
        ? localizeValue(a.name).localeCompare(localizeValue(b.name), currentLocale)
        : localizeValue(b.name).localeCompare(localizeValue(a.name), currentLocale);
    }

    const valueA = a[key] ?? 0;
    const valueB = b[key] ?? 0;
    return order === "asc" ? valueB - valueA : valueA - valueB;
  });

  return sorted;
}

function updateCourtActiveFilterChips() {
  if (!courtActiveFilters) return;
  courtActiveFilters.innerHTML = "";
  const chips = [];

  if (courtSearch?.value?.trim()) {
    chips.push({ key: "search", label: `${t("chip.search")}: ${courtSearch.value.trim()}` });
  }
  if (courtFavoriteFilter?.value === "favorites") {
    chips.push({ key: "favorite", label: `${t("chip.favorites")}: ${t("filter.favoritesOnly")}` });
  }
  if (courtSort?.value && courtSort.value !== "name") {
    chips.push({ key: "sort", label: `${t("chip.sort")}: ${t(`sort.${courtSort.value}`)}` });
  }
  if (courtOrder?.value === "asc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${courtSort?.value === "name" ? t("order.asc") : t("order.high")}` });
  }
  if (courtOrder?.value === "desc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${courtSort?.value === "name" ? t("order.desc") : t("order.low")}` });
  }

  chips.forEach((chip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.filterKey = chip.key;
    button.textContent = `${chip.label} ×`;
    courtActiveFilters.append(button);
  });
}

function renderCourts() {
  if (!courtList || !courtCount) return;

  syncCourtOrderAvailability();
  const filteredCourts = getFilteredCourts();
  const sortedCourts = sortCourts(filteredCourts, courtSort?.value || "name", courtOrder?.value || "game");

  const fragment = document.createDocumentFragment();
  sortedCourts.forEach((court) => fragment.append(createCourtCard(court)));
  courtList.replaceChildren(fragment);
  courtCount.textContent = t("common.count", { count: sortedCourts.length });
  updateApplyButtonCount("court-filter-apply", sortedCourts.length);
  updateCourtActiveFilterChips();
}

function getSortedStatEntries(stats) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], currentLocale));
}

function renderStatRows(container, sortedEntries, count) {
  container.replaceChildren();
  sortedEntries.slice(0, count).forEach(([key, value]) => {
    container.append(createStatRow(statLabels[key], value));
  });
}

function getMobileDetailsStatEntries(stats) {
  return mobileDetailsStatOrder
    .filter((key) => key in stats)
    .map((key) => [key, stats[key]]);
}

function createAccordion(title, content) {
  const wrapper = document.createElement("div");
  wrapper.className = "accordion";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "accordion-toggle";
  button.setAttribute("aria-expanded", "false");
  button.textContent = title;

  const panel = document.createElement("div");
  panel.className = "accordion-panel";
  panel.hidden = true;
  if (content instanceof Node) {
    panel.append(content);
  } else {
    panel.textContent = content;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
  });

  wrapper.append(button, panel);
  return wrapper;
}

/**
 * グリッドコンテナの現在の列数を取得する
 * @param {Element} gridEl - .card-grid の要素
 * @returns {number}
 */
function getGridColumnCount(gridEl) {
  const style = getComputedStyle(gridEl);
  const cols = style.gridTemplateColumns;
  if (!cols) {
    return 1;
  }
  const count = cols.trim().split(/\s+/).length;
  return count >= 1 ? count : 1;
}

/**
 * 同一行にあるカードの、同じインデックスのアコーディオンをクリックしたカードの展開状態に同期する
 * @param {HTMLButtonElement} clickedToggle - クリックされた .accordion-toggle
 */
function syncSameRowAccordions(clickedToggle) {
  const card = clickedToggle.closest(".card");
  const grid = card?.parentElement;
  if (!card || !grid || !grid.classList.contains("card-grid")) {
    return;
  }

  const cards = Array.from(grid.children);
  const cardIndex = cards.indexOf(card);
  if (cardIndex === -1) {
    return;
  }

  const columns = getGridColumnCount(grid);
  const rowIndex = Math.floor(cardIndex / columns);

  const clickedAccordion = clickedToggle.closest(".accordion");
  const accordionsInCard = card.querySelectorAll(".accordion");
  const accordionIndex = Array.from(accordionsInCard).indexOf(clickedAccordion);
  if (accordionIndex === -1) {
    return;
  }

  const newExpanded = clickedToggle.getAttribute("aria-expanded") === "true";

  cards.forEach((otherCard, i) => {
    if (Math.floor(i / columns) !== rowIndex) {
      return;
    }
    const otherAccordions = otherCard.querySelectorAll(".accordion");
    const otherAccordion = otherAccordions[accordionIndex];
    if (!otherAccordion) {
      return;
    }
    const otherButton = otherAccordion.querySelector(".accordion-toggle");
    const otherPanel = otherAccordion.querySelector(".accordion-panel");
    if (otherButton && otherPanel) {
      otherButton.setAttribute("aria-expanded", String(newExpanded));
      otherPanel.hidden = !newExpanded;
      otherButton.dispatchEvent(
        new CustomEvent("accordion-sync-state", {
          detail: { expanded: newExpanded },
        })
      );
    }
  });
}

function isMobileView() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function createFavoriteButton(itemType, isFavorite, onToggle) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "favorite-toggle";
  button.setAttribute("aria-pressed", String(isFavorite));

  const updateState = (active) => {
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    if (itemType === "character") {
      button.setAttribute("aria-label", active ? t("favorite.removeCharacter") : t("favorite.addCharacter"));
      button.title = active ? t("favorite.removeCharacter") : t("favorite.addCharacter");
    } else if (itemType === "racket") {
      button.setAttribute("aria-label", active ? t("favorite.removeRacket") : t("favorite.addRacket"));
      button.title = active ? t("favorite.removeRacket") : t("favorite.addRacket");
    } else {
      button.setAttribute("aria-label", active ? t("favorite.removeCourt") : t("favorite.addCourt"));
      button.title = active ? t("favorite.removeCourt") : t("favorite.addCourt");
    }
  };

  updateState(isFavorite);

  button.addEventListener("click", () => {
    const next = !button.classList.contains("is-active");
    updateState(next);
    onToggle(next);
  });

  return button;
}

function createCharacterCard(character) {
  const card = document.createElement("article");
  card.className = "card";
  const characterIndex = characterIndexMap.get(character);
  if (characterIndex >= 0) {
    card.id = `character-card-${characterIndex + 1}`;
  }

  const mobileView = isMobileView();
  if (mobileView) {
    card.classList.add("card--compact");
  }

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3>${localizeValue(character.name)}</h3>
    <p class="badge">${t(`type.${rawValue(character.type)}`)}</p>
  `;

  const image = document.createElement("img");
  image.src = assetUrl(character.image);
  image.alt = `${localizeValue(character.name)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";
  image.className = "card-image";

  const media = document.createElement("div");
  media.className = "card-media";
  const favoriteButton = createFavoriteButton("character", isFavoriteCharacter(character), (active) => {
    if (characterIndex == null) return;
    if (active) {
      favoriteCharacterIds.add(characterIndex);
    } else {
      favoriteCharacterIds.delete(characterIndex);
    }
    saveFavoriteSet(FAVORITE_STORAGE_KEYS.characters, favoriteCharacterIds);
    if (characterFavoriteFilter?.value === "favorites" && !active) {
      renderCharacters();
    }
  });

  media.append(image, favoriteButton);
  header.append(title, media);

  const stats = document.createElement("div");
  stats.className = "stats";
  Object.entries(character.stats).forEach(([key, value]) => {
    stats.append(createStatRow(statLabels[key], value));
  });

  if (mobileView) {
    const compactStats = document.createElement("div");
    compactStats.className = "stats stats--compact";
    const sortedStats = getSortedStatEntries(character.stats);
    const detailsStats = getMobileDetailsStatEntries(character.stats);
    renderStatRows(compactStats, sortedStats, 2);

    const special = createAccordion(t("accordion.special"), localizeValue(character.special));

    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(createAccordion(t("accordion.gameText"), localizeValue(character.text)));

    const details = createAccordion(t("accordion.details"), detailsBody);
    details.classList.add("accordion--details");
    const detailsButton = details.querySelector(".accordion-toggle");

    const renderCompactStatsByExpandedState = (isExpanded) => {
      renderStatRows(compactStats, isExpanded ? detailsStats : sortedStats, isExpanded ? 4 : 2);
    };

    if (detailsButton) {
      detailsButton.addEventListener("click", () => {
        const isExpanded = detailsButton.getAttribute("aria-expanded") === "true";
        renderCompactStatsByExpandedState(isExpanded);
      });

      detailsButton.addEventListener("accordion-sync-state", (event) => {
        const isExpanded = event.detail?.expanded === true;
        renderCompactStatsByExpandedState(isExpanded);
      });
    }

    card.append(header, compactStats, special, details);
    return card;
  }

  const special = createAccordion(t("accordion.special"), localizeValue(character.special));
  const text = createAccordion(t("accordion.gameText"), localizeValue(character.text));
  card.append(header, stats, special, text);
  return card;
}

function createRacketCard(racket) {
  const card = document.createElement("article");
  card.className = "card";
  const racketIndex = racketIndexMap.get(racket);
  if (racketIndex >= 0) {
    card.id = `racket-card-${racketIndex + 1}`;
  }

  const mobileView = isMobileView();
  if (mobileView) {
    card.classList.add("card--compact");
  }

  const header = document.createElement("div");
  header.className = "card-header";

  const title = document.createElement("div");
  title.innerHTML = `
    <h3 class="racket-title">${localizeValue(racket.name)}</h3>
    <div class="badge-group badge-group--racket">
      <span class="badge">${t(`category.${rawValue(racket.category)}`)}</span>
      <span class="badge badge--soft">${t(`timing.${rawValue(racket.timing)}`)}</span>
    </div>
  `;

  const image = document.createElement("img");
  image.src = assetUrl(racket.image);
  image.alt = `${localizeValue(racket.name)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";
  image.decoding = "async";
  image.className = "card-image card-image--racket";
  image.onerror = () => {
    image.src = "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="240" height="240" rx="24" fill="#2a3544"/><text x="120" y="130" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#8899aa">No Image</text></svg>'
    );
    image.onerror = null;
  };

  const media = document.createElement("div");
  media.className = "card-media";
  const favoriteButton = createFavoriteButton("racket", isFavoriteRacket(racket), (active) => {
    if (racketIndex == null) return;
    if (active) {
      favoriteRacketIds.add(racketIndex);
    } else {
      favoriteRacketIds.delete(racketIndex);
    }
    saveFavoriteSet(FAVORITE_STORAGE_KEYS.rackets, favoriteRacketIds);
    if (racketFavoriteFilter?.value === "favorites" && !active) {
      renderRackets();
    }
  });

  media.append(image, favoriteButton);
  header.append(title, media);

  const effect = document.createElement("p");
  effect.className = "effect";
  effect.textContent = localizeValue(racket.effect);

  const text = createAccordion(t("accordion.gameText"), localizeValue(racket.text));
  const unlockCondition = createRacketUnlockAccordion(racket);

  if (mobileView) {
    const detailsBody = document.createElement("div");
    detailsBody.className = "card-details";
    detailsBody.append(effect, text, unlockCondition);

    const details = createAccordion(t("accordion.details"), detailsBody);
    details.classList.add("accordion--details");
    card.append(header, details);
    return card;
  }

  card.append(header, effect, text, unlockCondition);
  return card;
}

function getRacketUnlockCondition(racket) {
  const racketName = rawValue(racket.name);
  return localizeValue(RACKET_UNLOCK_CONDITIONS.get(racketName) || DEFAULT_RACKET_UNLOCK_CONDITION);
}

function createRacketUnlockAccordion(racket) {
  return createAccordion(t("accordion.unlockCondition"), getRacketUnlockCondition(racket));
}

function sortItems(items, key, order) {
  if (order === "game" && key === "name") {
    return [...items];
  }

  const sorted = [...items];
  sorted.sort((a, b) => {
    if (key === "name") {
      return order === "asc"
        ? localizeValue(a.name).localeCompare(localizeValue(b.name), currentLocale)
        : localizeValue(b.name).localeCompare(localizeValue(a.name), currentLocale);
    }

    return order === "asc" ? b.stats[key] - a.stats[key] : a.stats[key] - b.stats[key];
  });
  return sorted;
}

function syncCharacterOrderAvailability() {
  const isNameSort = characterSort.value === "name";
  const gameOrderOptions = Array.from(document.querySelectorAll('#character-order option[value="game"]'));
  const ascOptions = Array.from(document.querySelectorAll('#character-order option[value="asc"]'));
  const descOptions = Array.from(document.querySelectorAll('#character-order option[value="desc"]'));

  gameOrderOptions.forEach((option) => {
    option.hidden = !isNameSort;
    option.disabled = !isNameSort;
  });

  ascOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.asc") : t("order.high");
  });

  descOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.desc") : t("order.low");
  });

  if (!isNameSort && characterOrder.value === "game") {
    characterOrder.value = "asc";
  }
}

function handleCharacterSortChange() {
  const isNameSort = characterSort.value === "name";
  if (isNameSort) {
    characterOrder.value = "game";
  }

  renderCharacters();
}

function syncCourtOrderAvailability() {
  if (!courtSort || !courtOrder) return;

  const isNameSort = courtSort.value === "name";
  const gameOrderOptions = Array.from(document.querySelectorAll('#court-order option[value="game"]'));
  const ascOptions = Array.from(document.querySelectorAll('#court-order option[value="asc"]'));
  const descOptions = Array.from(document.querySelectorAll('#court-order option[value="desc"]'));

  gameOrderOptions.forEach((option) => {
    option.hidden = !isNameSort;
    option.disabled = !isNameSort;
  });

  ascOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.asc") : t("order.high");
  });

  descOptions.forEach((option) => {
    option.textContent = isNameSort ? t("order.desc") : t("order.low");
  });

  if (!isNameSort && courtOrder.value === "game") {
    courtOrder.value = "asc";
  }
}

function handleCourtSortChange() {
  syncCourtOrderAvailability();
  renderCourts();
}


function updateApplyButtonCount(buttonId, count) {
  const applyButton = document.getElementById(buttonId);
  if (applyButton) {
    applyButton.textContent = t("common.showCount", { count });
  }
}

function normalizeKana(value) {
  return value
    .toLowerCase()
    .replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function getFilteredCharacters() {
  const typeValue = characterTypeFilter.value;
  const searchValue = normalizeKana(characterSearch.value.trim());
  const specialValue = characterSpecialFilter.value;
  const favoriteValue = characterFavoriteFilter?.value || "all";

  let filtered = characters;
  if (typeValue !== "all") {
    filtered = filtered.filter((character) => rawValue(character.type) === typeValue);
  }
  if (searchValue) {
    filtered = filtered.filter((character) => normalizeKana(localizeValue(character.name)).includes(searchValue));
  }
  if (specialValue === "yes") {
    filtered = filtered.filter((character) => rawValue(character.special) !== "なし");
  }
  if (specialValue === "no") {
    filtered = filtered.filter((character) => rawValue(character.special) === "なし");
  }
  if (favoriteValue === "favorites") {
    filtered = filtered.filter((character) => isFavoriteCharacter(character));
  }

  return filtered;
}

function updateCharacterActiveFilterChips() {
  characterActiveFilters.innerHTML = "";
  const chips = [];

  if (characterTypeFilter.value !== "all") {
    chips.push({ key: "type", label: `${t("chip.type")}: ${t(`type.${characterTypeFilter.value}`)}` });
  }
  if (characterSearch.value.trim()) {
    chips.push({ key: "search", label: `${t("chip.search")}: ${characterSearch.value.trim()}` });
  }
  if (characterSpecialFilter.value === "yes") {
    chips.push({ key: "special", label: `${t("chip.special")}: ${t("chip.yes")}` });
  }
  if (characterSpecialFilter.value === "no") {
    chips.push({ key: "special", label: `${t("chip.special")}: ${t("chip.no")}` });
  }
  if (characterFavoriteFilter?.value === "favorites") {
    chips.push({ key: "favorite", label: `${t("chip.favorites")}: ${t("filter.favoritesOnly")}` });
  }
  if (characterSort.value !== "name") {
    chips.push({ key: "sort", label: `${t("chip.sort")}: ${(characterSortLabels[characterSort.value]?.() ?? characterSort.value)}` });
  }
  if (characterOrder.value === "asc") {
    chips.push({
      key: "order",
      label: `${t("chip.order")}: ${characterSort.value === "name" ? t("order.asc") : t("order.high")}`,
    });
  }
  if (characterOrder.value === "desc") {
    chips.push({
      key: "order",
      label: `${t("chip.order")}: ${characterSort.value === "name" ? t("order.desc") : t("order.low")}`,
    });
  }

  chips.forEach((chip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.filterKey = chip.key;
    button.textContent = `${chip.label} ×`;
    characterActiveFilters.append(button);
  });
}

function closeCharacterFilterModal() {
  const modal = document.getElementById("character-filter-modal");
  if (!modal || !modal.classList.contains("is-open")) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateRacketActiveFilterChips() {
  racketActiveFilters.innerHTML = "";
  const chips = [];

  if (racketTypeFilter.value !== "all") {
    chips.push({ key: "type", label: `${t("chip.category")}: ${t(`category.${racketTypeFilter.value}`)}` });
  }
  if (racketSearch.value.trim()) {
    chips.push({ key: "search", label: `${t("chip.search")}: ${racketSearch.value.trim()}` });
  }
  if (racketTimingFilter.value !== "all") {
    chips.push({ key: "timing", label: `${t("chip.timing")}: ${t(`timing.${racketTimingFilter.value}`)}` });
  }
  if (racketFavoriteFilter?.value === "favorites") {
    chips.push({ key: "favorite", label: `${t("chip.favorites")}: ${t("filter.favoritesOnly")}` });
  }
  if (racketOrder.value === "asc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${t("order.asc")}` });
  }
  if (racketOrder.value === "desc") {
    chips.push({ key: "order", label: `${t("chip.order")}: ${t("order.desc")}` });
  }

  chips.forEach((chip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.filterKey = chip.key;
    button.textContent = `${chip.label} ×`;
    racketActiveFilters.append(button);
  });
}

function createRacketSearchShortcut(racket) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-shortcut";

  const racketIndex = racketIndexMap.get(racket);
  if (racketIndex >= 0) {
    button.dataset.targetCardId = `racket-card-${racketIndex + 1}`;
  }

  const icon = document.createElement("img");
  icon.className = "search-shortcut__icon search-shortcut__icon--racket";
  icon.src = assetUrl(racket.image);
  icon.alt = "";
  icon.loading = "lazy";
  icon.decoding = "async";
  icon.onerror = () => {
    icon.src = "data:image/svg+xml," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#2a3544"/><text x="32" y="36" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#8899aa">No Img</text></svg>'
    );
    icon.onerror = null;
  };

  const name = document.createElement("span");
  name.className = "search-shortcut__name";
  name.textContent = localizeValue(racket.name);

  button.append(icon, name);
  return button;
}

function renderRacketSearchShortcuts(filteredRackets) {
  const searchValue = racketSearch.value.trim();
  const containers = [racketSearchResults, racketModalSearchResults].filter(Boolean);

  containers.forEach((container) => {
    container.innerHTML = "";

    if (!searchValue) {
      container.hidden = true;
      return;
    }

    const label = document.createElement("p");
    label.className = "search-shortcuts__title";
    label.textContent = t("common.searchHit", { count: filteredRackets.length });

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredRackets.forEach((racket) => {
      list.append(createRacketSearchShortcut(racket));
    });

    if (!filteredRackets.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = t("common.noRacket");
      container.append(label, empty);
    } else {
      container.append(label, list);
    }

    container.hidden = false;
  });
}

function createCharacterSearchShortcut(character) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "search-shortcut";

  const characterIndex = characterIndexMap.get(character);
  if (characterIndex >= 0) {
    button.dataset.targetCardId = `character-card-${characterIndex + 1}`;
  }

  const icon = document.createElement("img");
  icon.className = "search-shortcut__icon";
  icon.src = assetUrl(character.image);
  icon.alt = "";
  icon.loading = "lazy";

  const name = document.createElement("span");
  name.className = "search-shortcut__name";
  name.textContent = localizeValue(character.name);

  button.append(icon, name);
  return button;
}

function renderCharacterSearchShortcuts(filteredCharacters) {
  const searchValue = characterSearch.value.trim();
  const containers = [characterSearchResults, characterModalSearchResults].filter(Boolean);

  containers.forEach((container) => {
    container.innerHTML = "";

    if (!searchValue) {
      container.hidden = true;
      return;
    }

    const label = document.createElement("p");
    label.className = "search-shortcuts__title";
    label.textContent = t("common.searchHit", { count: filteredCharacters.length });

    const list = document.createElement("div");
    list.className = "search-shortcuts__list";

    filteredCharacters.forEach((character) => {
      list.append(createCharacterSearchShortcut(character));
    });

    if (!filteredCharacters.length) {
      const empty = document.createElement("p");
      empty.className = "search-shortcuts__empty";
      empty.textContent = t("common.noCharacter");
      container.append(label, empty);
    } else {
      container.append(label, list);
    }

    container.hidden = false;
  });
}

function setupRacketSearchShortcutActions() {
  const onClick = (event) => {
    const shortcut = event.target.closest(".search-shortcut");
    if (!shortcut) {
      return;
    }

    const cardId = shortcut.dataset.targetCardId;
    if (!cardId) {
      return;
    }

    const modal = document.getElementById("racket-filter-modal");
    if (modal?.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    const targetCard = document.getElementById(cardId);
    if (!targetCard) {
      return;
    }

    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  racketSearchResults?.addEventListener("click", onClick);
  racketModalSearchResults?.addEventListener("click", onClick);
}

function setupCharacterSearchShortcutActions() {
  const onClick = (event) => {
    const shortcut = event.target.closest(".search-shortcut");
    if (!shortcut) {
      return;
    }

    const cardId = shortcut.dataset.targetCardId;
    if (!cardId) {
      return;
    }

    closeCharacterFilterModal();

    const targetCard = document.getElementById(cardId);
    if (!targetCard) {
      return;
    }

    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  characterSearchResults?.addEventListener("click", onClick);
  characterModalSearchResults?.addEventListener("click", onClick);
}

function renderCharacters() {
  syncCharacterOrderAvailability();

  const sortKey = characterSort.value;
  const orderValue = characterOrder.value;
  const filteredCharacters = getFilteredCharacters();
  const sorted = sortItems(filteredCharacters, sortKey, orderValue);

  const fragment = document.createDocumentFragment();
  sorted.forEach((character) => fragment.append(createCharacterCard(character)));
  characterList.replaceChildren(fragment);

  characterCount.textContent = t("common.count", { count: sorted.length });
  updateApplyButtonCount("character-filter-apply", sorted.length);

  updateCharacterActiveFilterChips();
  renderCharacterSearchShortcuts(sorted);
}

function getFilteredRackets() {
  const typeValue = racketTypeFilter.value;
  const timingValue = racketTimingFilter.value;
  const searchValue = normalizeKana(racketSearch.value.trim());
  const favoriteValue = racketFavoriteFilter?.value || "all";

  let filtered = rackets;
  if (typeValue !== "all") {
    filtered = filtered.filter((racket) => rawValue(racket.category) === typeValue);
  }
  if (timingValue !== "all") {
    filtered = filtered.filter((racket) => rawValue(racket.timing) === timingValue);
  }
  if (searchValue) {
    filtered = filtered.filter((racket) => normalizeKana(localizeValue(racket.name)).includes(searchValue));
  }
  if (favoriteValue === "favorites") {
    filtered = filtered.filter((racket) => isFavoriteRacket(racket));
  }

  return filtered;
}


function getFilteredTips() {
  const categoryValue = tipsCategoryFilter?.value || "all";
  const verificationValue = tipsVerificationFilter?.value || "all";

  return tips.filter((tip) => {
    const categoryMatch = categoryValue === "all" || rawValue(tip.category) === categoryValue;
    const verificationMatch = verificationValue === "all" || rawValue(tip.verification) === verificationValue;
    return categoryMatch && verificationMatch;
  });
}

function createTipCard(tip) {
  const card = document.createElement("article");
  card.className = "tip-card";

  const category = document.createElement("span");
  category.className = "tip-card__category";
  category.textContent = t(`tipsCategory.${rawValue(tip.category)}`);

  const verification = document.createElement("span");
  verification.className = "tip-card__verification";
  verification.textContent = t(`verification.${rawValue(tip.verification)}`);

  const title = document.createElement("h3");
  title.className = "tip-card__title";
  title.textContent = localizeValue(tip.title);

  const text = document.createElement("p");
  text.className = "tip-card__text";
  text.textContent = localizeValue(tip.content);

  card.append(category, verification, title, text);
  return card;
}

function renderTips() {
  if (!tipsList || !tipsCount || !tipsEmpty) return;

  const filteredTips = getFilteredTips();
  const fragment = document.createDocumentFragment();

  filteredTips.forEach((tip) => fragment.append(createTipCard(tip)));
  tipsList.replaceChildren(fragment);

  tipsCount.textContent = t("common.count", { count: filteredTips.length });
  tipsEmpty.hidden = filteredTips.length !== 0;
}

function getBeginnerVideosByCategory(categoryKey) {
  return beginnerVideos
    .filter((video) => video.category === categoryKey)
    .sort((a, b) => a.priority - b.priority || getBeginnerVideoTitle(a).localeCompare(getBeginnerVideoTitle(b), currentLocale));
}

function buildBeginnerVideoThumbnailUrl(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function buildBeginnerVideoWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function getBeginnerVideoTitle(video) {
  const metadataTitle = beginnerVideoMetadata?.[video.id]?.title;
  if (metadataTitle) return metadataTitle;
  return localizeValue(video.title) || video.id;
}

function getBeginnerVideoSummary(video) {
  const metadataSummary = beginnerVideoMetadata?.[video.id]?.summary;
  if (metadataSummary) return metadataSummary;
  return localizeValue(video.summary) || "";
}

async function loadBeginnerVideoMetadata() {
  try {
    const response = await fetch(assetUrl("assets/beginner-video-metadata.json"), { cache: "no-store" });
    if (!response.ok) {
      return;
    }
    const payload = await response.json();
    if (!payload || typeof payload !== "object") {
      return;
    }
    beginnerVideoMetadata = payload;
    renderBeginnerVideos();
  } catch {
    // Ignore metadata fetch failures and keep fallback labels.
  }
}

function createBeginnerVideoCard(video) {
  const card = document.createElement("a");
  card.className = "beginner-video-card";
  card.href = buildBeginnerVideoWatchUrl(video.youtubeId);
  card.target = "_blank";
  card.rel = "noopener noreferrer";

  const thumbnailWrap = document.createElement("div");
  thumbnailWrap.className = "beginner-video-card__thumbnail-wrap";

  const thumbnail = document.createElement("img");
  thumbnail.className = "beginner-video-card__thumbnail";
  thumbnail.src = buildBeginnerVideoThumbnailUrl(video.youtubeId);
  thumbnail.alt = getBeginnerVideoTitle(video);
  thumbnail.loading = "lazy";

  const playBadge = document.createElement("span");
  playBadge.className = "beginner-video-card__play";
  playBadge.textContent = t("beginnerVideos.play");

  thumbnailWrap.append(thumbnail, playBadge);

  const body = document.createElement("div");
  body.className = "beginner-video-card__body";

  if (currentLocale === "en") {
    const localeBadge = document.createElement("span");
    localeBadge.className = "beginner-video-card__locale-badge";
    localeBadge.textContent = t("beginnerVideos.japaneseBadge");
    body.append(localeBadge);
  }

  const title = document.createElement("h4");
  title.className = "beginner-video-card__title";
  title.textContent = getBeginnerVideoTitle(video);

  const summary = document.createElement("p");
  summary.className = "beginner-video-card__summary";
  summary.textContent = getBeginnerVideoSummary(video);

  body.append(title, summary);
  card.append(thumbnailWrap, body);

  return card;
}

function renderBeginnerVideos() {
  if (!beginnerVideoCategories) return;

  beginnerVideosNotice.hidden = currentLocale !== "en";

  const fragment = document.createDocumentFragment();

  beginnerVideoCategoryOrder.forEach((categoryKey) => {
    const videos = getBeginnerVideosByCategory(categoryKey);
    if (!videos.length) return;

    const section = document.createElement("section");
    section.className = "beginner-video-category";

    const header = document.createElement("div");
    header.className = "beginner-video-category__header";

    const title = document.createElement("h3");
    title.className = "beginner-video-category__title";
    title.textContent = t(`beginnerVideos.categories.${categoryKey}`);

    header.append(title);

    if (videos.length > beginnerVideoVisibleCount) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "beginner-video-category__toggle";
      const expanded = beginnerVideoExpandedCategories.has(categoryKey);
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggle.textContent = t(expanded ? "beginnerVideos.less" : "beginnerVideos.more");
      toggle.addEventListener("click", () => {
        if (beginnerVideoExpandedCategories.has(categoryKey)) {
          beginnerVideoExpandedCategories.delete(categoryKey);
        } else {
          beginnerVideoExpandedCategories.add(categoryKey);
        }
        renderBeginnerVideos();
      });
      header.append(toggle);
    }

    const grid = document.createElement("div");
    grid.className = "beginner-video-grid";

    const expanded = beginnerVideoExpandedCategories.has(categoryKey);
    const visibleVideos = expanded ? videos : videos.slice(0, beginnerVideoVisibleCount);
    visibleVideos.forEach((video) => grid.append(createBeginnerVideoCard(video)));

    section.append(header, grid);
    fragment.append(section);
  });

  beginnerVideoCategories.replaceChildren(fragment);
}

function renderRackets() {
  const filteredRackets = getFilteredRackets();
  const sorted = sortItems(filteredRackets, "name", racketOrder.value);

  const fragment = document.createDocumentFragment();
  sorted.forEach((racket) => fragment.append(createRacketCard(racket)));
  racketList.replaceChildren(fragment);

  racketCount.textContent = t("common.count", { count: sorted.length });
  updateApplyButtonCount("racket-filter-apply", sorted.length);
  updateRacketActiveFilterChips();
  renderRacketSearchShortcuts(sorted);
}

function setupRacketFilterChips() {
  racketActiveFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".active-filter-chip");
    if (!button) {
      return;
    }

    switch (button.dataset.filterKey) {
      case "type":
        racketTypeFilter.value = "all";
        break;
      case "search":
        racketSearch.value = "";
        break;
      case "timing":
        racketTimingFilter.value = "all";
        break;
      case "favorite":
        if (racketFavoriteFilter) racketFavoriteFilter.value = "all";
        break;
      case "order":
        racketOrder.value = "game";
        break;
      default:
        break;
    }

    renderRackets();
  });
}

function setupCharacterFilterChips() {
  characterActiveFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".active-filter-chip");
    if (!button) {
      return;
    }

    switch (button.dataset.filterKey) {
      case "type":
        characterTypeFilter.value = "all";
        break;
      case "search":
        characterSearch.value = "";
        break;
      case "special":
        characterSpecialFilter.value = "all";
        break;
      case "favorite":
        if (characterFavoriteFilter) characterFavoriteFilter.value = "all";
        break;
      case "sort":
        characterSort.value = "name";
        break;
      case "order":
        characterOrder.value = "game";
        break;
      default:
        break;
    }

    renderCharacters();
  });
}

function setupCourtFilterChips() {
  courtActiveFilters?.addEventListener("click", (event) => {
    const button = event.target.closest(".active-filter-chip");
    if (!button) {
      return;
    }

    switch (button.dataset.filterKey) {
      case "search":
        if (courtSearch) courtSearch.value = "";
        break;
      case "favorite":
        if (courtFavoriteFilter) courtFavoriteFilter.value = "all";
        break;
      case "sort":
        if (courtSort) courtSort.value = "name";
        break;
      case "order":
        if (courtOrder) courtOrder.value = "game";
        break;
      default:
        break;
    }

    renderCourts();
  });
}

function setupFilterModal(modalId, inlineFilterId, modalFilterId, applyButtonId, onApply) {
  const modal = document.getElementById(modalId);
  const inlineFilters = document.getElementById(inlineFilterId);
  const modalFilters = document.getElementById(modalFilterId);
  const applyButton = document.getElementById(applyButtonId);

  if (!modal || !inlineFilters || !modalFilters || !applyButton) {
    return;
  }

  modalFilters.innerHTML = "";
  modalFilters.append(...Array.from(inlineFilters.children).map((node) => node.cloneNode(true)));

  const modalSearchResults =
    modalId === "character-filter-modal"
      ? characterModalSearchResults
      : modalId === "racket-filter-modal"
        ? racketModalSearchResults
        : null;

  if (modalSearchResults) {
    const searchInput = modalFilters.querySelector('input[type="search"]');
    const searchFilter = searchInput?.closest(".filter");
    if (searchFilter) {
      searchFilter.insertAdjacentElement("afterend", modalSearchResults);
      modalSearchResults.classList.add("search-shortcuts--near-search");
    }
  }

  const sourceControls = Array.from(inlineFilters.querySelectorAll("select,input"));
  const modalControls = Array.from(modalFilters.querySelectorAll("select,input"));
  const modalControlById = new Map(modalControls.map((control) => [control.id, control]));

  sourceControls.forEach((sourceControl) => {
    const targetControl = modalControlById.get(sourceControl.id);
    if (!targetControl) {
      return;
    }

    const sync = () => {
      sourceControl.value = targetControl.value;
      onApply();
    };

    targetControl.addEventListener("change", sync);
    targetControl.addEventListener("input", sync);
  });

  const openButtons = Array.from(document.querySelectorAll(`[data-modal-target="${modalId}"]`));
  const closeButtons = Array.from(document.querySelectorAll(`[data-modal-close="${modalId}"]`));

  const syncModalWithSource = () => {
    sourceControls.forEach((sourceControl) => {
      const targetControl = modalControlById.get(sourceControl.id);
      if (targetControl) {
        targetControl.value = sourceControl.value;
      }
    });
  };

  const openModal = () => {
    syncModalWithSource();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  applyButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function setupChangelogModal() {
  const modalId = "changelog-modal";
  const modal = document.getElementById(modalId);
  const content = document.getElementById("changelog-content");

  if (!modal || !content) {
    return;
  }

  renderChangelogContent(content);

  const openButtons = Array.from(document.querySelectorAll(`[data-modal-target="${modalId}"]`));
  const closeButtons = Array.from(document.querySelectorAll(`[data-modal-close="${modalId}"]`));

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function renderChangelogContent(content) {
  content.innerHTML = "";
  changelog.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "changelog-entry";

    const dateEl = document.createElement("p");
    dateEl.className = "changelog-entry__date";
    dateEl.textContent = localizeValue(entry.date);

    const ul = document.createElement("ul");
    ul.className = "changelog-entry__items";
    entry.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = localizeValue(item);
      ul.append(li);
    });

    div.append(dateEl, ul);
    content.append(div);
  });
}


function setupSectionNavVisibility() {
  const nav = document.querySelector(".section-nav");
  const faqSection = document.getElementById("faq");

  if (!nav || !faqSection) {
    return;
  }

  const desktopMedia = window.matchMedia("(min-width: 769px)");

  const updateVisibility = () => {
    if (!desktopMedia.matches) {
      nav.classList.remove("is-visible");
      return;
    }

    const triggerOffset = 120;
    const shouldShow = faqSection.getBoundingClientRect().top <= triggerOffset;
    nav.classList.toggle("is-visible", shouldShow);
  };

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
}

function setupSectionNavToggle() {
  const toggle = document.querySelector("[data-section-nav-toggle]");
  const links = document.getElementById("desktop-section-nav-links");

  if (!toggle || !links) {
    return;
  }

  const updateCollapsedState = (isExpanded) => {
    toggle.setAttribute("aria-expanded", String(isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? t("aria.collapseNav") : t("aria.expandNav"));
    links.classList.toggle("is-collapsed", !isExpanded);
  };

  updateCollapsedState(toggle.getAttribute("aria-expanded") !== "false");

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    updateCollapsedState(!isExpanded);
  });
}

function activateSectionNav(sectionId) {
  sectionNavItems.forEach((item) => {
    const isActive = item.dataset.target === sectionId;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function getSectionIdFromUrl() {
  const hashSectionId = window.location.hash?.replace("#", "");
  if (hashSectionId && SECTION_ROUTE_MAP[hashSectionId]) {
    return hashSectionId;
  }

  const routeSectionId = ROUTE_SECTION_MAP[normalizeSectionPath(window.location.pathname)]
    || ROUTE_SECTION_MAP[window.location.pathname];
  if (routeSectionId) {
    return routeSectionId;
  }

  const htmlSectionId = document.body.dataset.routeSection;
  if (htmlSectionId && SECTION_ROUTE_MAP[htmlSectionId]) {
    return htmlSectionId;
  }

  return null;
}

function syncUrlToSection(sectionId, mode = "replace") {
  const nextPath = SECTION_ROUTE_MAP[sectionId];
  if (!nextPath) {
    return;
  }

  const url = `${nextPath}${window.location.search}`;
  if (window.location.pathname === nextPath) {
    return;
  }

  if (mode === "push") {
    history.pushState({ sectionId }, "", url);
    return;
  }

  history.replaceState({ sectionId }, "", url);
}

function setupSectionNav() {
  if (!sectionNavItems.length || !sectionNavSections.length) {
    return;
  }

  sectionNavGroups.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-target]");
      if (!link || !nav.contains(link)) {
        return;
      }

      event.preventDefault();
      const targetId = link.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      syncUrlToSection(targetId, "push");
      activateSectionNav(targetId);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length) {
        activateSectionNav(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0.2, 0.35, 0.55],
    }
  );

  sectionNavSections.forEach((section) => observer.observe(section));

  const initialId = getSectionIdFromUrl() || sectionNavSections[0].id;
  const initialSection = document.getElementById(initialId);
  if (initialSection) {
    initialSection.scrollIntoView({ block: "start" });
  }

  const isRootFaqInitialRoute =
    (window.location.pathname === "/" || window.location.pathname === "/en/") &&
    !window.location.hash &&
    initialId === "faq";

  if (!isRootFaqInitialRoute) {
    syncUrlToSection(initialId, "replace");
  }

  activateSectionNav(initialId);

  window.addEventListener("popstate", () => {
    const nextSectionId = getSectionIdFromUrl() || sectionNavSections[0].id;
    const nextSection = document.getElementById(nextSectionId);
    if (!nextSection) return;

    nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    activateSectionNav(nextSectionId);
  });
}


/**
 * カードグリッド内のアコーディオンを、同一行のカードで展開状態が同期するように委譲リスナーを設定する
 */
function setupAccordionRowSync() {
  const handleAccordionClick = (event) => {
    const toggle = event.target.closest(".accordion-toggle");
    if (!toggle) {
      return;
    }
    syncSameRowAccordions(toggle);
  };

  characterList.addEventListener("click", handleAccordionClick);
  racketList.addEventListener("click", handleAccordionClick);
  courtList.addEventListener("click", handleAccordionClick);
}

function setupSectionCollapse() {
  const toggles = Array.from(document.querySelectorAll(".section-title-toggle"));

  toggles.forEach((toggle) => {
    const targetId = toggle.dataset.collapseTarget;
    const content = document.getElementById(targetId);

    if (!content) {
      return;
    }

    const updateState = (isExpanded) => {
      toggle.setAttribute("aria-expanded", String(isExpanded));
      content.hidden = !isExpanded;
    };

    updateState(toggle.getAttribute("aria-expanded") !== "false");

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      updateState(!isExpanded);
    });
  });
}


function ensureBoardRowOrders(board) {
  if (!board) return;
  board.rowOrders = normalizeRowOrders(board.rowOrders, board.rows, board.placements, getBoardItemsLength(board));
}

function getBoardItemsLength(board) {
  return Object.keys(board.placements).length;
}

function getItemZone(board, itemIndex) {
  const rowId = board.placements[String(itemIndex)];
  if (rowId != null) return { rowId, isPool: false };
  return { rowId: null, isPool: true };
}

function removeItemFromAllOrders(board, itemIndex) {
  board.poolOrder = board.poolOrder.filter((value) => value !== itemIndex);
  Object.keys(board.rowOrders).forEach((rowId) => {
    board.rowOrders[rowId] = board.rowOrders[rowId].filter((value) => value !== itemIndex);
  });
}

function appendItemToZone(board, itemIndex, targetRowId) {
  if (targetRowId == null) {
    if (!board.poolOrder.includes(itemIndex)) board.poolOrder.push(itemIndex);
    board.placements[String(itemIndex)] = null;
    return;
  }

  if (!Array.isArray(board.rowOrders[targetRowId])) {
    board.rowOrders[targetRowId] = [];
  }
  if (!board.rowOrders[targetRowId].includes(itemIndex)) {
    board.rowOrders[targetRowId].push(itemIndex);
  }
  board.placements[String(itemIndex)] = targetRowId;
}

function insertItemToZoneAt(board, itemIndex, targetRowId, targetIndex) {
  if (targetRowId == null) {
    const clampedIndex = Math.max(0, Math.min(targetIndex, board.poolOrder.length));
    board.poolOrder.splice(clampedIndex, 0, itemIndex);
    board.placements[String(itemIndex)] = null;
    return;
  }

  if (!Array.isArray(board.rowOrders[targetRowId])) {
    board.rowOrders[targetRowId] = [];
  }

  const order = board.rowOrders[targetRowId];
  const clampedIndex = Math.max(0, Math.min(targetIndex, order.length));
  order.splice(clampedIndex, 0, itemIndex);
  board.placements[String(itemIndex)] = targetRowId;
}

function moveTierItem(boardKey, itemIndex, targetRowId) {
  const board = getActiveTierProfile(boardKey);
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);
  removeItemFromAllOrders(board, itemIndex);
  appendItemToZone(board, itemIndex, targetRowId);
  saveTierBoards();
  renderTierBoard(boardKey);
}

function swapTierItems(boardKey, sourceItemIndex, targetItemIndex) {
  if (sourceItemIndex === targetItemIndex) return;
  const board = getActiveTierProfile(boardKey);
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);

  const sourceZone = getItemZone(board, sourceItemIndex);
  const targetZone = getItemZone(board, targetItemIndex);

  const sourceOrder = sourceZone.isPool ? board.poolOrder : (board.rowOrders[sourceZone.rowId] || []);
  const targetOrder = targetZone.isPool ? board.poolOrder : (board.rowOrders[targetZone.rowId] || []);
  const sourceIndex = sourceOrder.indexOf(sourceItemIndex);
  const targetIndex = targetOrder.indexOf(targetItemIndex);

  if (sourceIndex === -1 || targetIndex === -1) return;

  const isSameZone = sourceOrder === targetOrder;
  if (isSameZone) {
    sourceOrder[sourceIndex] = targetItemIndex;
    sourceOrder[targetIndex] = sourceItemIndex;
    saveTierBoards();
    renderTierBoard(boardKey);
    return;
  }

  removeItemFromAllOrders(board, sourceItemIndex);
  removeItemFromAllOrders(board, targetItemIndex);

  insertItemToZoneAt(board, sourceItemIndex, targetZone.rowId, targetIndex);
  insertItemToZoneAt(board, targetItemIndex, sourceZone.rowId, sourceIndex);

  saveTierBoards();
  renderTierBoard(boardKey);
}

function createTierItem(boardKey, itemIndex, rowId = null) {
  const item = getBoardItem(boardKey, itemIndex);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tier-item";
  button.draggable = true;
  button.dataset.itemIndex = String(itemIndex);
  button.dataset.boardKey = boardKey;
  button.setAttribute("aria-label", getBoardName(boardKey, item));

  const image = document.createElement("img");
  image.className = getBoardImageClass(boardKey);
  image.src = assetUrl(item.image);
  image.alt = `${getBoardName(boardKey, item)}${t("meta.iconSuffix")}`;
  image.loading = "lazy";

  button.append(image);

  button.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", JSON.stringify({ boardKey, itemIndex, sourceRowId: rowId }));
  });

  button.addEventListener("click", () => {
    const board = getActiveTierProfile(boardKey);
    const rowId = board.placements[String(itemIndex)];
    if (rowId) {
      moveTierItem(boardKey, itemIndex, null);
      return;
    }

    moveTierItem(boardKey, itemIndex, board.rows[0]?.id ?? null);
  });

  return button;
}

function setupDropZone(zone, boardKey, rowId) {
  const zoneKey = `${boardKey}:${rowId ?? "pool"}`;
  if (zone.dataset.dropZoneBound === zoneKey) {
    return;
  }
  zone.dataset.dropZoneBound = zoneKey;

  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("is-dragover");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("is-dragover");
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("is-dragover");
    const data = event.dataTransfer?.getData("text/plain");
    if (!data) return;
    try {
      const parsed = JSON.parse(data);
      if (parsed.boardKey !== boardKey || !Number.isInteger(parsed.itemIndex)) return;

      const targetItemButton = event.target.closest(".tier-item");
      const targetItemIndex = Number(targetItemButton?.dataset.itemIndex);

      if (Number.isInteger(targetItemIndex)) {
        swapTierItems(boardKey, parsed.itemIndex, targetItemIndex);
        return;
      }

      moveTierItem(boardKey, parsed.itemIndex, rowId);
    } catch {
      // noop
    }
  });
}

function getContrastingColor(hex) {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#102235" : "#f5fbff";
}

function openTierRowModal(boardKey, rowId) {
  const board = getActiveTierProfile(boardKey);
  const rowIndex = board.rows.findIndex((row) => row.id === rowId);
  if (rowIndex === -1 || !tierRowModal) return;

  rowModalState = { boardKey, rowId, rowIndex };
  const row = board.rows[rowIndex];
  tierRowLabelInput.value = getTierDisplayLabel(row.label);
  tierRowColorInput.value = row.color;
  tierRowModal.classList.add("is-open");
  tierRowModal.setAttribute("aria-hidden", "false");
}

function closeTierRowModal() {
  if (!tierRowModal) return;
  tierRowModal.classList.remove("is-open");
  tierRowModal.setAttribute("aria-hidden", "true");
  rowModalState = null;
}

function syncTierMetaSelects(boardKey) {
  const active = getActiveTierProfile(boardKey);
  if (!active) return;
  tierMetaSelects[boardKey].forEach((select) => {
    const key = select.dataset.tierMeta;
    if (!key) return;
    select.value = active.meta[key] ?? "all";
  });
}

function renderTierBoard(boardKey) {
  const board = getActiveTierProfile(boardKey);
  const boardEl = boardKey === "characters" ? characterTierBoard : racketTierBoard;
  const poolEl = boardKey === "characters" ? characterTierPool : racketTierPool;
  if (!boardEl || !poolEl || !board) return;
  ensureBoardRowOrders(board);
  sanitizeTierBoardForMatchup(boardKey, board);
  syncTierMetaSelects(boardKey);
  updateTierRuleLabel(boardKey);
  if (boardKey === "characters") updateCharacterTierMatchupSummary(board);

  const boardFrag = document.createDocumentFragment();
  board.rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = "tier-row";

    const label = document.createElement("div");
    label.className = "tier-row__label";
    label.style.backgroundColor = row.color;
    label.style.color = getContrastingColor(row.color);
    label.textContent = getTierDisplayLabel(row.label);

    const items = document.createElement("div");
    items.className = "tier-row__items";
    setupDropZone(items, boardKey, row.id);

    getAvailableItemIndexes(boardKey, board, getRowItems(board, row.id))
      .forEach((itemIndex) => items.append(createTierItem(boardKey, itemIndex, row.id)));

    const controls = document.createElement("div");
    controls.className = "tier-row__controls";

    const settings = document.createElement("button");
    settings.type = "button";
    settings.className = "tier-row__btn";
    settings.textContent = "⚙";
    settings.addEventListener("click", () => openTierRowModal(boardKey, row.id));

    const up = document.createElement("button");
    up.type = "button";
    up.className = "tier-row__btn";
    up.textContent = "⌃";
    up.disabled = rowIndex === 0;
    up.addEventListener("click", () => {
      if (rowIndex === 0) return;
      [board.rows[rowIndex - 1], board.rows[rowIndex]] = [board.rows[rowIndex], board.rows[rowIndex - 1]];
      saveTierBoards();
      renderTierBoard(boardKey);
    });

    const down = document.createElement("button");
    down.type = "button";
    down.className = "tier-row__btn";
    down.textContent = "⌄";
    down.disabled = rowIndex === board.rows.length - 1;
    down.addEventListener("click", () => {
      if (rowIndex >= board.rows.length - 1) return;
      [board.rows[rowIndex + 1], board.rows[rowIndex]] = [board.rows[rowIndex], board.rows[rowIndex + 1]];
      saveTierBoards();
      renderTierBoard(boardKey);
    });

    controls.append(settings, up, down);
    rowEl.append(label, items, controls);
    boardFrag.append(rowEl);
  });

  const addRow = document.createElement("button");
  addRow.type = "button";
  addRow.className = "tier-add-row";
  addRow.textContent = `+ ${t("tier.addItem")}`;
  addRow.addEventListener("click", () => {
    const row = makeTierRow(String.fromCharCode(65 + board.rows.length), "#7aa6ff");
    board.rows.push(row);
    board.rowOrders[row.id] = [];
    saveTierBoards();
    renderTierBoard(boardKey);
  });
  boardFrag.append(addRow);

  boardEl.replaceChildren(boardFrag);

  const poolFrag = document.createDocumentFragment();
  setupDropZone(poolEl, boardKey, null);
  getAvailableItemIndexes(boardKey, board, board.poolOrder).forEach((itemIndex) => {
    poolFrag.append(createTierItem(boardKey, itemIndex, null));
  });
  poolEl.replaceChildren(poolFrag);
}

function setupTierRuleManagers() {
  Object.entries(tierMetaSelects).forEach(([boardKey, selects]) => {
    selects.forEach((select) => {
      select.addEventListener("change", () => {
        const active = getActiveTierProfile(boardKey);
        if (!active) return;
        const key = select.dataset.tierMeta;
        if (!key) return;
        active.meta[key] = key === "freeNote" ? select.value.slice(0, 40) : select.value;
        if (boardKey === "characters" && key === "matchupBase") {
          sanitizeTierBoardForMatchup(boardKey, active);
          syncTierCharacterMatchupBaseOptions();
        }
        saveTierBoards();
        renderTierBoard(boardKey);
      });
    });
  });
}

function setupTierTabs() {
  tierTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentTierTab = button.dataset.tierTab || "characters";
      tierTabButtons.forEach((tab) => tab.classList.toggle("is-active", tab === button));
      tierPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tierPanel === currentTierTab));
    });
  });
}

function setupTierShareActions() {
  document.querySelectorAll("[data-tier-share-x]").forEach((button) => {
    button.addEventListener("click", async () => {
      const boardKey = button.dataset.tierShareX;
      if (boardKey !== "characters" && boardKey !== "rackets") return;

      try {
        const canvas = await buildTierBoardCanvas(boardKey);
        const text = getTierShareText(boardKey);
        const blob = await canvasToBlob(canvas);

        if (navigator.clipboard?.write && window.ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": blob }),
            ]);
            window.alert(t("tier.shareXClipboardAlert"));
            const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(intent, "_blank", "noopener,noreferrer");
            showTierShareStatus(boardKey, "tier.shareXClipboard");
            return;
          } catch {
            // clipboard fallback
          }
        }

        downloadCanvasAsPng(canvas, `tier-${boardKey}-${Date.now()}.png`);
        window.alert(t("tier.shareXFallbackAlert"));
        const intent = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(intent, "_blank", "noopener,noreferrer");
        showTierShareStatus(boardKey, "tier.shareXFallback");
      } catch {
        showTierShareStatus(boardKey, "tier.shareXFailed");
      }
    });
  });

  document.querySelectorAll("[data-tier-save-image]").forEach((button) => {
    button.addEventListener("click", async () => {
      const boardKey = button.dataset.tierSaveImage;
      if (boardKey !== "characters" && boardKey !== "rackets") return;

      try {
        await exportTierBoardAsImage(boardKey);
        showTierShareStatus(boardKey, "tier.imageSaved");
      } catch {
        showTierShareStatus(boardKey, "tier.imageSaveFailed");
      }
    });
  });
}

function setupTierModalActions() {
  if (!tierRowModal) return;

  tierRowModalClose?.addEventListener("click", closeTierRowModal);
  tierRowModal.addEventListener("click", (event) => {
    if (event.target === tierRowModal) closeTierRowModal();
  });

  tierRowLabelInput?.addEventListener("input", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const row = board.rows.find((target) => target.id === rowModalState.rowId);
    if (!row) return;
    row.label = getCanonicalTierLabel(tierRowLabelInput.value.slice(0, 24), currentLocale);
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  tierRowColorInput?.addEventListener("input", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const row = board.rows.find((target) => target.id === rowModalState.rowId);
    if (!row) return;
    row.color = tierRowColorInput.value;
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  tierRowClearButton?.addEventListener("click", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    Object.entries(board.placements).forEach(([itemIndex, rowId]) => {
      if (rowId === rowModalState.rowId) {
        board.placements[itemIndex] = null;
        const index = Number(itemIndex);
        if (!board.poolOrder.includes(index)) board.poolOrder.push(index);
      }
    });
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  });

  const insertRow = (offset) => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    const rowIndex = board.rows.findIndex((row) => row.id === rowModalState.rowId);
    if (rowIndex === -1) return;
    const row = makeTierRow("New", "#90a4ae");
    board.rows.splice(rowIndex + offset, 0, row);
    board.rowOrders[row.id] = [];
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
  };

  tierRowAddAboveButton?.addEventListener("click", () => insertRow(0));
  tierRowAddBelowButton?.addEventListener("click", () => insertRow(1));

  tierRowDeleteButton?.addEventListener("click", () => {
    if (!rowModalState) return;
    const board = getActiveTierProfile(rowModalState.boardKey);
    if (board.rows.length <= 1) return;
    board.rows = board.rows.filter((row) => row.id !== rowModalState.rowId);
    delete board.rowOrders[rowModalState.rowId];
    Object.entries(board.placements).forEach(([itemIndex, rowId]) => {
      if (rowId === rowModalState.rowId) {
        board.placements[itemIndex] = null;
        const index = Number(itemIndex);
        if (!board.poolOrder.includes(index)) board.poolOrder.push(index);
      }
    });
    saveTierBoards();
    renderTierBoard(rowModalState.boardKey);
    closeTierRowModal();
  });
}


function createTierPurposePickCard(type, nameJa) {
  const sourceMap = type === "characters" ? characterByJaName : racketByJaName;
  const item = sourceMap.get(nameJa);
  if (!item) return null;

  const card = document.createElement("article");
  card.className = "tier-purpose-pick";

  const image = document.createElement("img");
  image.className = `tier-purpose-pick__image${type === "rackets" ? " tier-purpose-pick__image--racket" : ""}`;
  image.src = assetUrl(item.image);
  image.alt = `${localizeValue(item.name)} ${t("meta.iconSuffix")}`;
  image.loading = "lazy";

  const name = document.createElement("p");
  name.className = "tier-purpose-pick__name";
  name.textContent = localizeValue(item.name);

  card.append(image, name);
  return card;
}

function renderTierPurposeGroup(parent, type, picks = [], reasonText = "") {
  const group = document.createElement("section");
  group.className = "tier-purpose-group";

  const heading = document.createElement("h5");
  heading.className = "tier-purpose-group__title";
  heading.textContent = type === "characters" ? t("tier.purposeCharacterPicks") : t("tier.purposeRacketPicks");

  const pickGrid = document.createElement("div");
  pickGrid.className = "tier-purpose-picks";

  picks.forEach((pickName) => {
    const pickCard = createTierPurposePickCard(type, pickName);
    if (pickCard) pickGrid.append(pickCard);
  });

  const reason = document.createElement("p");
  reason.className = `tier-purpose-card__reason tier-purpose-card__reason--${type}`;
  reason.textContent = reasonText;

  group.append(heading, pickGrid, reason);
  parent.append(group);
}

function syncTierPurposeReasonHeights() {
  if (!tierPurposeList) return;

  const cards = Array.from(tierPurposeList.querySelectorAll(".tier-purpose-card"));
  ["characters", "rackets"].forEach((type) => {
    const reasons = cards
      .map((card) => card.querySelector(`.tier-purpose-card__reason--${type}`))
      .filter(Boolean);

    reasons.forEach((reason) => {
      reason.style.minHeight = "";
    });

    const maxHeight = Math.max(0, ...reasons.map((reason) => reason.offsetHeight));
    reasons.forEach((reason) => {
      reason.style.minHeight = maxHeight > 0 ? `${maxHeight}px` : "";
    });
  });
}

function renderTierPurposeRecommendations() {
  if (!tierPurposeList) return;
  tierPurposeList.innerHTML = "";

  const fragment = document.createDocumentFragment();
  tierPurposeRecommendations.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "tier-purpose-card";

    const title = document.createElement("h4");
    title.className = "tier-purpose-card__title";
    title.textContent = t(tierPurposeLabelKeyMap[entry.purpose] || entry.purpose);

    card.append(title);

    renderTierPurposeGroup(card, "characters", entry.characters?.picks || [], localizeValue(entry.characters?.reason));
    renderTierPurposeGroup(card, "rackets", entry.rackets?.picks || [], localizeValue(entry.rackets?.reason));

    fragment.append(card);
  });

  tierPurposeList.append(fragment);
  syncTierPurposeReasonHeights();
}

function getOfficialTierTitleKey(entryKey = "") {
  return `tier.official${entryKey.charAt(0).toUpperCase()}${entryKey.slice(1)}`;
}

function getOfficialTierGroupTitleKey(groupKey = "") {
  return `tier.officialGroup${groupKey.charAt(0).toUpperCase()}${groupKey.slice(1)}`;
}

function getResolvedOfficialTierState() {
  const targetGroup = officialTierSections.find((group) => group.key === currentOfficialTierGroupKey) || officialTierSections[0];
  if (!targetGroup) {
    return { group: null, section: null };
  }

  currentOfficialTierGroupKey = targetGroup.key;

  const targetSection = targetGroup.sections?.find((section) => section.key === currentOfficialTierSectionKey) || targetGroup.sections?.[0] || null;
  currentOfficialTierSectionKey = targetSection?.key || null;

  return { group: targetGroup, section: targetSection };
}

function renderOfficialTierButtons(container, items, activeKey, titleKeyBuilder, dataKey) {
  if (!container) return;
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "official-tier-tab";
    if (item.key === activeKey) {
      button.classList.add("is-active");
    }
    button.dataset[dataKey] = item.key;
    button.textContent = t(titleKeyBuilder(item.key));
    fragment.append(button);
  });

  container.append(fragment);
}

function renderOfficialTierSections() {
  if (!officialTierList) return;
  officialTierList.innerHTML = "";

  const { group: targetGroup, section: targetSection } = getResolvedOfficialTierState();
  if (!targetGroup || !targetSection) return;

  renderOfficialTierButtons(officialTierGroupTabs, officialTierSections, currentOfficialTierGroupKey, getOfficialTierGroupTitleKey, "officialTierGroupTab");
  renderOfficialTierButtons(officialTierSectionTabs, targetGroup.sections || [], currentOfficialTierSectionKey, getOfficialTierTitleKey, "officialTierSectionTab");

  const card = document.createElement("article");
  card.className = "tier-purpose-card";

  const title = document.createElement("h4");
  title.className = "tier-purpose-card__title";
  title.textContent = t(getOfficialTierTitleKey(targetSection.key));
  card.append(title);

  const placeholderText = localizeValue(targetSection.placeholderMessage);
  if (placeholderText) {
    const badge = document.createElement("p");
    badge.className = "tier-purpose-card__placeholder-label";
    badge.textContent = t("tier.officialPlaceholderComingSoon");
    card.append(badge);

    const reason = document.createElement("p");
    reason.className = "tier-purpose-card__reason tier-purpose-card__reason--placeholder";
    reason.textContent = placeholderText;
    card.append(reason);

    officialTierList.append(card);
    return;
  }

  (targetSection.rows || []).forEach((row) => {
    const group = document.createElement("section");
    group.className = "tier-purpose-group";

    const heading = document.createElement("h5");
    heading.className = "tier-purpose-group__title";
    heading.textContent = `${getTierDisplayLabel(row.label)} Tier`;

    const pickGrid = document.createElement("div");
    pickGrid.className = "tier-purpose-picks";
    row.picks.forEach((pickName) => {
      const pickCard = createTierPurposePickCard(targetSection.type, pickName);
      if (pickCard) pickGrid.append(pickCard);
    });

    group.append(heading, pickGrid);

    const reasonText = localizeValue(row.reason);
    if (reasonText) {
      const reason = document.createElement("p");
      reason.className = "tier-purpose-card__reason";
      reason.textContent = reasonText;
      group.append(reason);
    }

    card.append(group);
  });

  const noteText = localizeValue(targetSection.note);
  if (noteText) {
    const note = document.createElement("p");
    note.className = "tier-purpose-card__note";
    note.textContent = `※ ${noteText}`;
    card.append(note);
  }

  officialTierList.append(card);
}

function setupOfficialTierTabs() {
  officialTierGroupTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-official-tier-group-tab]");
    if (!button) return;

    const nextGroupKey = button.dataset.officialTierGroupTab;
    if (!nextGroupKey || nextGroupKey === currentOfficialTierGroupKey) return;

    const nextGroup = officialTierSections.find((group) => group.key === nextGroupKey);
    if (!nextGroup) return;

    currentOfficialTierGroupKey = nextGroupKey;
    currentOfficialTierSectionKey = nextGroup.sections?.[0]?.key || null;
    renderOfficialTierSections();
  });

  officialTierSectionTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-official-tier-section-tab]");
    if (!button) return;

    const nextSectionKey = button.dataset.officialTierSectionTab;
    if (!nextSectionKey || nextSectionKey === currentOfficialTierSectionKey) return;

    currentOfficialTierSectionKey = nextSectionKey;
    renderOfficialTierSections();
  });
}


function renderAllTierBoards() {
  syncTierCharacterMatchupBaseOptions();
  renderTierBoard("characters");
  renderTierBoard("rackets");
}



function applyStaticTranslations() {
  document.documentElement.lang = currentLocale;
  document.title = t("site.pageTitle");
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("site.pageDescription"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.dataset.i18nAttr?.split(",") ?? [];
    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":").map((part) => part?.trim());
      if (attr && key) {
        element.setAttribute(attr, t(key));
      }
    });
  });
}

function syncLocaleSelect() {
  if (localeSelect) {
    localeSelect.value = currentLocale;
  }
}

function normalizeStructuredText(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}

function setStructuredDataScript(scriptId, payload) {
  if (!payload) return;
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.append(script);
  }
  script.textContent = JSON.stringify(payload);
}

function buildFaqStructuredData() {
  const faqItems = Array.from(document.querySelectorAll("#faq .faq-item"))
    .map((item) => {
      const question = normalizeStructuredText(item.querySelector(".faq-item__question")?.textContent);
      const answer = normalizeStructuredText(item.querySelector(".faq-item__answer")?.textContent);
      if (!question || !answer) return null;

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (!faqItems.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: currentLocale,
    mainEntity: faqItems,
  };
}

function buildItemListStructuredData(items, listName, sectionHash) {
  const listItems = items.map((entry, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Thing",
      name: localizeValue(entry.name),
      description: localizeValue(entry.text),
      url: `${window.location.origin}${window.location.pathname}${sectionHash}`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    inLanguage: currentLocale,
    numberOfItems: listItems.length,
    itemListElement: listItems,
  };
}

function updateStructuredData() {
  setStructuredDataScript("structured-data-faq", buildFaqStructuredData());
  setStructuredDataScript(
    "structured-data-characters",
    buildItemListStructuredData(characters, t("section.characters.title"), "#characters")
  );
  setStructuredDataScript(
    "structured-data-rackets",
    buildItemListStructuredData(rackets, t("section.rackets.title"), "#rackets")
  );
}

function applyLocale() {
  applyStaticTranslations();
  const changelogContent = document.getElementById("changelog-content");
  if (changelogContent) {
    renderChangelogContent(changelogContent);
  }
  syncCharacterOrderAvailability();
  renderCharacters();
  renderRackets();
  renderCourts();
  syncCourtPredictionLocale();
  renderTips();
  renderBeginnerVideos();
  renderAllTierBoards();
  renderTierPurposeRecommendations();
  renderOfficialTierSections();
  updateStructuredData();
}
function bindChangeListeners(elements, handler) {
  elements.forEach((element) => element.addEventListener("change", handler));
}

function debounce(callback, delay = 150) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

bindChangeListeners([characterTypeFilter, characterSpecialFilter, characterFavoriteFilter, characterOrder].filter(Boolean), renderCharacters);
bindChangeListeners([racketTypeFilter, racketTimingFilter, racketFavoriteFilter, racketOrder].filter(Boolean), renderRackets);
bindChangeListeners([courtFavoriteFilter, courtOrder].filter(Boolean), renderCourts);
characterSort.addEventListener("change", handleCharacterSortChange);
courtSort?.addEventListener("change", handleCourtSortChange);
characterSearch.addEventListener("input", debounce(renderCharacters));
racketSearch.addEventListener("input", debounce(renderRackets));
courtSearch?.addEventListener("input", debounce(renderCourts));
tipsCategoryFilter?.addEventListener("change", renderTips);
tipsVerificationFilter?.addEventListener("change", renderTips);


setupCharacterFilterChips();
setupRacketFilterChips();
setupCourtFilterChips();
setupCharacterSearchShortcutActions();
setupRacketSearchShortcutActions();
setupFilterModal("character-filter-modal", "character-inline-filters", "character-modal-filters", "character-filter-apply", renderCharacters);
setupFilterModal("racket-filter-modal", "racket-inline-filters", "racket-modal-filters", "racket-filter-apply", renderRackets);
setupFilterModal("court-filter-modal", "court-inline-filters", "court-modal-filters", "court-filter-apply", renderCourts);
setupChangelogModal();
setupTierTabs();
setupTierRuleManagers();
setupTierShareActions();
setupTierModalActions();
setupOfficialTierTabs();
setupCourtPrediction();

if (localeSelect) {
  localeSelect.addEventListener("change", (event) => {
    const nextLocale = event.target.value === "en" ? "en" : "ja";
    const nextPath = getLocalizedPath(window.location.pathname, nextLocale);
    const currentFullPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const nextFullPath = `${nextPath}${window.location.search}${window.location.hash}`;

    currentLocale = nextLocale;
    localStorage.setItem("locale", currentLocale);

    if (currentFullPath !== nextFullPath) {
      window.location.assign(nextFullPath);
      return;
    }

    applyLocale();
  });
}

syncLocaleSelect();
applyLocale();
void loadBeginnerVideoMetadata();
window.addEventListener("resize", debounce(syncTierPurposeReasonHeights, 120));
setupSectionCollapse();
setupAccordionRowSync();
setupSectionNavVisibility();
setupSectionNavToggle();
setupSectionNav();
renderAllTierBoards();
