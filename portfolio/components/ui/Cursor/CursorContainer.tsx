'use client';

import { useEffect, useRef } from 'react';
import CursorPresenter from './CursorPresenter';
import styles from '@/styles/components/Cursor.module.css';

export default function CursorContainer() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const moveCursor = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.left = `${curX}px`;
      cursor.style.top  = `${curY}px`;
      rafId = requestAnimationFrame(moveCursor);
    };

    const addExpand    = () => cursor.classList.add(styles.expand);
    const removeExpand = () => cursor.classList.remove(styles.expand);

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-cursor-expand]')) {
        addExpand();
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-cursor-expand]')) {
        removeExpand();
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafId = requestAnimationFrame(moveCursor);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <CursorPresenter cursorRef={cursorRef} />;
}
