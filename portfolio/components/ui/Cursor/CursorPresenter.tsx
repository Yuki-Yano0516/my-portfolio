import { type RefObject } from 'react';
import styles from '@/styles/components/Cursor.module.css';

type Props = {
  cursorRef: RefObject<HTMLDivElement | null>;
};

export default function CursorPresenter({ cursorRef }: Props) {
  return <div ref={cursorRef} className={styles.cursor} aria-hidden="true" />;
}
