export const characters = [
    {
      name: { ja: "マリオ", en: "Mario" },
      type: "オールラウンド",
      stats: { speed: 3.5, power: 3.5, control: 3.5, spin: 1.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "すべての能力が高く、どんな相手やどんなコートでも有利にたたかえるオールラウンドなスタープレイヤー。", en: "A star player who excels in all areas. Always ready for a challenge!" },
      image: "assets/character_icons/mario.webp",
    },
    {
      name: { ja: "ルイージ", en: "Luigi" },
      type: "オールラウンド",
      stats: { speed: 3, power: 4, control: 2.5, spin: 1.5 },
      special: { ja: "強打スライスボレー強化", en: "Enhanced Power Slice Volley" },
      text: { ja: "ボレーが得意な万能プレイヤーでネット際につめるクセがある。B→Bで打つボレーが特に強い", en: "Specializes in volleys and feels right at home close to the net. Powerful slice shot B→B is extra strong." },
      image: "assets/character_icons/luigi.webp",
    },
    {
      name: { ja: "ピーチ", en: "Peach" },
      type: "テクニック",
      stats: { speed: 1, power: 1.5, control: 5, spin: 2 },
      special: { ja: "なし", en: "None" },
      text: { ja: "最高のボールコントロールと評判。コート端ぎりぎりに入るような精度の高いショットに誰もがおどろく", en: "Expertly lands shots right at the court's edge with unrivaled accuracy." },
      image: "assets/character_icons/peach.webp",
    },
    {
      name: { ja: "デイジー", en: "Daisy" },
      type: "オールラウンド",
      stats: { speed: 2, power: 3, control: 3, spin: 2 },
      special: { ja: "強打トップボレー強化", en: "Enhanced Power Topspin Volley" },
      text: { ja: "パワーとコントロールがバランスよく安定したプレイは評価が高い。A→Aで打つボレーが特に強い", en: "Known for consistent power and control. Powerful topspin shot A→A is extra strong." },
      image: "assets/character_icons/daisy.webp",
    },
    {
      name: { ja: "ロゼッタ", en: "Rosalina" },
      type: "トリッキー",
      stats: { speed: 3.5, power: 3.5, control: 3.5, spin: 3.5 },
      special: { ja: "ロブ強化。浮遊:チャージ中の移動速度が速く、フィーバーラケットの床効果を受けない", en: "Enhanced Lob. Floating: faster movement speed while charging and nullifies Fever Racket floor effects" },
      text: { ja: "力強いショットとスピンで圧倒する。ネット際の相手の上をぬくロブは曲がる軌道で流れ星のように落ちる", en: "Overwhelms with powerful shots and heavy spin. Her lobs that sail over net players curve and drop like a shooting star.※To be confirmed after release." },
      image: "assets/character_icons/rosetta.webp",
    },
    {
      name: { ja: "ポリーン", en: "Pauline" },
      type: "スピード",
      stats: { speed: 5, power: 1.5, control: 3, spin: 1.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "コート上のスピードスター。上品なたたずまいながら遠くの球にもあきらめず追いつく姿には人気がある", en: "A speed star on the court. Despite her elegant style, she never gives up on far balls—fans love it.※To be confirmed after release." },
      image: "assets/character_icons/pauline.webp",
    },
    {
      name: { ja: "ワリオ", en: "Wario" },
      type: "パワー",
      stats: { speed: 2.5, power: 5, control: 2, spin: 1 },
      special: { ja: "トップチャージ高速化", en: "Faster Topspin Charge" },
      text: { ja: "パワフルで意外にすばやい。Aで打てるトップスピンを早くチャージできる", en: "Powerful and surprisingly quick. Can charge the Topspin A faster.※To be confirmed after release." },
      image: "assets/character_icons/wario.webp",
    },
    {
      name: { ja: "ワルイージ", en: "Waluigi" },
      type: "ディフェンス",
      stats: { speed: 1, power: 2.5, control: 1, spin: 2 },
      special: { ja: "強打(パワー)フラットボレー強化", en: "Enhanced Flat Volley" },
      text: { ja: "長い手足での広い守備範囲が強み。ネット際では評判以上の力を見せる。Y→Yで打つボレーが特に強い", en: "Long limbs give huge defensive range. At the net, it’s stronger than you’d expect. Y→Y volleys are especially strong.※To be confirmed after release." },
      image: "assets/character_icons/waluigi.webp",
    },
    {
      name: { ja: "キノピオ", en: "Toad" },
      type: "スピード",
      stats: { speed: 5, power: 2, control: 2, spin: 1.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "キノコ王国を支えるために走り回るがんばり屋。ボールに向かって走る動き出しの速さには定評がある", en: "A hard worker who is quick to lend a hand around the Mushroom Kingdom. No one can get to the ball faster." },
      image: "assets/character_icons/kinopio.webp",
    },
    {
      name: { ja: "キノピコ", en: "Toadette" },
      type: "テクニック",
      stats: { speed: 1, power: 1, control: 5, spin: 3 },
      special: { ja: "なし", en: "None" },
      text: { ja: "左右にしっかり角度をつけるアングルショットが得意ワザ。相手をふりまわすテニススタイル", en: "Specialty: Angled-shot specialist skilled at catching opponents off balance." },
      image: "assets/character_icons/kinopico.webp",
    },
    {
      name: { ja: "チコ", en: "Luma" },
      type: "テクニック",
      stats: { speed: 2, power: 1.5, control: 4.5, spin: 2 },
      special: { ja: "ライジング時、各ショット強化。浮遊:チャージ中の移動速度が速く、フィーバーラケットの床効果を受けない", en: "When hitting on the rise, all shot types are enhanced. Floating: faster movement speed while charging and nullifies Fever Racket floor effects" },
      text: { ja: "ふわふわと移動する銀河の星の子。ボールがバウンドした瞬間を打つライジングショットが特に強い", en: "Galaxy denizen who floats around the court. Returns are extra strong if hit right when the ball bounces." },
      image: "assets/character_icons/chico.webp",
    },
    {
      name: { ja: "ヨッシー", en: "Yoshi" },
      type: "スピード",
      stats: { speed: 5, power: 2, control: 2.5, spin: 2 },
      special: { ja: "なし", en: "None" },
      text: { ja: "コート上をすばやく駆け回ってボールを打ち返す足の速さが自慢。ストローク勝負でねばるのが得意", en: "Proud of its quick feet, darting around the court to return shots. Great at grinding out stroke rallies.※To be confirmed after release." },
      image: "assets/character_icons/yoshi.webp",
    },
    {
      name: { ja: "クッパ", en: "Bowser" },
      type: "パワー",
      stats: { speed: 2, power: 5, control: 2.5, spin: 0.5 },
      special: { ja: "ストローク時の強打(パワー)トップ強化", en: "Boosted topspin on strokes" },
      text: { ja: "最強のパワーをほこる。全力で打ったトップスピンには誰もがふきとぶ。A→Aで打つストロークが特に強い", en: "Boasts the strongest power. Full-force topspin sends anyone flying. A→A strokes are especially strong.※To be confirmed after release." },
      image: "assets/character_icons/koopa.webp",
    },
    {
      name: { ja: "クッパJr.", en: "Bowser Jr." },
      type: "トリッキー",
      stats: { speed: 3.5, power: 2, control: 3.5, spin: 4 },
      special: { ja: "なし", en: "None" },
      text: { ja: "イタズラ好きなクッパの息子。こっそり練習したトップスピンはクセのついた打ち方でとっても曲がる", en: "Bowser’s mischievous son. His secretly practiced topspin has a quirky swing and bends a lot.※To be confirmed after release." },
      image: "assets/character_icons/koopa-jr.webp",
    },
    {
      name: { ja: "ドンキーコング", en: "Donkey Kong" },
      type: "パワー",
      stats: { speed: 3.0, power: 5, control: 3.5, spin: 1 },
      special: { ja: "ストローク時、強打スライスに押し出し付与(スライスで返球されると無効)", en: "Power Slice strokes add pushback (canceled if returned with a slice)." },
      text: { ja: "陽気で力持ちなジャングルの王者。B→Bで打つストロークが特に強くスライスで打ち返さないとふきとぶ", en: "The cheerful, strong king of the jungle. B→B strokes are especially powerful—return with slice or get blown away.※To be confirmed after release." },
      image: "assets/character_icons/donkey-kong.webp",
    },
    {
      name: { ja: "テレサ", en: "Boo" },
      type: "トリッキー",
      stats: { speed: 3.5, power: 1, control: 2.5, spin: 5 },
      special: { ja: "浮遊:チャージ中の移動速度が速く、フィーバーラケットの床効果を受けない", en: "Floating: faster movement speed while charging and nullifies Fever Racket floor effects" },
      text: { ja: "大きく曲がる下ボタンのスライスサーブでおどろかせるのが好き。よく曲がるスライスには根強いファンがいる", en: "Known for a surprisingly wide-curving B slice serve that keeps opponents on their toes." },
      image: "assets/character_icons/teresa.webp",
    },
    {
      name: { ja: "ヘイホー", en: "Shy Guy" },
      type: "テクニック",
      stats: { speed: 2, power: 2.5, control: 4.5, spin: 1.5 },
      special: { ja: "ストローク時、強打トップコントロール強化", en: "Improved control for Power Topspin strokes" },
      text: { ja: "コートの端をねらうのが得意なテクニックタイプ。A→Aで打つストロークでもコート端をねらえる", en: "A technique type that loves targeting the lines. Even A→A strokes can aim for the edge of the court.※To be confirmed after release." },
      image: "assets/character_icons/heyho.webp",
    },
    {
      name: { ja: "ノコノコ", en: "Koopa Troopa" },
      type: "スピード",
      stats: { speed: 4.5, power: 2, control: 3, spin: 2.5 },
      special: { ja: "ドロップチャージ速度向上", en: "Faster Drop Shot Charge" },
      text: { ja: "コウラに入ってすばやく移動する。B→Aで打てるドロップショットを早くチャージできる", en: "Hustles around the court in a spinning shell. Drop shot B→A charges fast." },
      image: "assets/character_icons/nokonoko.webp",
    },
    {
      name: { ja: "カメック", en: "Kamek" },
      type: "トリッキー",
      stats: { speed: 4, power: 1.5, control: 1.5, spin: 4.5 },
      special: { ja: "浮遊:チャージ中の移動速度が速く、フィーバーラケットの床効果を受けない", en: "Floating: faster movement speed while charging and nullifies Fever Racket floor effects" },
      text: { ja: "クッパの手下のまほうつかい。クセのある曲がるショットが得意でトップスピンもスライスも曲がる", en: "Bowser’s minion magician. Excels at tricky bending shots—both topspin and slice can curve.※To be confirmed after release." },
      image: "assets/character_icons/kameck.webp",
    },
    {
      name: { ja: "ガボン", en: "Spike" },
      type: "パワー",
      stats: { speed: 3.5, power: 5, control: 2, spin: 0.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "のんびりしているが力持ち。体よりも大きなラケットを振り回す。パワータイプの中でもバランスが良い", en: "Easygoing but strong. Swings a racket bigger than its body. A well-balanced power type.※To be confirmed after release." },
      image: "assets/character_icons/gabon.webp",
    },
    {
      name: { ja: "ディディーコング", en: "Diddy Kong" },
      type: "スピード",
      stats: { speed: 5, power: 2.5, control: 2.5, spin: 3 },
      special: { ja: "スライスチャージ速度向上", en: "Faster Slice Charge" },
      text: { ja: "すばしっこくボールに追いつける。Bで打てるスライスを早くチャージできる", en: "Quick enough to reach the ball easily. Can charge the Slice B faster.※To be confirmed after release." },
      image: "assets/character_icons/diddy-kong.webp",
    },
    {
      name: { ja: "ワンワン", en: "Chain Chomp" },
      type: "パワー",
      stats: { speed: 2.5, power: 5, control: 3, spin: 0 },
      special: { ja: "スマッシュ返球時の押し出し無効", en: "No pushback when returning smashes" },
      text: { ja: "かたい体はだれよりも重い。スマッシュでもふきとばされない。力まかせでショットは全く曲がらない", en: "The heftiest of them all! Won't be pushed back, even by a Star Shot. Can't add curve to any shots." },
      image: "assets/character_icons/wanwan.webp",
    },
    {
      name: { ja: "キャサリン", en: "Birdo" },
      type: "オールラウンド",
      stats: { speed: 4, power: 3.5, control: 2.5, spin: 1.5 },
      special: { ja: "フラットチャージ速度向上", en: "Faster Flat Charge" },
      text: { ja: "安定したプレイでコート上を舞う。Yで打てるフラットを早くチャージできる", en: "Dances across the court with steady play. Can charge the Flat shot Y faster.※To be confirmed after release." },
      image: "assets/character_icons/catherine.webp",
    },
    {
      name: { ja: "パタパタ", en: "Koopa Paratroopa" },
      type: "テクニック",
      stats: { speed: 4, power: 2, control: 5, spin: 2.5 },
      special: { ja: "ロブチャージ速度向上。浮遊:チャージ中の移動速度が速く、フィーバーラケットの床効果を受けない", en: "Faster Lob Charge. Floating: faster movement speed while charging and nullifies Fever Racket floor effects" },
      text: { ja: "コート端ぎりぎりをねらうのが得意。A→Bで打てるロブを早くチャージできる", en: "Skilled at landing shots at the court's edge. Lob shot A→B is quick to charge." },
      image: "assets/character_icons/patapata.webp",
    },
    {
      name: { ja: "ボスパックン", en: "Petey Piranha" },
      type: "パワー",
      stats: { speed: 2.5, power: 5, control: 3.5, spin: 1.5 },
      special: { ja: "フラットでNICEサーブ時強化、それ以外は弾速弱化。ストローク時、強打(パワー)フラット強化", en: "Flat: boosted on NICE serves, otherwise slower. Flat strokes boosted." },
      text: { ja: "NICEでフラットサーブが打てると最速だが失敗するとヘロヘロ球に。Y→Yで打つストロークが特に強い", en: "Land a NICE flat serve for top speed, but miss and it becomes a weak floater. Y→Y strokes are especially strong.※To be confirmed after release." },
      image: "assets/character_icons/boss-packun.webp",
    },
    {
      name: { ja: "パックンフラワー", en: "Piranha Plant" },
      type: "トリッキー",
      stats: { speed: 3.0, power: 1, control: 4, spin: 1.5 },
      special: { ja: "トップが高弾道かつはねる", en: "Topspin has a high arc and extra bounce" },
      text: { ja: "鉢が重くてもテニスをしたい。全身をひねって打つトップスピンはだれよりも高弾道ではねる", en: "Determined to play despite being potted. No one's topspin shots bounce higher!" },
      image: "assets/character_icons/packun-flower.webp",
    },
    {
      name: { ja: "ブンブン", en: "Boom Boom" },
      type: "ディフェンス",
      stats: { speed: 2, power: 4, control: 2.5, spin: 0.5 },
      special: { ja: "左右移動が速く、前後移動は遅い", en: "Fast side-to-side movement, slow forward/back movement" },
      text: { ja: "大きな両手で守備範囲が広い。左右の移動は速いが前後の移動はとてもおそいという弱点がある", en: "Wide defensive range thanks to huge hands. Side-to-side movement is fast, but forward/back movement is very slow.※To be confirmed after release." },
      image: "assets/character_icons/bunbun.webp",
    },
    {
      name: { ja: "ゲッソー", en: "Blooper" },
      type: "トリッキー",
      stats: { speed: 3.5, power: 0.5, control: 3.5, spin: 4 },
      special: { ja: "スライスが高弾道", en: "Slice travels in a high arc" },
      text: { ja: "バケツの水をあびてなんとか出場。やわらかい体で打ち出すスライスは高い弾道でするどく曲がる", en: "Competing on land through the power of a water bucket. Hits with sharp curve and high trajectory." },
      image: "assets/character_icons/gesso.webp",
    },
    {
      name: { ja: "ほねクッパ", en: "Dry Bowser" },
      type: "ディフェンス",
      stats: { speed: 2, power: 4.5, control: 1, spin: 1 },
      special: { ja: "バックハンド時、スライス強化", en: "Stronger backhand slice" },
      text: { ja: "相手を圧倒するパワーは健在。バックハンドのスライスが強力でフォアハンドよりよく曲がる", en: "That overwhelming power is still there. The backhand slice is strong and curves more than the forehand.※To be confirmed after release." },
      image: "assets/character_icons/hone-koopa.webp",
    },
    {
      name: { ja: "カロン", en: "Dry Bones" },
      type: "トリッキー",
      stats: { speed: 1.5, power: 3, control: 3, spin: 3.5 },
      special: { ja: "ドロップが曲がる", en: "Curving drop shot" },
      text: { ja: "コウラに入って移動するがノコノコとちがってけっこうおそい。B→Aのドロップショットが曲がる", en: "Moseys around the court in a slow-moving shell. Drop shot B→A curves." },
      image: "assets/character_icons/karon.webp",
    },
    {
      name: { ja: "ベビィマリオ", en: "Baby Mario" },
      type: "オールラウンド",
      stats: { speed: 3.5, power: 2.5, control: 3, spin: 2.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "ベビィのころのマリオ。すべての能力が安定して高い。足りないパワーはスピンでおぎなう", en: "Mario as a baby. Solid, well-balanced stats. Makes up for lower power with spin.※To be confirmed after release." },
      image: "assets/character_icons/baby-mario.webp",
    },
    {
      name: { ja: "ベビィルイージ", en: "Baby Luigi" },
      type: "オールラウンド",
      stats: { speed: 2.5, power: 3, control: 2.5, spin: 1.5 },
      special: { ja: "強打スライスボレー強化", en: "Enhanced Power Slice Volley" },
      text: { ja: "ベビィのころのルイージ。マリオと組むために練習したボレーが得意でB→Bのボレーが特に強い", en: "Honed volley skills to team up with Mario. Powerful slice shot B→B is extra strong." },
      image: "assets/character_icons/baby-luigi.webp",
    },
    {
      name: { ja: "ベビィピーチ", en: "Baby Peach" },
      type: "テクニック",
      stats: { speed: 1, power: 1, control: 5, spin: 2 },
      special: { ja: "なし", en: "None" },
      text: { ja: "ベビィのころのピーチ。コート端ぎりぎりに入るような精度の高いショットが得意", en: "Lands shots just as expertly as adult counterpart." },
      image: "assets/character_icons/baby-peach.webp",
    },
    {
      name: { ja: "ハナチャン", en: "Wiggler" },
      type: "ディフェンス",
      stats: { speed: 5, power: 4, control: 1.5, spin: 0.5 },
      special: { ja: "切り替えしが苦手", en: "Slow to change direction" },
      text: { ja: "たくさんの足で前進するのが得意。スピードが乗ると速いものの方向転換はニガテで止まりづらい", en: "Easily scuttles forward with many legs. Quick once up to speed, but not great at changing directions." },
      image: "assets/character_icons/hana-chan.webp",
    },
    {
      name: { ja: "トッテン", en: "Nabbit" },
      type: "スピード",
      stats: { speed: 5, power: 1.5, control: 2.5, spin: 2.5 },
      special: { ja: "フォアハンド強化、バックハンド弱化", en: "Stronger forehand, weaker backhand" },
      text: { ja: "逃げ足がとっても速い。フォアハンドのショットは強いが袋がジャマでバックハンドは弱い", en: "Takes off like a jet. Strong forehand shot. Bag gets in the way of backhands." },
      image: "assets/character_icons/totten.webp",
    },
    {
      name: { ja: "クリボー", en: "Goomba" },
      type: "オールラウンド",
      stats: { speed: 4, power: 2, control: 3.5, spin: 1.5 },
      special: { ja: "なし", en: "None" },
      text: { ja: "簡単にやられがちなクッパの手下。ラケットくわえてテニスに挑戦。クリボーでもがんばれば勝てますか？", en: "A trusty, if easily defeated, minion who's stepping up to the court-racket in mouth!" },
      image: "assets/character_icons/kuribo.webp",
    },
    {
      name: { ja: "ベビィワリオ", en: "Baby Wario" },
      type: "パワー",
      stats: { speed: 2.5, power: 4.5, control: 2, spin: 1 },
      special: { ja: "トップチャージ速度向上", en: "Faster Topspin Charge" },
      text: { ja: "ベビィのころのワリオ。Aで打てるトップスピンを早くチャージできる", en: "Wario as a baby. Can charge the Topspin A faster.※To be confirmed after release." },
      image: "assets/character_icons/baby-wario.webp",
    },
    {
      name: { ja: "ベビィワルイージ", en: "Baby Waluigi" },
      type: "ディフェンス",
      stats: { speed: 1.5, power: 2, control: 1.5, spin: 2 },
      special: { ja: "強打(パワー)フラットボレー強化", en: "Enhanced Flat Volley" },
      text: { ja: "ベビィのころのワルイージ。スライドフットワークで広く守る。Y→Yで打つボレーが特に強い", en: "Waluigi as a baby. Uses sliding footwork to cover wide. Y→Y volleys are especially strong.※To be confirmed after release." },
      image: "assets/character_icons/baby-waluigi.webp",
    },
  ];
  
  export const rackets = [
    {
     name: { ja: "マイラケット", en: "My Racket" },
     category: "その他",
     timing: "即時",
     effect: { ja: "高弾速の球を打つ。バウンドした場所付近に衝撃波が発生し、触れると小時間行動不可+ダメージ", en: "Hits a shot with boosted ball speed. (To be confirmed after release.)" },
     text: { ja: "特別な力はないが、手になじんで使いやすい。それぞれのお気に入りのラケット", en: "No special power, but it feels natural in your hand and is easy to use. Everyone has their own favorite racket." },
     image: "assets/racket_icons/my_racket.webp",
    },
    {
      name: { ja: "ファイアラケット", en: "Flame Racket" },
      category: "妨害",
      timing: "バウンド時",
      effect: { ja: "十字方向に5つの炎を設置。触れると短時間ショット不可 + 強制移動 + ダメージ。", en: "Places five flames in a cross pattern. Touching them briefly prevents shots, forces movement, and deals damage." },
      text: { ja: "バウンドした場所から炎をまわりにまきちらす。ふれるとアチチ！と走りまわる。", en: "It scatters flames around the bounce point. Touch one and you start running around in a panic!" },
      image: "assets/racket_icons/fire_racket.webp",
    },
    {
      name: { ja: "アイスラケット", en: "Ice Racket" },
      category: "妨害",
      timing: "即時",
      effect: { ja: "氷の床を設置。踏んでいる間滑って切り替えししづらくなる。強打をすると短時間行動不可", en: "Creates an icy floor. While on it, you slide and struggle to change direction. Using a power shot briefly prevents actions." },
      text: { ja: "バウンドした場所に氷の床を作る。氷で足が滑って強いショットを打ち返すと転ぶ", en: "It creates an icy floor at the bounce point. You slip on the ice, and trying to return a strong shot can make you fall." },
      image: "assets/racket_icons/ice_racket.webp",
    },
    {
      name: { ja: "サンダーラケット", en: "Lightning Racket" },
      category: "妨害",
      timing: "バウンド時",
      effect: { ja: "円状の雷の床を設置。触れると中時間操作不能+ダメージ", en: "Places a ring of lightning. Touch it and you’re unable to control your character for a medium duration and take damage." },
      text: { ja: "バウンドした場所に雷が発生。ふれると体がビリビリしてしばらく動けなくなる。", en: "Lightning strikes at the bounce point. Touch it and your body is shocked, leaving you unable to move for a while." },
      image: "assets/racket_icons/sunder_racket.webp",
    },
    {
      name: { ja: "ヒューゴーラケット", en: "Ty-Foo Racket" },
      category: "妨害",
      timing: "バウンド時",
      effect: { ja: "動く竜巻を設置。触れると小時間操作不能+ダメージ。ボールが当たると軌道変化。", en: "Places a moving tornado. Touching it briefly disables controls and deals damage. If the ball hits it, the ball’s trajectory changes." },
      text: { ja: "バウンドした場所に強風が発生。ふれるとふきとばされる。ボールが当たると軌道が変わる。", en: "A strong wind appears at the bounce point. If touched, you get blown away. Balls that hit it will change trajectory." },
      image: "assets/racket_icons/hyou-go_racket.webp",
    },
     {
     name: { ja: "ドロドロラケット", en: "Mud Racket" },
     category: "妨害",
     timing: "バウンド時",
     effect: { ja: "ドロの床を設置。踏んでいる間移動速度低下+ダメージ。", en: "Places a mud floor. While standing on it, movement speed is reduced and damage is taken." },
     text: { ja: "バウンドした場所にドロの床を作って移動づらくなる。ボールもはねづらく体力も減る。", en: "It creates a muddy floor at the bounce point, making movement difficult. The ball also bounces less, and your stamina drains." },
     image: "assets/racket_icons/dorodoro_racket.webp",
     },
    {
     name: { ja: "マメキノコラケット", en: "Mini Mushroom Racket" },
     category: "妨害",
     timing: "バウンド時",
     effect: { ja: "縦に動く4列のマメキノコを設置。触れると体が小さくなりボールに追いつきづらくなる。", en: "Places four vertical-moving columns of Mini Mushrooms. Touching them shrinks you and makes it harder to reach the ball." },
     text: { ja: "バウンドした場所のまわりにマメキノコを出現させる。ふれると体が小さくなる", en: "Mini Mushrooms appear around the bounce point. Touch one and your body shrinks." },
     image: "assets/racket_icons/mamekinoko_racket.webp",
    },
    {
        name: { ja: "ファイアフラワーラケット", en: "Fire Flower Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打球時ファイアボールを2発ばらまく。チャージすると3発、スーパーチャージだと4発ばらまく。触れると短時間ショット不可 + 強制移動 + ダメージ", en: "Spreads 2 fireballs on hit. Charge shots fire 3, and super-charge shots fire 4. Contact causes brief shot disable + forced movement + damage." },
        text: { ja: "使うとしばらくの間打つときにファイアボールを発生させる。ふれるとアチチ!と走り回る", en: "For a while after use, your shots spawn fireballs. Touching them makes players run around in panic." },
        image: "assets/racket_icons/fireflower_racket.webp",
      },
      {
        name: { ja: "アイスフラワーラケット", en: "Ice Flower Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打球時アイスボールを2発ばらまく。チャージすると3発、スーパーチャージだと4発ばらまく。触れると短時間行動不可 + ダメージ", en: "Spreads 2 ice balls on hit. Charge shots fire 3, and super-charge shots fire 4. Contact causes brief immobilization + damage." },
        text: { ja: "使うとしばらくの間打つときにアイスボールを発生させる。ふれるとこおって動けなくなる", en: "For a while after use, your shots spawn ice balls. Touch one and you freeze, unable to move." },
        image: "assets/racket_icons/iceflower_racket.webp",
      },
      {
        name: { ja: "スターラケット", en: "Star Racket" },
        category: "強化",
        timing: "即時",
        effect: { ja: "妨害を受けない無敵状態になり、スピードも上がる", en: "Grants an invincible state that ignores interference, and also increases speed." },
        text: { ja: "使うとしばらくの間コート上のジャマを受け付けない無敵になる。移動も少し速くなる", en: "Using it grants temporary invincibility against court hazards. Your movement speed also increases slightly." },
        image: "assets/racket_icons/star_racket.webp",
      },
      {
        name: { ja: "たつまきラケット", en: "Tornado Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打った地点から前方に進む竜巻を発生。触れると小時間操作不能+ダメージ。ボールが当たると軌道変化", en: "Creates a tornado that moves forward from the hit point. Contact causes brief control loss + damage. Balls that hit it change trajectory." },
        text: { ja: "使うとしばらくの間打つときにたつまきを発生させる。ふれたものはふきとばされる", en: "For a while after use, your shots create tornadoes. Anything they touch gets blown away." },
        image: "assets/racket_icons/tatumaki_racket.webp",
      },
    {
      name: { ja: "サンボラケット", en: "Pokey Racket" },
      category: "妨害",
      timing: "バウンド時",
      effect: { ja: "4段分のサンボを設置(カウンター時は最大8段)。ボールやプレイヤーが当たると周囲に身体をバラまく。触れると小時間操作不能+ダメージ。", en: "Places a 4-segment Pokey (up to 8 segments on counter). If hit by a ball or player, it scatters body segments around. Touching it causes brief control loss + damage." },
      text: { ja: "バウンドした場所にサンボが出現させる。ボールを当てるとくずれる", en: "A Pokey appears at the bounce point. It collapses when hit by the ball." },
      image: "assets/racket_icons/sanbo_racket.webp",
    },
    {
      name: { ja: "シャドウラケット", en: "Shadow Racket" },
      category: "強化",
      timing: "即時",
      effect: { ja: "分身を自コートに生成。分身位置はプレイヤー位置に依存。分身は自動で返球する。", en: "Creates a clone on your side of the court. The clone's position depends on your position, and it automatically returns balls." },
      text: { ja: "使うと自分の分身を作る。しばらくの間勝手にうごいてボールを打ち返してくれる", en: "Using it creates your clone. For a while, it moves on its own and returns balls for you." },
      image: "assets/racket_icons/shadow_racket.webp",
    },
    {
        name: { ja: "ファイアバーラケット", en: "Fire Bar Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "円運動をするファイアバーを設置。触れると短時間ショット不可 + 強制移動 + ダメージ。", en: "Places a rotating Fire Bar. Contact causes brief shot disable + forced movement + damage." },
        text: { ja: "バウンドした場所にファイアバーを出現させる。ふれるとアチチ！と走り回る。", en: "A Fire Bar appears at the bounce point. Touch it and you run around in panic." },
        image: "assets/racket_icons/firebar_racket.webp",
      },
      {
        name: { ja: "フリーズラケット", en: "Freezing Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "左右に3つずつ、氷を放射状に設置。触れると小時間行動不可 + ダメージ", en: "Places 3 ice shards to each side in a radial pattern. Contact causes brief immobilization + damage." },
        text: { ja: "バウンドした場所のまわりに氷をばらまく。ふれるとこおって動けなくなる", en: "It scatters ice around the bounce point. Touching it freezes you, leaving you unable to move." },
        image: "assets/racket_icons/frieze_racket.webp",
      },
      {
        name: { ja: "ビリキューラケット", en: "Amp Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打ったボールをビリキューにし、バウンド時に設置。最大3個まで設置でき、ビリキュー同士の間に雷が発生する。雷か本体に触れると小時間行動不可 + ダメージ", en: "Turns hit balls into Amps and places them at bounce points. Up to 3 can be placed, and lightning appears between Amps. Touching either the lightning or an Amp causes brief immobilization + damage." },
        text: { ja: "使うとしばらくの間打つときにボールをビリキューに変える。ビリキュー同氏は雷でつながる。", en: "For a while after use, your shots turn balls into Amps. Amp balls connect to each other with lightning." },
        image: "assets/racket_icons/birikyu-_racket.webp",
      },
      {
        name: { ja: "カーブラケット", en: "Swerve Racket" },
        category: "強化",
        timing: "即時",
        effect: { ja: "トップ・スライス・ドロップ・ロブの各球種でよく曲がるようになる。ロブは着弾速度も高速化", en: "Topspin, slice, drop, and lob shots all curve more. Lobs also gain faster landing speed." },
        text: { ja: "使うとしばらくの間ショットを曲げる強化がつく。トップスピンやロブも曲がる", en: "For a while after use, your shots gain a curve effect. Topspin and lobs can curve too." },
        image: "assets/racket_icons/curve_racket.webp",
      },
      {
        name: { ja: "インクラケット", en: "Inky Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "インクの床を設置。触れた後に打球すると自画面の一部が隠れる。カウンター時も都度小さなインクの床が設置される。床内でバウンドすると球が変化し、打ち返すと画面が一部隠れるが床は追加では設置されない。", en: "Places an ink puddle. If you touch it and then hit the ball, part of your own screen is obscured. Counters also place a small ink puddle each time. If the ball bounces in a puddle, it changes; returning that ball obscures part of the screen, but no extra puddle is placed." },
        text: { ja: "前を見づらくするインクをまく。インク内で打ち返す時やインクがついたボールを打つ時も効果あり", en: "It sprays ink that makes it hard to see ahead. The effect also applies when returning inside ink or hitting an ink-covered ball." },
        image: "assets/racket_icons/ink_racket.webp",
      },
      {
        name: { ja: "バナナラケット", en: "Banana Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "6本のバナナの皮を設置。触ると小時間行動不可+ダメージ。カウンター時も都度2本のバナナが設置される。バナナにボールが当たると除去される。", en: "Places 6 banana peels. Contact causes brief immobilization + damage. Counters also place 2 bananas each time. Bananas are removed if hit by the ball." },
        text: { ja: "バウンドした時とカウンターした時にバナナの皮をまく。ふむとすべってころんでしまう。", en: "It drops banana peels on bounce and on counter shots. Step on one and you slip and fall." },
        image: "assets/racket_icons/banana_racket.webp",
      },
      {
        name: { ja: "かざんラケット", en: "Volcano Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "火山口を設置。プレイヤー位置付近に円状の予告範囲が発生し、一定時間後に範囲内にいると短時間ショット不可 + 強制移動 + ダメージ", en: "Places a volcano vent. A circular warning zone appears near the player position; after a short delay, anyone inside suffers brief shot disable + forced movement + damage." },
        text: { ja: "バウンドした場所に火山口を作って岩をふらせる。ふれるとアチチ!と走りまる", en: "It creates a crater at the bounce point that rains down rocks. Touching them makes you run around in panic." },
        image: "assets/racket_icons/kazan_racket.webp",
      },
      {
        name: { ja: "おばけラケット", en: "Boo Racket" },
        category: "強化",
        timing: "即時",
        effect: { ja: "自分の姿が相手に見えなくなり、打ったボールも途中で見えなくなる", en: "Your character becomes invisible to the opponent, and your struck ball also disappears mid-flight." },
        text: { ja: "使うとしばらくの間打ったボールと自分の姿が相手に見えなくなる", en: "For a while after use, the balls you hit and your character become invisible to the opponent." },
        image: "assets/racket_icons/obake_racket.webp",
      },
      {
        name: { ja: "ダッシュラケット", en: "Golden Dash Racket" },
        category: "強化",
        timing: "即時",
        effect: { ja: "飛びつきが出来る距離を大幅に強化する。通常の飛びつきとは異なり、ショットの種類も反映される。ショット時に飛びつきは強制されず、普段通りの行動も可能。逆方向への切り替えし最中やボールの方向に移動キーを入れていない場合は飛びつけない。", en: "Greatly increases dive reach. Unlike normal dives, shot type is reflected. Dives are not forced when shooting, so standard actions remain possible. You cannot dive while switching back in the opposite direction, or if you are not inputting movement toward the ball." },
        text: { ja: "使うとしばらくの間すばやく飛びつける強化がつく。はなれたボールにも追いつける", en: "For a while after use, you gain a quick lunge boost, letting you reach balls that are farther away." },
        image: "assets/racket_icons/dash_racket.webp",
      },
      {
        name: { ja: "ブルラケット", en: "Chargin' Chuck Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打球時にボールを変化させ、バウンド時の軌道が不規則になる。バウンドするまで変化は持続する(変化中に強化時間が終了しても同様)。", en: "Transforms the ball on hit, causing an irregular trajectory after bounce. The effect lasts until the bounce (even if the buff ends beforehand)." },
        text: { ja: "使うとしばらくの間打つ時にボールを違う形に変える。バウンドのときあちこちにはねる", en: "For a while after use, balls you hit change into a different shape. They bounce unpredictably in many directions." },
        image: "assets/racket_icons/bull_racket.webp",
      },
      {
        name: { ja: "トゲゾーラケット", en: "Spiny Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "トゲゾーを3体設置(カウンター時は最大6匹)。プレイヤーにゆっくりと誘導し、触れると小距離押し出し + ダメージ。トゲゾーにボールが当たると除去される。", en: "Places 3 Spinies (up to 6 on counter). They slowly home in on players; contact causes a short pushback + damage. Spinies are removed if hit by the ball." },
        text: { ja: "バウンドした場所にトゲゾーを出現させる。トゲゾーは歩いて近づいてくる", en: "A Spiny appears at the bounce point. It walks toward players as it approaches." },
        image: "assets/racket_icons/togezo_racket.webp",
      },
      {
        name: { ja: "マジックラケット", en: "Magic Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "まほうの杖を設置。設置地点からプレイヤーに直線軌道で弾を発射。触れると小時間行動不可 + ダメージ + ラケットがフライパンになり、効果中はフラット以外の球種が使用できず、フィーバーゲージの自動増加が停止/フィーバーショットも使用不可になる。", en: "Places a magic wand. It fires projectiles in a straight line from its location toward players. On contact, it causes brief immobilization + damage, then turns your racket into a frying pan; while affected, only flat shots are available, Fever gauge auto-charge stops, and Fever Shot cannot be used." },
        text: { ja: "バウンドした場所にまほうの杖を出現させる。まほうにふれるとラケットが変化", en: "A magic wand appears at the bounce point. Touch its magic and your racket transforms." },
        image: "assets/racket_icons/magic_racket.webp",
      },
      {
        name: { ja: "キラーラケット", en: "Bullet Bill Racket" },
        category: "強化",
        timing: "即時",
        effect: { ja: "打球時ボールをキラーに変化させ、一定時間後高弾速になる。変化後速くなるタイミングは球種によって変化し、スマッシュだと即時。強化時はコントロールに制限がかかり、コート端を狙ったショットは不可", en: "Transforms the ball into a Bullet Bill on hit, then boosts it to very high speed after a delay. The acceleration timing varies by shot type (immediate on smash). While boosted, control is restricted and edge-targeted shots are unavailable." },
        text: { ja: "使うとしばらくの間打つ時にボールをキラーに変える。キラーは高速でまっすぐ飛ぶ", en: "For a while after use, balls you hit turn into Bullet Bills. Bullet Bills fly fast in a straight line." },
        image: "assets/racket_icons/killer_racket.webp",
      },
      {
        name: { ja: "ドッスンラケット", en: "Thwomp Racket" },
        category: "妨害",
        timing: "バウンド時",
        effect: { ja: "上空にドッスンを生成。落下地点付近にいると小時間行動不可+ダメージ。直撃するとK.O.。ボールがドッスンに当たると軌道が変化する。ダウン状態中さらに直撃すると長時間行動不可になるが、カウント状態は変化しない。", en: "Summons a Thwomp overhead. Being near its landing point causes brief immobilization + damage; a direct hit is a K.O. If the ball hits the Thwomp, its trajectory changes. A further direct hit while downed causes a longer immobilization, but the count state does not change." },
        text: { ja: "バウンドした場所にドッスンを出現させる。近づくとふみつぶされてしまう", en: "A Thwomp appears at the bounce point. Get close and you’ll be crushed." },
        image: "assets/racket_icons/dossun_racket.webp",
      },
      {
        name: { ja: "オシダシーラケット", en: "Shova Racket" },
        category: "妨害",
        timing: "即時",
        effect: { ja: "打球時、全ての球種で中距離をふきとばす強化状態になる。", en: "On hit, all shot types gain a strengthened knockback effect that blows opponents away a medium distance." },
        text: { ja: "使うとしばらくの間相手をコート奥に押し出す強化がつく。ショットの威力も少しあがる。", en: "For a while after use, your shots gain a pushback effect that forces opponents deeper into the court. Shot power also rises slightly." },
        image: "assets/racket_icons/oshidasi_racket.webp",
      },
    {
      name: { ja: "メタルラケット", en: "Metal Racket" },
      category: "強化",
      timing: "即時",
      effect: { ja: "妨害を受けない無敵状態になり、ショット威力も上がる", en: "Become invincible and boost shot power." },
      text: { ja: "使うとしばらくの間コート上のジャマを受けないメタル状態に。ショット威力が少しあがる", en: "Using it puts you in a Metal state for a while, ignoring court hazards. Shot power increases slightly." },
      image: "assets/racket_icons/metal_racket.webp",
    },
    {
        name: { ja: "ハテナケット", en: "Question Racket" },
        category: "妨害",
        timing: "その他",
        effect: { ja: "使用する度、全ラケットからランダムで効果が発生", en: "Each use triggers a random effect from the full racket pool." },
        text: { ja: "ショットするまでどの効果が出るか分からない。使うたびに効果がかわる", en: "You won’t know which effect appears until you shoot. The effect changes every time you use it." },
        image: "assets/racket_icons/hatena_racket.webp",
      },
    {
      name: { ja: "ブーメランラケット", en: "Boomerang Racket" },
      category: "強化",
      timing: "即時",
      effect: { ja: "スイングモードのみ選択可能。プレイヤーの周りに円状に回るブーメランを設置し、短時間だけ自動返球できる。返球時は高速でよく曲がるスライスで打ち返す。", en: "Selectable in Swing Mode only. Places a boomerang that circles the player and enables automatic returns for a short time. Returns are high-speed, sharply curving slices." },
      text: { ja: "使うとしばらくの間自分のまわりをぐるぐるまわってボールを打ち返してくれる", en: "For a while after use, boomerangs spin around you and return balls on your behalf." },
      image: "assets/racket_icons/boomerang_racket.webp",
    },
  ];

export const tierPurposeRecommendations = [
  {
    purpose: "beginner",
    characters: {
      picks: ["デイジー", "マリオ", "ボスパックン"],
      reason: {
        ja: "パラメータのバランスがとれており、基礎を覚えながら試合を組み立てやすい。特にデイジーはトップボレーが速く決め球にしやすい。ボスパックン捕球範囲が広く、コントロールもあるので、強いフラットを活かしやすい。フラットサーブ失敗時のリスクを考慮すると、基本的にはスライスサーブで打つのがおすすめ。",
        en: "Their stats are well balanced, so they are easy to build points with while learning the fundamentals. Daisy in particular has a fast top volley that is easy to use as a finisher. Petey Piranha has a wide catch range and good control, making strong flat shots easier to leverage. Considering the risk when a flat serve fails, a slice serve is generally recommended.",
      },
    },
    rackets: {
      picks: ["アイスフラワーラケット", "メタルラケット", "スターラケット"],
      reason: {
        ja: "全て設置が不要なフィーバーショットの為、カウンターされるリスクが低く、ラケットの強みを出しつつ戦いやすい。",
        en: "All of these Fever Shots require no setup, so the risk of being countered is lower, making them easier to use while still bringing out each racket's strengths.",
      },
    },
  },
  {
    purpose: "winrate",
    characters: {
      picks: ["ドンキーコング", "ロゼッタ"],
      reason: {
        ja: "ドンキーはパワー/コントロール/スピードの全てが高く、弱点は浮いた球をスマッシュで返しづらいのと当たり判定が大きいところ。ロゼッタは全パラメータのバランスが良く浮遊タイプの為、安定しやすくも浮遊特有の伸びしろもある。",
        en: "Donkey Kong has high power, control, and speed; his weaknesses are difficulty smashing high floaters and a large hurtbox. Rosetta is a floating type with balanced parameters, offering stable performance plus the growth potential unique to floating characters.",
      },
    },
    rackets: {
      picks: ["ダッシュラケット", "メタルラケット"],
      reason: {
        ja: "ダッシュは殆どの相手に対応できる汎用性があり、メタルは妨害を避けつつショット威力が強化されるので主導権を取りやすい。",
        en: "Dash is highly versatile against most opponents, and Metal boosts shot power while avoiding disruption effects, making it easier to take initiative.",
      },
    },
  },
  {
    purpose: "growth",
    characters: {
      picks: ["ゲッソー", "ノコノコ", "クリボー"],
      reason: {
        ja: "ゲッソーは独特のスライスによるミスの誘発しやすさ、ノコノコはスピードが良くドロップチャージも速いなどの利点。クリボーはスピードとコントロールのバランスが良く、スライドフットワークや飛びつきの後隙が少ない為粘り力が強い。どのキャラもポテンシャルはあるが引き出すのが難しいのが欠点。",
        en: "Blooper can force errors with its unique slice, Koopa Troopa benefits from strong speed and fast drop-charge, and Goomba has balanced speed/control with strong persistence thanks to low recovery on slide footwork and dives. All three have high potential, but the drawback is that drawing it out is difficult.",
      },
    },
    rackets: {
      picks: ["マジックラケット", "マメキノコラケット", "ドッスンラケット"],
      reason: {
        ja: "妨害系は設置する必要がある為、フィーバーショット時に点数を取るのと設置をする優先順位の理解が必要。使いこなせるとポイントを連取出来る強力さがある。カウンターされるリスクが高い為、初心者には不向き。",
        en: "Disruption rackets require setup, so you need to understand when to prioritize scoring with Fever Shot versus placing effects. Mastering them can snowball points, but their high counter risk makes them less suitable for beginners.",
      },
    },
  },
];


export const officialTierSections = [
  {
    key: "feverSingles",
    sections: [
      {
        key: "currentMetaStrongCharacters",
        type: "characters",
        note: {
          ja: "ゲーム発売からまだ期間が経っていない為、B/C/Dランクや未掲載キャラは現時点ではまだ判断がついていません。",
          en: "Since not much time has passed since launch, characters in B/C/D and any unlisted characters are still too early to judge at this point.",
        },
        rows: [
          {
            label: "S",
            picks: ["ドンキーコング"],
            reason: {
              ja: "ドンキーは他に並べそうなキャラがいない為",
              en: "Donkey Kong is placed alone because there are no other characters that currently match his overall level.",
            },
          },
          {
            label: "A",
            picks: ["ロゼッタ", "ノコノコ", "ゲッソー", "ボスパックン", "クリボー"],
            reason: {
              ja: "ロゼッタは安定したパラメータやロブの強さにより、立ち回りを安定させやすいことを評価。浮遊なのも考慮。\n\nゲッソーはパワースライスによる弾道の高さや曲がりやすい軌道によるミスを誘発しやすい。\n扱いが難しく、対策も追いついていない傾向のキャラではあるので今後変動する可能性あり。\n\nノコノコはスピードが早くスライドフットワークの後隙も少ない。ドロップのチャージが速い点やアングルもある程度つけれる事を評価。\n\nクリボーもノコノコと似た理由で評価。スピードが僅かに遅くドロップチャージ速度も普通だが、コントロールは少し上なのが利点。\n\nボスパックンは捕球範囲が広く、コントロールもあるので、強いフラットを活かしやすい。スピードもそれなりにあるので性能が全体的に高め。\nフィーバーラケット無しだとそれらの強みがさらに出やすい分人口が増加傾向にある。",
              en: "Rosetta is rated highly for her stable parameters and strong lobs, which make neutral play more consistent. Her floating trait is also a plus.\n\nBlooper can induce mistakes with the high and curving trajectory of its power slice. It is difficult to use and counterplay is still developing, so this placement may change over time.\n\nKoopa Troopa is valued for high speed, low recovery after slide footwork, fast drop-shot charge, and decent angle creation.\n\nGoomba is rated for similar reasons to Koopa Troopa. It is slightly slower and has normal drop-charge speed, but has slightly better control.\n\nPetey Piranha has wide catch range and decent control, which helps capitalize on strong flat shots. With reasonable speed as well, its overall performance is high. Its player count is increasing, especially in rules without Fever Rackets where those strengths stand out even more.",
            },
          },
        ],
      },
      {
        key: "currentMetaStrongRackets",
        type: "rackets",
        note: {
          ja: "ゲーム発売からまだ期間が経っていない為、B/C/Dランクや未掲載ラケットは現時点ではまだ判断がついていません。",
          en: "Since not much time has passed since launch, rackets in B/C/D and any unlisted rackets are still too early to judge at this point.",
        },
        rows: [
          {
            label: "S",
            picks: ["ダッシュラケット", "メタルラケット"],
            reason: {
              ja: "ダッシュは殆どの相手に対応出来る為。\n\nメタルは無敵かつショットの威力が上がる為、妨害を防ぎながらポイント取得も狙いやすい。\nただし、ダッシュには強くなったショットを返されやすく相性が悪い。",
              en: "Dash handles most opponents, making it broadly reliable.\n\nMetal grants invulnerability and boosts shot power, so it is easier to block disruption while still aiming to score points.\nHowever, powered-up shots are easier for Dash to return, so this matchup is unfavorable.",
            },
          },
          {
            label: "A",
            picks: ["マジックラケット", "マメキノコラケット"],
            reason: {
              ja: "マジックは杖から魔法が出る為、ダッシュの後隙を取りやすく、ダッシュ対策として強い。\n他のラケット相手でも当てさえすればポイントが確定するシーンがあり、逆転性も高い。\nその分カウンターされた際の影響力も大きいので注意。\n\nマメキノコに当たると補給範囲が小さく、大きく吹き飛ばされやすくなる為、ダッシュ相手でも有効。\n効果が切れるまで連続ポイントできることも珍しくない為、爆発力が高め。\nこちらもカウンターには十分注意すること。",
              en: "Magic releases spells from the wand, making it easier to punish Dash recovery and serving as a strong anti-Dash option.\nEven against other rackets, landing it can secure points in key situations, giving it high comeback potential.\nThat said, getting countered can be very costly.\n\nMini Mushroom shrinks the opponent's coverage and makes knockback easier, so it remains effective even into Dash.\nIt can often chain multiple points before the effect expires, giving it strong burst potential.\nBe very careful of counters here as well.",
            },
          },
        ],
      },
    ],
  },
  {
    key: "noFeverSingles",
    sections: [
      {
        key: "currentMetaStrongCharacters",
        type: "characters",
        note: {
          ja: "ゲーム発売からまだ期間が経っていない為、B/C/Dランクや未掲載キャラは現時点ではまだ判断がついていません。",
          en: "Since not much time has passed since launch, characters in B/C/D and any unlisted characters are still too early to judge at this point.",
        },
        rows: [
          {
            label: "S",
            picks: ["ドンキーコング", "ボスパックン"],
            reason: {
              ja: "ドンキーコングはフィーバーありとほぼ同様の理由でS。\n\nボスパックンはドンキーより練度が必要だが身長の高さがある分、ロブやトップスピンなど高さがある球の処理をしやすい。\n組み合わせや状況によってはドンキー以上の強みが出る場面がある。",
              en: "Donkey Kong remains A-tier for almost the same reasons as in Fever-on singles.\n\nPetey Piranha requires more practice than Donkey Kong, but its height makes it easier to handle high-bouncing balls such as lobs and topspin shots.\nDepending on the matchup and situation, there are moments where it can show strengths that exceed Donkey Kong's.",
            },
          },
          {
            label: "A",
            picks: ["ロゼッタ", "ノコノコ", "ゲッソー", "デイジー", "マリオ", "クリボー"],
            reason: {
              ja: "ロゼッタ、ノコノコ、ゲッソーはフィーバーありと同様の理由でA。\nこの3キャラは同じAランクでも若干上の方にいる印象。\n\nデイジーはトップスピンの球速が速く、コントロールもそれなり。スピードも最低限はあるので決め球が多いのが魅力。\n\nマリオは必要十分のパワーやコントロール、特に小回りが効くスピードの良さを活かしやすい。\n\nクリボーはフィーバーありと同様の理由だが、フィーバーなしだとスライドフットワークの隙の無さによる粘り強さも活かしやすくなる。",
              en: "Rosalina, Koopa Troopa, and Blooper stay in B-tier for the same reasons as in Fever-on singles.\nAmong the B-tier group, these three feel slightly closer to the top.\n\nDaisy stands out for her fast topspin ball speed, decent control, and enough speed to create many reliable finishing patterns.\n\nMario is easy to value because he has sufficient power and control across the board, especially with speed that allows tight movement and quick adjustments.\n\nGoomba remains B-tier for similar reasons as in Fever-on singles, but in no-Fever rules its tenacity also stands out more thanks to the low vulnerability on its slide footwork.",
            },
          },
        ],
      },
    ],
  },
];


export const courts = [
  { name: { ja: "スタジアム グラス", en: "Stadium Court (Grass)" }, ballSpeed: 4, bounce: 1, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "手入れのゆきとどいた芝はたまあしが速い。判断力が大事な本格的なスタジアムコート", en: "Well-manicured turf that increases ball speed. Keep your eyes sharp on this court." }, image: "assets/coat_icons/stadium_grass.webp" },
  { name: { ja: "スタジアム ハード", en: "Stadium Court (Hard)" }, ballSpeed: 2, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "ラバーにおおわれたバランスのよいはね具合。実力勝負にむいた本格的なスタジアムコート", en: "Rubber provides a balanced bounce. Good for real test of skill!" }, image: "assets/coat_icons/stadium_hard.webp" },
  { name: { ja: "スタジアム クレイ", en: "Stadium Court (Clay)" }, ballSpeed: 1, bounce: 3, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "たまあしがおそくボールがよくはねる。駆け引きにむいた本格的なスタジアムコート", en: "Clay slows the ball down but increases bounce. Requires some strategic thinking." }, image: "assets/coat_icons/stadium_clay.webp" },
  { name: { ja: "アカデミー ウッド", en: "Academy Court (Wood)" }, ballSpeed: 3, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "自然なたまあしとバランスのよいバウンドで試合に集中できる木でつくられたコート", en: "Soft wood offers decent speed and balanced bounce. Demands focus." }, image: "assets/coat_icons/academy_wood.webp" },
  { name: { ja: "アカデミー ブロック", en: "Academy Court (Brick)" }, ballSpeed: 3, bounce: 4, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "かたい石の床でボールが高くはねる。トップスピンでエースをねらおう", en: "Hard brick provides high bounce. Use topspin to try for an ace!" }, image: "assets/coat_icons/court_academy_bricks.webp" },
  { name: { ja: "アカデミー カーペット", en: "Academy Court (Carpet)" }, ballSpeed: 3, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "カーペットで作られた自然なたまあしとバランスのよいバウンドでプレイしやすいコート", en: "Soft carpeting provides solid speed and balanced bounce." }, image: "assets/coat_icons/academy_carpet.webp" },
  { name: { ja: "アカデミー キノコ", en: "Academy Court (Mushroom)" }, ballSpeed: 2, bounce: 5, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "キノコの弾力でボールのはね具合は規格外!高く上がったボールはフラットで打ち込もう", en: "Springy mushroom gives the ball an erratic bounce. Counter the bounce with flat shots." }, image: "assets/coat_icons/academy_kinoko.webp" },
  { name: { ja: "アカデミー サンド", en: "Academy Court (Sand)" }, ballSpeed: 1, bounce: 1, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "砂のコートでたまあしがおそく、バウンドもしない。積極的にドロップショットで決めにいこう", en: "Sandy terrain not good for speed or bounce. Concentrate on drop shots to score!" }, image: "assets/coat_icons/court_academy_sand.webp" },
  { name: { ja: "アカデミー アイス", en: "Academy Court (Ice)" }, ballSpeed: 3, bounce: 4, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "かたい氷で作られたコート。足元が少しすべるので移動の時は注意しよう", en: "Hard and slick ice makes it difficult to move around. Try not to slip." }, image: "assets/coat_icons/academy_ice.webp" },
  { name: { ja: "飛行船コート", en: "Airship Court" }, ballSpeed: 3, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "キノコ王国の飛行船の甲板に作られたコート。空の旅を楽しみながらテニスもできる", en: "A court that takes place on an airship." }, image: "assets/coat_icons/airship_court.webp" },
  { name: { ja: "フォレストコート", en: "Forest Court" }, ballSpeed: 1, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "森の中に作られたコート。やわらかい地面がたまあしをおそくする", en: "Soft forest floor reduces the ball's speed." }, image: "assets/coat_icons/forest_court.webp" },
  { name: { ja: "ワルイージピンボール", en: "Waluigi's Pinball Arcade" }, ballSpeed: 3, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "ピンボールをイメージして作られたコート。ド派手なライトに気分も高まる?", en: "Inspired by pinball arcades, complete with neon lights and tile floors!" }, image: "assets/coat_icons/waluigi_pinball.webp" },
  { name: { ja: "ラケットファクトリー", en: "Racket Factory" }, ballSpeed: 3, bounce: 4, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "ラケット工場内に作られたコート。これから使うラケットもここで作られたのかも", en: "Built inside a factory that might've made your racket!" }, image: "assets/coat_icons/racket_factory.webp" },
  { name: { ja: "ワンダーコート", en: "Wonder Court" }, ballSpeed: 4, bounce: 2, description: { ja: "（個人的な説明欄は後日更新予定）", en: "(Personal notes will be added later.)" }, text: { ja: "『スーパーマリオブラザーズ ワンダー』より。フラワー王国に作られた不思議なコート", en: "Designed in the Flower Kingdom from Super Mario Bros. Wonder." }, image: "assets/coat_icons/wonder_court.webp" },
];


