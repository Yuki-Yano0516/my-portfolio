import styles from '@/styles/sections/MainVisual.module.css';

export default function MainVisualPresenter() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left */}
          <div className="reveal">
            <div className={styles.eyebrow}>
              <strong>FRONTEND ENGINEER</strong>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowAvail}>
                <span className={styles.eyebrowDot} />
                新規のご相談 受付中
              </span>
            </div>

            <h1 className={styles.headline}>
              伝わるサイトを、<br />
              ていねいに<em>作ります。</em>
            </h1>

            <p className={styles.sub}>
              React / TypeScript を扱う事業会社のフロントエンドエンジニアです。
              個人・小規模事業主の方のWeb制作を、設計から実装・公開まで一人で伴走します。
            </p>

            <div className={styles.cta}>
              <a href="#works" className="btn btnPrimary">
                実績を見る <span>→</span>
              </a>
              <a href="#contact" className="btn btnGhost">
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Right — Code card */}
          <div className={`${styles.codeCard} reveal`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
            <div className={styles.codeBar}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span className={styles.codeFileName}>Hero.tsx</span>
              <span className={styles.codeType}>TSX</span>
            </div>

            <pre className={styles.codeBody}>
              <span className={styles.codeLine}>
                <span className={styles.tokK}>import</span>
                {' '}
                <span className={styles.tokP}>{'{'}</span>
                {' '}
                <span className={styles.tokC}>Button</span>
                {' '}
                <span className={styles.tokP}>{'}'}</span>
                {' '}
                <span className={styles.tokK}>from</span>
                {' '}
                <span className={styles.tokS}>&quot;./ui&quot;</span>
                <span className={styles.tokP}>;</span>
              </span>
              <span className={styles.codeLine}>{' '}</span>
              <span className={styles.codeLine}>
                <span className={styles.tokCm}>{'// あなたのお店に、ちょうどいい一枚を。'}</span>
              </span>
              <span className={styles.codeLine}>
                <span className={styles.tokK}>export function</span>
                {' '}
                <span className={styles.tokC}>Hero</span>
                <span className={styles.tokP}>{'() {'}</span>
              </span>
              <span className={styles.codeLine}>
                {'  '}
                <span className={styles.tokK}>return</span>
                {' '}
                <span className={styles.tokP}>{'('}</span>
              </span>
              <span className={styles.codeLine}>
                {'    '}
                <span className={styles.tokP}>{'<'}</span>
                <span className={styles.tokT}>section</span>
                {' '}
                <span className={styles.tokA}>className</span>
                <span className={styles.tokP}>=</span>
                <span className={styles.tokS}>&quot;hero&quot;</span>
                <span className={styles.tokP}>{'>'}</span>
              </span>
              <span className={styles.codeLine}>
                {'      '}
                <span className={styles.tokP}>{'<'}</span>
                <span className={styles.tokT}>h1</span>
                <span className={styles.tokP}>{'>'}</span>
                伝わるサイトを、ていねいに。
                <span className={styles.tokP}>{'</'}</span>
                <span className={styles.tokT}>h1</span>
                <span className={styles.tokP}>{'>'}</span>
              </span>
              <span className={styles.codeLine}>
                {'      '}
                <span className={styles.tokP}>{'<'}</span>
                <span className={styles.tokC}>Button</span>
                <span className={styles.tokP}>{'>'}</span>
                ご相談はこちら →
                <span className={styles.tokP}>{'</'}</span>
                <span className={styles.tokC}>Button</span>
                <span className={styles.tokP}>{'>'}</span>
              </span>
              <span className={styles.codeLine}>
                {'    '}
                <span className={styles.tokP}>{'</'}section{'>'}</span>
              </span>
              <span className={styles.codeLine}>
                {'  '}
                <span className={styles.tokP}>{');'}</span>
              </span>
              <span className={styles.codeLine}>
                <span className={styles.tokP}>{'}'}</span>
              </span>
            </pre>

            <div className={styles.codeResult}>
              <span className={styles.renderTag}>RENDER →</span>
              <button type="button" className="btn btnPrimary" style={{ fontSize: '14px', padding: '11px 20px' }}>
                ご相談はこちら →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
