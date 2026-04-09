'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import RevealObserverPresenter from './RevealObserverPresenter';

export default function RevealObserverContainer() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    // ページ遷移後に新しいDOM要素が描画されるのを待つ
    const timer = setTimeout(observe, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return <RevealObserverPresenter />;
}
