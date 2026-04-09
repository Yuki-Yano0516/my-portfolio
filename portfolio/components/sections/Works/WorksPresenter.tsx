import Image from 'next/image';
import type { Work } from '@/types/microcms';
import styles from '@/styles/sections/Works.module.css';

const fallbackClasses = [
  styles.fallback1,
  styles.fallback2,
  styles.fallback3,
  styles.fallback4,
];

type Props = {
  works: Work[];
};

export default function WorksPresenter({ works }: Props) {
  return (
    <section id="works" className={`section ${styles.works}`}>
      <div className="inner">
        <div className="sectionLabel reveal">Works</div>

        <div className={styles.grid}>
          {works.map((work, i) => {
            const num = String(i + 1).padStart(3, '0');
            const delay = i > 0 ? `${i * 0.05}s` : '0s';
            const url = work.url ?? `/works/${work.id}`;

            return (
              <div
                key={work.id}
                className={`${styles.item} reveal`}
                style={{ '--delay': delay } as React.CSSProperties}
              >
                <a
                  href={url}
                  target={work.url ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className={styles.thumb}>
                    {work.thumbnail ? (
                      <Image
                        src={work.thumbnail.url}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className={`${styles.fallback} ${fallbackClasses[i % 4]}`}>
                        <span className={styles.fallbackNum}>{num}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.meta}>
                    <div>
                      <div className={styles.num}>{num}</div>
                      <div className={styles.title}>{work.title}</div>
                      {work.tags && work.tags.length > 0 && (
                        <div className={styles.tags}>
                          {work.tags.map((tag, ti) => (
                            <span key={tag}>
                              {ti > 0 && <span className={styles.tagSep}>&middot;</span>}
                              <span className={styles.tag}>{tag}</span>
                            </span>
                          ))}
                          {work.year && (
                            <>
                              <span className={styles.tagSep}>&middot;</span>
                              <span className={styles.tag}>{work.year}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <div className={styles.arrow}>↗</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
