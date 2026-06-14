import styles from '@/styles/components/Footer.module.css';

type Props = {
  year: number;
};

export default function FooterPresenter({ year }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>Y</span>
          Yano Yuki
        </a>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#blog">Blog</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <span className={styles.copy}>
          &copy; {year} Yano Yuki — Frontend Engineer
        </span>
      </div>
    </footer>
  );
}
