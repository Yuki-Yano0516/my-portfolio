import MainVisual from '@/components/sections/MainVisual';
import Works      from '@/components/sections/Works';
import About      from '@/components/sections/About';
import BlogSection from '@/components/sections/Blog';
import Contact    from '@/components/sections/Contact';
import { getWorks, getBlogs } from '@/lib/microcms';

export const revalidate = 60; // ISR: 60秒ごとに再生成

export default async function HomePage() {
  const [works, blogs] = await Promise.all([
    getWorks(6),
    getBlogs(4),
  ]);

  return (
    <main>
      <MainVisual />
      <Works works={works} />
      <About />
      <BlogSection blogs={blogs} />
      <Contact />
    </main>
  );
}
