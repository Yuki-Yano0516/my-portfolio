import styles from '@/styles/sections/MainVisual.module.css';

export default function MainVisualPresenter() {
  return (
    <section id="mv" className={styles.mv}>
      <div className={styles.bgText} aria-hidden="true">Frontend.</div>

      <div className={styles.inner}>
        <div className={`${styles.eyebrow} reveal`}>
          <span className={styles.eyebrowDot} />
          Frontend Engineer &middot; Freelance
        </div>

        <h1 className={`${styles.headline} reveal`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
          Crafting<br />
          digital<br />
          <em>experiences.</em>
        </h1>

        <p className={`${styles.sub} reveal`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
          コードとデザインの境界に立ち、<br />
          ユーザーの体験を丁寧につくります。
        </p>

        <a
          href="#works"
          className={`${styles.cta} reveal`}
          style={{ '--delay': '0.3s' } as React.CSSProperties}
        >
          View Works <span className={styles.ctaArrow}>→</span>
        </a>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}
