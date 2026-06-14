import styles from '@/styles/sections/Skills.module.css';

const STACK = [
  'HTML / CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git / GitHub',
  'Figma',
  'WordPress',
];

const JOBS = [
  'LP制作',
  'コーポレートサイト',
  'Webアプリ開発',
  '既存サイトの修正・改善',
];

export default function SkillsPresenter() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="inner">
        <div className="sectionHead reveal">
          <div className="sectionHead__kicker">
            <i>04</i>
            技術と対応範囲
          </div>
          <span className="sectionHead__ghost">Skills</span>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.col} reveal`} data-d="1">
            <h3>Tech Stack</h3>
            <p>技術スタック</p>
            <div className={styles.stack}>
              {STACK.map((s) => (
                <span key={s} className={styles.chip}>
                  <span className={styles.chipDot} />
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className={`${styles.col} ${styles.jobs} reveal`} style={{ '--delay': '0.1s' } as React.CSSProperties} data-d="2">
            <h3>What I can do</h3>
            <p>対応できる仕事</p>
            <div className={styles.jobList}>
              {JOBS.map((j) => (
                <div key={j} className={styles.job}>
                  <span className={styles.tick}>✓</span>
                  {j}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
