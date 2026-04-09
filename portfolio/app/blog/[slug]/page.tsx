import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlog, getAllBlogSlugs } from '@/lib/microcms';
import { markdownToHtml, stripMarkdown, calcReadingTime } from '@/lib/markdown';
import 'highlight.js/styles/github-dark.css';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getAllBlogSlugs();
  return blogs.map((b) => ({ slug: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return {
    title:       `${blog.title} | Yano.`,
    description: stripMarkdown(blog.body).slice(0, 120),
  };
}

export const revalidate = 60;

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  const date = new Date(blog.createdAt).toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const readingTime = calcReadingTime(blog.body);
  const bodyHtml    = await markdownToHtml(blog.body ?? '');

  return (
    <article className={styles.article}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {blog.category && (
            <div className={styles.category}>{blog.category}</div>
          )}
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.meta}>
            <time className={styles.date} dateTime={blog.createdAt}>{date}</time>
            <span className={styles.readingTime}>{readingTime} min read</span>
          </div>
        </header>

        <div className={styles.headerDivider} />

        {blog.eyecatch && (
          <div className={styles.eyecatch}>
            <Image
              src={blog.eyecatch.url}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <Link href="/#blog" className={styles.back}>
          ← Blog 一覧へ
        </Link>
      </div>
    </article>
  );
}
