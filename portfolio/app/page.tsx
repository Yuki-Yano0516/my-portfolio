import MainVisual from '@/components/sections/MainVisual';
import About      from '@/components/sections/About';
import Works      from '@/components/sections/Works';
import BlogSection from '@/components/sections/Blog';
import Skills     from '@/components/sections/Skills';
import Contact    from '@/components/sections/Contact';
import Footer     from '@/components/layout/Footer';
import { getWorks, getBlogs } from '@/lib/microcms';

export const revalidate = 60;

export default async function HomePage() {
  const [works, blogs] = await Promise.all([
    getWorks(6),
    getBlogs(4),
  ]);

  return (
    <>
      <main>
        <MainVisual />
        <About />
        <Works works={works} />
        <BlogSection blogs={blogs} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
