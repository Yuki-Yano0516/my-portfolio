import Link from 'next/link';
import styles from '@/styles/sections/Blog.module.css';

type BlogItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category?: string;
};

type Props = {
  blogs: BlogItem[];
};

export default function BlogPresenter({ blogs }: Props) {
  return (
    <section id="blog" className={`section sectionSoft ${styles.blog}`}>
      <div className="inner">
        <div className="sectionHead reveal">
          <div className="sectionHead__kicker">
            <i>03</i>
            ブログ
          </div>
          <span className="sectionHead__ghost">Blog</span>
        </div>

        <div className={styles.list}>
          {blogs.map((blog, i) => {
            const delay = `${i * 0.05}s`;

            return (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className={`${styles.item} reveal`}
                style={{ '--delay': delay } as React.CSSProperties}
              >
                <div className={styles.date}>{blog.date}</div>
                <div className={styles.content}>
                  <div className={styles.titleRow}>
                    <div className={styles.title}>{blog.title}</div>
                    {blog.category && (
                      <span className={styles.category}>{blog.category}</span>
                    )}
                  </div>
                  <div className={styles.excerpt}>{blog.excerpt}…</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