// TODO: Replace the sample YouTube IDs below with the actual beginner guide videos.
export const beginnerVideos = [
  {
    id: "basics-movement-positioning",
    category: "basics",
    title: { ja: "基本的な動き 1", en: "Fundamentals 1" },
    summary: {
      ja: "基本的な動きの導入として確認したい動画です。",
      en: "A starter video for core movement fundamentals.",
    },
    youtubeId: "Xx18P7IXRdw",
    priority: 1,
  },
  {
    id: "basics-shot-buttons",
    category: "basics",
    title: { ja: "基本的な動き 2", en: "Fundamentals 2" },
    summary: {
      ja: "基本的な動きの流れを続けて確認するための動画です。",
      en: "A follow-up video for core movement fundamentals.",
    },
    youtubeId: "lsA7tc-Kghs",
    priority: 2,
  },
  {
    id: "basics-weak-strong-shots",
    category: "basics",
    title: { ja: "基本的な動き 3", en: "Fundamentals 3" },
    summary: {
      ja: "基本的な動きを段階的に見直すための動画です。",
      en: "A progression video for reviewing the basics.",
    },
    youtubeId: "LJjrToCb5zE",
    priority: 3,
  },
  {
    id: "basics-serve-return",
    category: "basics",
    title: { ja: "基本的な動き 4", en: "Fundamentals 4" },
    summary: {
      ja: "基本的な動きの理解を深めるための補足動画です。",
      en: "An additional video to reinforce movement basics.",
    },
    youtubeId: "SbIyeWvssvM",
    priority: 4,
  },
  {
    id: "basics-rally-control",
    category: "basics",
    title: { ja: "基本的な動き 5", en: "Fundamentals 5" },
    summary: {
      ja: "基本的な動きカテゴリの仕上げとして見ておきたい動画です。",
      en: "A final fundamentals video for this category.",
    },
    youtubeId: "vPcg0BZUamo",
    priority: 5,
  },
  {
    id: "fever-when-to-use",
    category: "fever-shot",
    title: { ja: "フィーバーショット", en: "Fever Shot" },
    summary: {
      ja: "フィーバーショットの基本をまとめて確認するための動画です。",
      en: "A video covering the basics of Fever Shots.",
    },
    youtubeId: "EloV8zaN3VI",
    priority: 1,
  },
  {
    id: "advanced-score-patterns",
    category: "advanced",
    title: { ja: "応用編", en: "Advanced" },
    summary: {
      ja: "基礎の次に見たい応用内容をまとめた動画です。",
      en: "An advanced follow-up video after the basics.",
    },
    youtubeId: "BM6YcvMlL4Y",
    priority: 1,
  },
];

