import Link from 'next/link';
import styles from '@/styles/components/Header.module.css';

type NavLink = { href: string; label: string; cta?: boolean };

type Props = {
  scrolled: boolean;
  menuOpen: boolean;
  navLinks: NavLink[];
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export default function HeaderPresenter({
  scrolled,
  menuOpen,
  navLinks,
  onToggleMenu,
  onCloseMenu,
}: Props) {
  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>Y</span>
            Yano Yuki
          </Link>

          <ul className={styles.links}>
            {navLinks.map(({ href, label, cta }) => (
              <li key={href}>
                <a href={href} className={cta ? styles.ctaLink : undefined}>{label}</a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        role="dialog"
        aria-label="ナビゲーションメニュー"
      >
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={onCloseMenu}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
