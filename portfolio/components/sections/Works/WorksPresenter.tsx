import Image from 'next/image';
import type { Work } from '@/types/microcms';
import styles from '@/styles/sections/Works.module.css';

type Props = {
  works: Work[];
};

export default function WorksPresenter({ works }: Props) {
  return (
    <section id="works" className={`section ${styles.works}`}>
      <div className="inner">
        <div className="sectionHead reveal">
          <div className="sectionHead__kicker">
            <i>02</i>
            これまでの制作・サンプル
          </div>
          <span className="sectionHead__ghost">Works</span>
        </div>

        <div className={styles.grid}>
          {works.map((work, i) => {
            const num = String(i + 1).padStart(2, '0');
            const delay = i > 0 ? `${i * 0.05}s` : '0s';
            const url = work.url ?? `/works/${work.id}`;

            return (
              <a
                key={work.id}
                href={url}
                target={work.url ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`${styles.item} reveal`}
                style={{ '--delay': delay } as React.CSSProperties}
              >
                <div className={styles.thumb}>
                  <div className={styles.thumbInner}>
                    {work.thumbnail ? (
                      <Image
                        src={work.thumbnail.url}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <span className={styles.thumbPlaceholder}>{work.title}</span>
                    )}
                  </div>
                  {work.tags && work.tags.includes('サンプル') && (
                    <span className={styles.badge}>サンプル制作</span>
                  )}
                </div>

                <div className={styles.num}>{num}</div>
                <div className={styles.title}>{work.title}</div>
                {work.tags && work.tags.length > 0 && (
                  <div className={styles.tags}>
                    {work.tags.map((tag, ti) => (
                      <span key={tag}>
                        {ti > 0 && <span className={styles.tagSep}>·</span>}
                        {tag}
                      </span>
                    ))}
                    {work.year && (
                      <>
                        <span className={styles.tagSep}>·</span>
                        {work.year}
                      </>
                    )}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        <p className={styles.note}>
          サンプル制作も含みます。詳細はお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
