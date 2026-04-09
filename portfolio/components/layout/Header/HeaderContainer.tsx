'use client';

import { useEffect, useState } from 'react';
import HeaderPresenter from './HeaderPresenter';

const navLinks = [
  { href: '/#works',   label: 'Works'   },
  { href: '/#about',   label: 'About'   },
  { href: '/#blog',    label: 'Blog'    },
  { href: '/#contact', label: 'Contact' },
];

export default function HeaderContainer() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleToggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <HeaderPresenter
      scrolled={scrolled}
      menuOpen={menuOpen}
      navLinks={navLinks}
      onToggleMenu={handleToggleMenu}
      onCloseMenu={handleCloseMenu}
    />
  );
}
