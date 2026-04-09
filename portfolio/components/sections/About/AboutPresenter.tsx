import styles from '@/styles/sections/About.module.css';

type Skill = {
  label: string;
  items: string[];
};

type Stat = {
  num: string;
  label: string;
};

type Props = {
  skills: Skill[];
  stats: Stat[];
};

export default function AboutPresenter({ skills, stats }: Props) {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="inner">
        <div className="sectionLabel reveal">About</div>

        <div className={styles.grid}>
          {/* Left */}
          <div>
            <h2 className={`${styles.heading} reveal`}>
              Code with<br />
              <em>intention.</em>
            </h2>

            <p
              className={`${styles.body} reveal`}
              style={{ '--delay': '0.1s' } as React.CSSProperties}
            >
              フロントエンドエンジニアとして5年以上の経験を持ち、デザインと実装の両側から丁寧にプロダクトをつくります。
            </p>
            <p
              className={`${styles.body} reveal`}
              style={{ '--delay': '0.15s' } as React.CSSProperties}
            >
              スタートアップから中規模プロジェクトまで幅広く対応。UI/UXの品質にこだわり、パフォーマンスとアクセシビリティを両立したサイトを届けることを信条としています。
            </p>

            <div
              className={`${styles.divider} reveal`}
              style={{ '--delay': '0.2s' } as React.CSSProperties}
            />

            <div
              className={`${styles.statRow} reveal`}
              style={{ '--delay': '0.25s' } as React.CSSProperties}
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div className={styles.statNum}>{num}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="reveal"
            style={{ '--delay': '0.1s' } as React.CSSProperties}
          >
            {skills.map(({ label, items }) => (
              <div key={label} className={styles.skillGroup}>
                <div className={styles.skillGroupLabel}>{label}</div>
                <div className={styles.skillList}>
                  {items.map((item) => (
                    <span key={item} className={styles.skillPill}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
