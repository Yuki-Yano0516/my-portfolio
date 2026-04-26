import type { MetadataRoute } from 'next';
import { getAllBlogSlugs, getAllWorkSlugs } from '@/lib/microcms';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, works] = await Promise.all([
    getAllBlogSlugs(),
    getAllWorkSlugs(),
  ]);

  const blogEntries = blogs.map((blog) => ({
    url: `${siteUrl}/blog/${blog.id}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const workEntries = works.map((work) => ({
    url: `${siteUrl}/works/${work.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...blogEntries,
    ...workEntries,
  ];
}
