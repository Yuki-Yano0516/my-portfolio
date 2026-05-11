export default function Page() {
  const menuItems = [
    {
      no: "01",
      name: "Single Origin Drip",
      nameJp: "シングルオリジン ドリップ",
      price: "¥650",
      tag: "Hot / Iced",
      desc: "農園・品種を明記した、その日いちばんのコーヒー。香り・酸味・甘みのバランスを豊かに。",
      img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
      reverse: false,
    },
    {
      no: "02",
      name: "Café Latte",
      nameJp: "カフェラテ",
      price: "¥720",
      tag: "Hot / Iced",
      desc: "濃厚なエスプレッソに、マイクロフォームのスチームミルクを丁寧に注ぎ込みました。",
      img: "https://images.unsplash.com/photo-1563090308-5a7889e40542?auto=format&fit=crop&w=900&q=85",
      reverse: true,
    },
    {
      no: "03",
      name: "Cold Brew",
      nameJp: "コールドブリュー",
      price: "¥780",
      tag: "Iced Only",
      desc: "14時間かけてじっくり抽出。雑味のない、なめらかでクリーンな味わい。夏季限定。",
      img: "https://images.unsplash.com/photo-1626436273416-863b8aa237cf?auto=format&fit=crop&w=900&q=85",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf6ef] text-[#2c1f12]">

      {/* Header — always dark translucent */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0802]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-serif text-base font-light tracking-[0.45em] text-[#faf6ef] uppercase">Koke</span>
          <nav className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.25em] text-[#c9b99a] uppercase">
            <a href="#concept" className="hover:text-white transition-colors">Concept</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#origin" className="hover:text-white transition-colors">Origin</a>
            <a href="#story" className="hover:text-white transition-colors">Story</a>
            <a href="#workshop" className="hover:text-white transition-colors">Workshop</a>
            <a href="#access" className="hover:text-white transition-colors">Access</a>
          </nav>
          <a href="#access" className="text-[10px] tracking-[0.2em] border border-[#c9a882]/60 px-5 py-2.5 uppercase text-[#c9a882] hover:bg-[#c9a882] hover:text-[#0d0802] transition-all duration-300">
            Find Us
          </a>
        </div>
      </header>

      {/* Hero — full-screen photo MV */}
      <section className="relative min-h-dvh flex flex-col justify-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1800&q=85"
          alt="KOKEカフェ店内の雰囲気"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0802] via-[#0d0802]/55 to-[#0d0802]/25" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pb-20 pt-32">
          <p className="text-[10px] tracking-[0.55em] text-[#c9a882] mb-10 uppercase">
            Specialty Coffee — Tokyo, Daikanyama
          </p>
          <h1 className="font-serif font-light text-[clamp(5rem,14vw,11rem)] leading-[0.85] tracking-tight text-[#faf6ef] mb-14">
            Slow<br />
            <span className="italic text-[#c9a882]">down.</span>
          </h1>
          <div className="flex items-end justify-between flex-wrap gap-8 border-t border-[#faf6ef]/15 pt-8">
            <p className="text-sm text-[#c9b99a] max-w-xs leading-[1.85] font-light">
              世界中の農園から厳選したスペシャルティコーヒー豆を、
              バリスタが一杯ずつ丁寧に抽出。
            </p>
            <a href="#menu" className="text-[10px] tracking-[0.35em] uppercase border-b border-[#c9a882] pb-1 text-[#c9a882] hover:text-[#faf6ef] hover:border-[#faf6ef] transition-colors shrink-0">
              Explore Menu →
            </a>
          </div>
        </div>
        <div className="absolute bottom-20 right-8 hidden lg:block">
          <p className="text-[9px] tracking-[0.6em] text-[#8b6f47] uppercase rotate-90 origin-bottom-right whitespace-nowrap">
            Est. 2018
          </p>
        </div>
      </section>

      {/* Concept — full-bleed split screen */}
      <section id="concept">
        <div className="flex flex-col md:grid md:grid-cols-[52%_48%]">
          <div className="relative min-h-[60vw] md:min-h-[85vh]">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85"
              alt="ラテアートを丁寧に仕上げるバリスタの手"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-7 right-7 bg-[#c9a882] px-5 py-4 text-[#0d0802]">
              <p className="font-serif text-3xl font-light leading-none">14<span className="text-lg">h</span></p>
              <p className="text-[9px] tracking-[0.3em] uppercase mt-1.5">Cold Brew</p>
            </div>
          </div>
          <div className="bg-[#faf6ef] px-10 md:px-16 py-20 md:py-0 flex flex-col justify-center">
            <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-7 uppercase">Our Concept</p>
            <h2 className="font-serif font-light text-[clamp(2.4rem,3.5vw,3.5rem)] leading-[1.1] mb-9">
              一杯に込めた、<br />農園からの物語。
            </h2>
            <p className="text-[#6b4f35] leading-[1.95] mb-5 text-sm">
              KOKEは「苔」のように、静かで確かな存在でありたいという思いから生まれました。
              派手さはないけれど、一口飲めばその品質がわかる。
            </p>
            <p className="text-[#6b4f35] leading-[1.95] mb-12 text-sm">
              エチオピア・コロンビア・グアテマラなど、各産地の農家さんと直接契約。
              フレッシュな豆を毎週仕入れ、その日の状態で焙煎度を微調整しています。
            </p>
            <div className="flex gap-10 border-t border-[#e8ddd0] pt-8">
              {["Ethiopia", "Colombia", "Guatemala"].map((origin) => (
                <div key={origin}>
                  <div className="w-4 h-px bg-[#c9a882] mb-2.5" />
                  <p className="text-[9px] tracking-[0.35em] text-[#8b6f47] uppercase">{origin}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu — editorial alternating layout */}
      <section id="menu" className="bg-[#100a02] text-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-8 pt-24 pb-0">
          <div className="flex items-baseline justify-between mb-0 pb-10 border-b border-[#1e1008]">
            <div>
              <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-5 uppercase">Menu</p>
              <h2 className="font-serif font-light text-[clamp(2.4rem,5vw,4rem)]">おすすめメニュー</h2>
            </div>
            <p className="text-[10px] text-[#3a2a1a] hidden md:block">Tax included</p>
          </div>
        </div>

        {menuItems.map((item) => (
          <div
            key={item.no}
            className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} border-t border-[#1a0e05]`}
          >
            <div className="md:w-1/2 relative overflow-hidden group" style={{ minHeight: "clamp(240px, 40vw, 520px)" }}>
              <img
                src={item.img}
                alt={item.nameJp}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-14 bg-[#100a02]">
              <p className="font-serif text-[clamp(4rem,8vw,7rem)] font-light text-[#1a0e05] leading-none mb-8 select-none">
                {item.no}
              </p>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-2xl font-light">{item.name}</h3>
                <span className="font-serif text-xl text-[#c9a882] ml-4 shrink-0">{item.price}</span>
              </div>
              <p className="text-[10px] text-[#4a3020] mb-7 tracking-wider">{item.nameJp}</p>
              <p className="text-sm text-[#9a8070] leading-[1.9]">{item.desc}</p>
              <div className="mt-9 pt-6 border-t border-[#1e1008]">
                <p className="text-[9px] tracking-[0.4em] text-[#4a3020] uppercase">{item.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Full Menu List */}
      <section className="bg-[#faf6ef] py-28 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-4 uppercase">Full Menu</p>
          <h2 className="font-serif font-light text-[clamp(2.4rem,5vw,4rem)] mb-20">メニュー一覧</h2>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-20">

            {/* Drinks */}
            <div>
              <h3 className="font-serif text-2xl font-light pb-5 mb-12 border-b border-[#2c1f12]">Drinks</h3>
              {[
                {
                  category: "Hot Coffee",
                  items: [
                    { name: "シングルオリジン ドリップ", note: "本日の産地", price: "¥650" },
                    { name: "アメリカーノ", note: "", price: "¥550" },
                    { name: "カフェラテ", note: "", price: "¥720" },
                    { name: "カプチーノ", note: "", price: "¥720" },
                    { name: "フラットホワイト", note: "", price: "¥750" },
                  ],
                },
                {
                  category: "Iced Coffee",
                  items: [
                    { name: "コールドブリュー", note: "14時間抽出", price: "¥780" },
                    { name: "アイスラテ", note: "", price: "¥750" },
                    { name: "アイスアメリカーノ", note: "", price: "¥580" },
                  ],
                },
                {
                  category: "Non Coffee",
                  items: [
                    { name: "ほうじ茶ラテ", note: "Hot / Iced", price: "¥700" },
                    { name: "チャイラテ", note: "Hot / Iced", price: "¥720" },
                    { name: "オレンジジュース", note: "フレッシュ搾り", price: "¥550" },
                  ],
                },
              ].map((cat) => (
                <div key={cat.category} className="mb-10">
                  <p className="text-[9px] tracking-[0.45em] text-[#c9a882] uppercase mb-4">{cat.category}</p>
                  <ul className="divide-y divide-[#e8ddd0]">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between py-3.5 gap-4">
                        <div>
                          <span className="text-sm text-[#2c1f12]">{item.name}</span>
                          {item.note && <span className="text-[10px] text-[#8b6f47] ml-2">{item.note}</span>}
                        </div>
                        <span className="text-sm text-[#2c1f12] font-light shrink-0">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Food */}
            <div>
              <h3 className="font-serif text-2xl font-light pb-5 mb-12 border-b border-[#2c1f12]">Food</h3>
              {[
                {
                  category: "Morning — 〜11:00",
                  items: [
                    { name: "トースト & バター", note: "自家製ジャム添え", price: "¥450" },
                    { name: "クロワッサン", note: "バター香るさくさく生地", price: "¥380" },
                    { name: "エッグベネディクト", note: "土・日限定", price: "¥980" },
                  ],
                },
                {
                  category: "All Day",
                  items: [
                    { name: "アボカドトースト", note: "レモン・チリフレーク", price: "¥880" },
                    { name: "クラブハウスサンド", note: "自家製ピクルス添え", price: "¥950" },
                    { name: "本日のスープ", note: "自家製パン付き", price: "¥680" },
                  ],
                },
                {
                  category: "Sweets",
                  items: [
                    { name: "本日のケーキ", note: "内容は日替わり", price: "¥580〜" },
                    { name: "スコーン", note: "クロテッドクリーム添え", price: "¥380" },
                    { name: "ティラミス", note: "自家製エスプレッソ使用", price: "¥620" },
                    { name: "フロランタン", note: "アーモンド & キャラメル", price: "¥320" },
                  ],
                },
              ].map((cat) => (
                <div key={cat.category} className="mb-10">
                  <p className="text-[9px] tracking-[0.45em] text-[#c9a882] uppercase mb-4">{cat.category}</p>
                  <ul className="divide-y divide-[#e8ddd0]">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between py-3.5 gap-4">
                        <div>
                          <span className="text-sm text-[#2c1f12]">{item.name}</span>
                          {item.note && <span className="text-[10px] text-[#8b6f47] ml-2">{item.note}</span>}
                        </div>
                        <span className="text-sm text-[#2c1f12] font-light shrink-0">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-[9px] text-[#8b6f47] mt-4 leading-relaxed">
                ※ 表示価格は税込です。内容は仕入れ状況により変更になる場合があります。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery — full-width filmstrip */}
      <section className="grid grid-cols-2 md:grid-cols-4" style={{ height: "clamp(200px, 30vw, 380px)" }}>
        {[
          { src: "https://images.unsplash.com/photo-1545418314-7ce0b9b53901?auto=format&fit=crop&w=500&q=85", alt: "エスプレッソマシン" },
          { src: "https://images.unsplash.com/photo-1609050471053-8636409f9f5b?auto=format&fit=crop&w=500&q=85", alt: "スペシャルティコーヒー" },
          { src: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?auto=format&fit=crop&w=500&q=85", alt: "カフェラテ" },
          { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=85", alt: "コーヒービーンズ" },
        ].map((img) => (
          <div key={img.alt} className="relative overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0d0802]/0 group-hover:bg-[#0d0802]/20 transition-colors duration-500" />
          </div>
        ))}
      </section>

      {/* Origin — 産地ストーリー */}
      <section id="origin" className="bg-[#0d0802] text-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-8 pt-24 pb-16">
          <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-4 uppercase">Origin</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-serif font-light text-[clamp(2.4rem,5vw,4rem)]">産地ストーリー</h2>
            <p className="text-[#9a8070] text-sm max-w-sm leading-relaxed">
              KOKEは3つの産地の農家と直接契約。それぞれの土地が育む、固有の味わいをご紹介します。
            </p>
          </div>
        </div>

        {[
          {
            no: "01",
            country: "Ethiopia",
            countryJp: "エチオピア",
            region: "イルガチェフェ地区 · Waka Farm",
            altitude: "1,900m",
            process: "ナチュラル",
            flavor: ["ブルーベリー", "ジャスミン", "ハニー"],
            desc: "コーヒー発祥の地エチオピア、イルガチェフェ地区のWaka農園。標高1,900mの高地で収穫されたチェリーは、太陽の光をたっぷり浴びてナチュラル精製される。フルーティーで華やかな香りが特徴的。",
            img: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=900&q=85",
            reverse: false,
          },
          {
            no: "02",
            country: "Colombia",
            countryJp: "コロンビア",
            region: "ウイラ県 · Finca El Paraíso",
            altitude: "1,750m",
            process: "ウォッシュド",
            flavor: ["チョコレート", "キャラメル", "赤りんご"],
            desc: "ウイラ県の農家オスカル・ヒラルドが丁寧に管理するFinca El Paraíso。ウォッシュド精製により、クリーンでバランスの取れた味わいが引き出される。甘みと酸味の調和が絶妙な一杯。",
            img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=85",
            reverse: true,
          },
          {
            no: "03",
            country: "Guatemala",
            countryJp: "グアテマラ",
            region: "アンティグア · Finca San Diego",
            altitude: "1,600m",
            process: "ハニー",
            flavor: ["ダークチョコ", "ブラウンシュガー", "スパイス"],
            desc: "アンティグアの火山性土壌が育むFinca San Diegoのコーヒー。ハニー精製が持つ独特のとろみと甘みが、ダークチョコレートのような深みある風味を生む。コールドブリューにも最適な産地。",
            img: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=900&q=85",
            reverse: false,
          },
        ].map((origin) => (
          <div
            key={origin.no}
            className={`flex flex-col ${origin.reverse ? "md:flex-row-reverse" : "md:flex-row"} border-t border-[#1a0e05]`}
          >
            <div className="md:w-1/2 relative overflow-hidden" style={{ minHeight: "clamp(260px, 38vw, 480px)" }}>
              <img
                src={origin.img}
                alt={`${origin.countryJp}のコーヒー農園`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0d0802]/20" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-16">
              <p className="font-serif text-[clamp(3.5rem,7vw,6rem)] font-light text-[#1a0e05] leading-none mb-8 select-none">
                {origin.no}
              </p>
              <p className="text-[9px] tracking-[0.45em] text-[#c9a882] uppercase mb-3">{origin.region}</p>
              <h3 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light mb-1">{origin.country}</h3>
              <p className="text-sm text-[#4a3020] mb-10">{origin.countryJp}</p>
              <div className="flex gap-10 mb-10 border-t border-[#1a0e05] pt-7">
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-[#3a2010] uppercase mb-2">Altitude</p>
                  <p className="text-sm text-[#c9a882]">{origin.altitude}</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] text-[#3a2010] uppercase mb-2">Process</p>
                  <p className="text-sm text-[#c9a882]">{origin.process}</p>
                </div>
              </div>
              <p className="text-sm text-[#9a8070] leading-[1.9] mb-9 max-w-md">{origin.desc}</p>
              <div className="flex flex-wrap gap-2">
                {origin.flavor.map((f) => (
                  <span key={f} className="text-[10px] tracking-wider border border-[#2a1a0a] text-[#8b6f47] px-3 py-1.5">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Story — full-bleed split, Japanese barista */}
      <section id="story" className="bg-[#0d0802] text-[#faf6ef]">
        <div className="flex flex-col md:grid md:grid-cols-2" style={{ minHeight: "85vh" }}>
          <div className="flex flex-col justify-center px-10 md:px-16 py-24 order-2 md:order-1">
            <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-12 uppercase">Our Story</p>
            <h2 className="font-serif font-light text-[clamp(2.2rem,3.5vw,3.5rem)] leading-[1.15] mb-10">
              毎朝6時に始まる、<br />
              <span className="italic text-[#c9a882]">豆と対話する時間。</span>
            </h2>
            <p className="text-[#9a8070] leading-[1.95] mb-5 text-sm font-light max-w-md">
              「コーヒーは農業です」—バリスタ歴12年の田中は、よくそう話します。
              気温・湿度・豆の鮮度によって、毎日抽出の設定を手動で微調整する。
              その積み重ねが、KOKEの一杯をつくります。
            </p>
            <p className="text-[#9a8070] leading-[1.95] mb-14 text-sm font-light max-w-md">
              年に2度、産地に直接赴き、農家さんの仕事を肌で感じることが田中のルーティン。
              「顔の見える一杯を出したい」という想いが、このカフェの原点です。
            </p>
            <div className="flex gap-12 mb-14">
              {[
                { num: "12", unit: "Years" },
                { num: "3", unit: "Countries" },
                { num: "47", unit: "Farms" },
              ].map((s) => (
                <div key={s.unit}>
                  <p className="font-serif text-4xl font-light text-[#c9a882] leading-none">{s.num}</p>
                  <p className="text-[9px] tracking-[0.35em] text-[#4a3020] uppercase mt-2">{s.unit}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#1a1008] pt-8">
              <p className="font-serif text-lg font-light">田中 宏樹</p>
              <p className="text-[9px] tracking-[0.35em] text-[#c9a882] uppercase mt-1.5">Head Barista</p>
            </div>
          </div>
          <div className="relative min-h-[60vw] md:min-h-auto order-1 md:order-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1767974861631-f16f8dbe5306?auto=format&fit=crop&w=900&q=85"
              alt="Head Barista 田中宏樹 — コーヒーを丁寧に準備する様子"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0d0802]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section id="workshop" className="bg-[#faf6ef] py-28 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-4 uppercase">Workshop</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <h2 className="font-serif font-light text-[clamp(2.4rem,5vw,4rem)]">ワークショップ</h2>
            <p className="text-[#6b4f35] text-sm max-w-sm leading-relaxed">
              コーヒーをもっと深く知りたい方へ。バリスタが丁寧にガイドする少人数制のイベントを定期開催しています。
            </p>
          </div>

          <ul className="divide-y divide-[#e8ddd0] border-t border-[#e8ddd0]">
            {[
              {
                type: "Cupping",
                title: "産地飲み比べ カッピング",
                date: "2026.06.07",
                day: "土",
                time: "13:00 – 15:00",
                capacity: "定員 8名",
                price: "¥3,800",
                desc: "3産地（エチオピア・コロンビア・グアテマラ）を並べて飲み比べ。それぞれの個性と違いを、バリスタの解説と共に体験します。",
              },
              {
                type: "Brewing",
                title: "ハンドドリップ 入門クラス",
                date: "2026.06.14",
                day: "土",
                time: "10:00 – 12:00",
                capacity: "定員 6名",
                price: "¥4,500",
                desc: "ドリッパーの選び方から、湯温・蒸らし・注ぎ方まで。家でおいしいコーヒーを淹れるための基礎を丁寧にお伝えします。",
              },
              {
                type: "Latte Art",
                title: "ラテアート 体験クラス",
                date: "2026.06.21",
                day: "土",
                time: "15:00 – 17:00",
                capacity: "定員 4名",
                price: "¥5,500",
                desc: "スチームミルクの作り方から、ハートやリーフなどの基本パターンまで。Head Baristaによるきめ細やかな個別レッスン。",
              },
              {
                type: "Farm Story",
                title: "産地訪問 報告会",
                date: "2026.07.05",
                day: "日",
                time: "14:00 – 16:00",
                capacity: "定員 12名",
                price: "¥2,000",
                desc: "田中が今年訪れたエチオピアWaka農園の話を、現地の写真と共に。農業としてのコーヒーを知ることで、一杯の味わいが変わります。",
              },
            ].map((event) => (
              <li
                key={event.title}
                className="py-10 grid grid-cols-[64px_1fr_auto] md:grid-cols-[110px_1fr_auto] gap-6 md:gap-12 items-start"
              >
                <div className="shrink-0 pt-0.5">
                  <p className="font-serif text-3xl font-light text-[#2c1f12] leading-none">
                    {event.date.split(".")[2]}
                  </p>
                  <p className="text-[9px] tracking-[0.3em] text-[#8b6f47] mt-1.5">
                    {event.date.split(".").slice(0, 2).join(".")} {event.day}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.45em] text-[#c9a882] uppercase mb-2">{event.type}</p>
                  <h3 className="font-serif text-xl font-light mb-3">{event.title}</h3>
                  <p className="text-sm text-[#6b4f35] leading-relaxed mb-3 max-w-lg">{event.desc}</p>
                  <p className="text-[10px] text-[#9c8878]">{event.time} · {event.capacity}</p>
                </div>
                <div className="shrink-0 text-right pt-0.5">
                  <p className="text-sm text-[#c9a882]">{event.price}</p>
                  <p className="text-[9px] text-[#9c8878] mt-1.5">per person</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-[9px] text-[#8b6f47] mt-8 leading-relaxed">
            ※ ご予約はInstagram DM にてお申込みください。最新情報もInstagramにてお知らせします。
          </p>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-28 px-8 bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[9px] tracking-[0.55em] text-[#8b6f47] mb-4 uppercase">Access</p>
          <h2 className="font-serif font-light text-[clamp(2.4rem,5vw,4rem)] mb-20">お店の場所</h2>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <dl className="divide-y divide-[#e8ddd0]">
              {[
                { label: "Address", value: "東京都渋谷区代官山町12-3" },
                { label: "Hours", value: "月〜金　8:00 – 19:00\n土・日　9:00 – 18:00" },
                { label: "Access", value: "東急東横線 代官山駅より徒歩3分" },
                { label: "Closed", value: "不定休（Instagramにてお知らせ）" },
              ].map((item) => (
                <div key={item.label} className="py-6">
                  <dt className="text-[9px] tracking-[0.45em] text-[#8b6f47] uppercase mb-2">{item.label}</dt>
                  <dd className="text-sm text-[#2c1f12] leading-relaxed whitespace-pre-line">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="overflow-hidden" style={{ height: "420px" }}>
              <iframe
                src="https://maps.google.com/maps?q=代官山駅,渋谷区,東京都&z=16&output=embed&hl=ja"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="KOKEへのアクセス - 代官山"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0802] text-[#4a3020] py-10 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-serif text-sm font-light tracking-[0.45em] uppercase text-[#c9a882]">Koke Coffee</span>
          <p className="text-[10px] tracking-wider">© 2026 KOKE COFFEE.</p>
        </div>
      </footer>
    </div>
  );
}
