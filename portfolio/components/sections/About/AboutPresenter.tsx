import styles from '@/styles/sections/About.module.css';

const SKILLS = [
  'LP制作',
  'コーポレートサイト',
  'レスポンシブ対応',
  'React開発',
  'TypeScript',
  'パフォーマンス改善',
];

export default function AboutPresenter() {
  return (
    <section id="about" className={`section sectionSoft ${styles.about}`}>
      <div className="inner">
        <div className="sectionHead reveal">
          <div className="sectionHead__kicker">
            <i>01</i>
            わたしについて
          </div>
          <span className="sectionHead__ghost">About</span>
        </div>

        <div className={styles.grid}>
          {/* Left */}
          <div className="reveal">
            <p className={styles.lead}>
              はじめまして。フロントエンドエンジニアの矢野（Yano Yuki）です。React・TypeScript・HTML/CSS を中心に、WebサイトやアプリのUI開発に携わってきました。
              「こんなサイトにしたい」というイメージをお持ちの方へ、ヒアリングから納品まで丁寧にサポートします。技術的なことはお任せください。
            </p>

            <div className={styles.skillsBlock}>
              <div className={styles.skillsLabel}>得意なこと</div>
              <div className={styles.tagList}>
                {SKILLS.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="reveal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <div className={styles.portrait}>
              <span className={styles.portraitPlaceholder}>profile photo</span>
            </div>
            <p className={styles.portraitCaption}>
              <b>矢野 祐希 / Yano Yuki</b><br />
              事業会社のフロントエンドエンジニア。個人・小規模事業主の方のWeb制作をお手伝いしています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