export const tips = [
  {
    title: { ja: "フィーバーゲージについて", en: "About the Fever Gauge" },
    category: "仕様",
    verification: "検証済",
    content: { ja: "サーブ開始直後から自動的に溜まっていく。最大値は2本分。1本目のフィーバーゲージは約26秒、1本目から2本目は約30秒で溜まる。", en: "It automatically starts filling right after the serve begins. The maximum is 2 bars. The first Fever bar fills in about 26 seconds, and the second fills in about 30 seconds after the first." },
  },
  {
    title: { ja: "フィーバーゲージの溜まる速度", en: "Movement speed drops during long rallies" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "2本目のゲージを溜めている最中の方が1本目に比べて僅かに溜まる速度が遅い為、先にフィーバーショットをした方がより効率的にゲージを溜められる", en: "The second bar fills slightly more slowly than the first. Because of that, using a Fever Shot earlier lets you charge the gauge more efficiently overall." },
  },
  {
    title: { ja: "浮遊キャラについて", en: "Floating character list" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "ロゼッタ / パタパタ / テレサ / チコ / カメックの5キャラは、アイス/ドロドロ/インクラケットの床効果を受けない。床上でのダメージは通常通り受け、ボールも床の影響を受ける。", en: "The five floating characters (Rosetta, Koopa Paratroopa, Boo, Luma, and Kamek) ignore floor effects from the Ice / Muddy / Ink rackets. They still take normal damage while standing on those floors." },
  },
    {
    title: { ja: "フィーバーショットでの返球位置", en: "Return position during a Fever Shot" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "フィーバーショットでの返球位置は、最短距離ではなくボールに回り込むような挙動で行う。その為、ボールの角度が鋭い場合や弾速が速いと返球出来ない可能性が高くなる", en: "During a Fever Shot, the return movement tends to curve around the ball instead of taking the shortest path. Because of this, returns are more likely to fail when the shot angle is sharp or the ball speed is very high." },
  },
  {
    title: { ja: "ラリーが続くと移動速度が低下", en: "Movement speed drops during long rallies" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "大体20ラリーくらいすると遅くなり、その後は10ラリー程度毎に加速度的に減速、恐らく90ラリーくらいで限界値になる", en: "Movement starts slowing down at around 20 rallies, then decreases more rapidly about every 10 rallies after that. It likely reaches its lower limit around 90 rallies." },
  },
  {
    title: { ja: "ビリキュー対策", en: "Countering Spike Balls" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "メタルやスターなどの無敵状態であれば、ビリキュー本体をキャラが通過した後にショットを打つかポイントが入ると消滅する", en: "If you are invincible with effects such as Metal or Star, the Spike Ball disappears once your character passes through the Spike Ball itself and then either hits a shot or the point ends." },
  },
  {
    title: { ja: "LATE条件", en: "LATE trigger conditions" },
    category: "仕様",
    verification: "検証済",
    content: { ja: "身体正面(ボディショット)判定でボールに触れると発生する。ただし相手の球速が速いと発生せず、サービスライン付近だとほぼ失敗する", en: "It triggers when the ball contacts the character's front-facing body-shot area. However, it will not trigger if the opponent's shot is too fast, and it almost always fails near the service line." },
  },
  {
    title: { ja: "2ボタン強打", en: "2-button power shot" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "1ボタンでのドロップ→トップ、または1ボタンでのロブ→スライスで、それぞれ強打が打てる。スマッシュへの咄嗟の反撃やダブルスでの前衛時に特に有効", en: "You can produce a power shot by inputting a 1-button drop followed by topspin, or a 1-button lob followed by slice. This is especially useful for quick counterattacks against smashes and when playing at the net in doubles." },
  },
  {
    title: { ja: "ダッシュラケットの後隙", en: "Dash racket recovery" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "ダッシュ後の後隙は各キャラによって異なる。恐らくスライドフットワークの後隙に依存していると思われる", en: "Recovery after using Dash differs by character. It is likely tied to each character's recovery after slide footwork." },
  },
  {
    title: { ja: "浮遊タイプへの妨害床効果", en: "Interference floor effects on floating characters" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "床上でスライドフットワークか飛びつきをすると妨害効果を受ける。逆に床の範囲外から床の範囲内に飛びついた場合は効果を受けない。上記はダッシュラケットの効果中も同様(ドロドロラケットの効果でのみ確認)", en: "Floating characters still suffer interference floor effects if they use slide footwork or dive while already on the floor area. By contrast, if they dive into the floor area from outside it, the effect does not apply. The same behavior also occurs during Dash racket movement, though this has only been confirmed with the Muddy racket effect." },
  },
  {
    title: { ja: "フラットショットへの返球", en: "Returning a flat shot" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "遊び方に記載はないが、フラットに対してフラットを返球すると弾速が速くなる", en: "Not listed in How to Play, but returning a flat shot with a flat shot increases ball speed."},
  },
  {
    title: { ja: "スマッシュへの返球", en: "Smash return with a topspin volley" },
    category: "実践知識",
    verification: "検証済",
    content: { ja: "スマッシュに対して、トップボレーを行うと弾速が上がったボレーが出来る。状況によっては決め球になるので、覚えておくと有用", en: "Returning a smash with a topspin volley produces a faster volley. In the right situation it can be a put-away shot, so it is useful to remember."},
  },];

  /** @type {{ date: { ja: string; en: string }; items: { ja: string; en: string }[] }[]} */
  export const changelog = [
    {
      date: { ja: "2025-02-07", en: "2025-02-07" },
      items: [
        { ja: "ロゼッタ/ベビィマリオ/ヘイホーのパラメータやテキストを修正\n", en: "Adjusted Rosetta/Baby Mario/Shy Guy parameters and text.\n" },
        { ja: "スマホとタブレットで、検索画面が崩れる不具合を修正\n", en: "Fixed a layout issue on the search screen on smartphones and tablets.\n" },
        { ja: "スマホの検索画面で特定数以上候補がある場合、スクロールする必要があった仕様を撤廃。\nスクロール無しで全件確認出来るよう変更", en: "Removed the old mobile behavior that required scrolling when there were many search candidates.\nNow all candidates can be viewed without scrolling." },
      ],
    },
    {
      date: { ja: "2025-02-08", en: "2025-02-08" },
      items: [
        { ja: "ラケット一覧を更新(体験版時点で分かる範囲のみ)", en: "Updated the racket list (within what was confirmed in the demo build)." },
        { ja: "検索画面の処理高速化", en: "Improved search screen performance." },
        { ja: "ラケット一覧の誤記を修正", en: "Fixed typos in the racket list." },
        { ja: "各パラメータを確認しやすいように、スマホ版の「全項目を見る」の挙動変更。", en: "Adjusted the mobile 'Show all' behavior to make each parameter easier to check." },
      ],
    },
    {
      date: { ja: "2025-02-09", en: "2025-02-09" },
      items: [
          { ja: "PC版に各項目へジャンプ出来るヘッダーを実装", en: "Implemented a PC header that allows jumping to each section." },
          { ja: "言語切り替え機能を実装", en: "Implemented language switch to English." }
      ],
    },
    {
        date: { ja: "2025-02-10", en: "2025-02-10" },
        items: [
            { ja: "ラケット一覧に動画再生機能を実装", en: "Implemented 'Watch effect video' function for rackets." },
            { ja: "お気に入り機能を実装し、フィルタにも対応", en: "Implemented favorite feature with filter support." },
            { ja: "Tier表作成機能を実装", en: "Implemented tier list creation function." }
        ],
      },
      {
        date: { ja: "2025-02-11", en: "2025-02-11" },
        items: [
            { ja: "Tipsを実装", en: "Implemented Tips." },
            { ja: "Tier表のアイコンを入れ替え出来るよう修正", en: "Updated so icons in the Tier table can be swapped." }
        ],
      },
      {
        date: { ja: "2025-02-12", en: "2025-02-12" },
        items: [
            { ja: "ラケット一覧の効果大幅更新", en: "Major overhaul of racket effect descriptions in the racket list." },
        ],
      },
      {
        date: { ja: "2025-02-13", en: "2025-02-13" },
        items: [
            { ja: "コート一覧を実装", en: "Implemented the court list." },
            { ja: "特殊能力を更新", en: "Updated special abilities." },
            { ja: "Tipsを更新", en: "Updated Tips." }
        ],
      },
      {
        date: { ja: "2026-02-15", en: "2026-02-15" },
        items: [
            { ja: "Tier表にメモ欄追加", en: "Added a notes section to the tier list." },
            { ja: "次コート予測機能(β)を実装", en: "Implemented next-court prediction feature (beta)." }
        ],
      },
      {
        date: { ja: "2026-02-17", en: "2026-02-17" },
        items: [
            { ja: "Tierに、目的別おすすめ欄を追加", en: "Added a purpose-based recommendations section to the tier list." }
        ],
      },
      {
        date: { ja: "2026-03-07", en: "2026-03-07" },
        items: [
            { ja: "Tipsを追加(フラット返球・スマッシュ返球)", en: "Added Tips: returning flat shots and smash return with topspin volley." }
        ],
      },];
  
