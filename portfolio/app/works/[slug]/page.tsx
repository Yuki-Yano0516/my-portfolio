import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getWork, getAllWorkSlugs } from '@/lib/microcms';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const works = await getAllWorkSlugs();
  return works.map((w) => ({ slug: w.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWork(slug);
  return {
    title:       `${work.title} | Yano.`,
    description: `Works: ${work.title}`,
  };
}

export const revalidate = 60;

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWork(slug);

  const tags = work.tags ?? [];

  return (
    <article className={styles.article}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && <span className={styles.tagSep}>&middot;</span>}
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
          <h1 className={styles.title}>{work.title}</h1>
          {work.url && (
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLink}
            >
              サイトを見る →
            </a>
          )}
        </header>

        {work.thumbnail && (
          <div className={styles.thumbnail}>
            <Image
              src={work.thumbnail.url}
              alt={work.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        <Link href="/#works" className={styles.back}>
          ← Works 一覧へ
        </Link>
      </div>
    </article>
  );
}
