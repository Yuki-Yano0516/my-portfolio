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
    <section id="blog" className={`section ${styles.blog}`}>
      <div className="inner">
        <div className="sectionLabel reveal">Blog</div>

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
                <div>
                  <div className={styles.title}>{blog.title}</div>
                  <div className={styles.excerpt}>{blog.excerpt}...</div>
                </div>
                {blog.category && (
                  <div className={styles.category}>{blog.category}</div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
