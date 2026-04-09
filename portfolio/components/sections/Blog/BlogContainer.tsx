import type { Blog } from '@/types/microcms';
import { stripMarkdown } from '@/lib/markdown';
import BlogPresenter from './BlogPresenter';

type Props = {
  blogs: Blog[];
};

function formatDate(dateStr: string): string {
  return new Date(dateStr)
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\//g, '.');
}

export default function BlogContainer({ blogs }: Props) {
  const items = blogs.map((blog) => ({
    id: blog.id,
    date: formatDate(blog.createdAt),
    title: blog.title,
    excerpt: stripMarkdown(blog.body),
    category: blog.category,
  }));

  return <BlogPresenter blogs={items} />;
}
