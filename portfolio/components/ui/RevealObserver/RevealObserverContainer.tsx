'use client';

import { useEffect } from 'react';
import RevealObserverPresenter from './RevealObserverPresenter';

export default function RevealObserverContainer() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

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

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <RevealObserverPresenter />;
}
