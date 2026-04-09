import type { ContactState } from '@/app/actions/contact';
import styles from './ContactForm.module.css';

type Props = {
  state: ContactState;
  action: (formData: FormData) => void;
  isPending: boolean;
};

export default function ContactFormPresenter({ state, action, isPending }: Props) {
  return (
    <form action={action} className={styles.form}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>
            お名前 <span className={styles.required}>*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            disabled={isPending}
            placeholder="山田 太郎"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>
            メールアドレス <span className={styles.required}>*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            disabled={isPending}
            placeholder="example@mail.com"
            className={styles.input}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>件名</span>
        <input
          type="text"
          name="subject"
          disabled={isPending}
          placeholder="ご依頼・ご相談など"
          className={styles.input}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>
          お問い合わせ内容 <span className={styles.required}>*</span>
        </span>
        <textarea
          name="message"
          required
          disabled={isPending}
          rows={8}
          placeholder="ご依頼内容・ご質問などをご記入ください。"
          className={styles.textarea}
        />
      </label>

      {(state.status === 'success' || state.status === 'error') && (
        <p className={`${styles.feedback} ${styles[state.status]}`}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending || state.status === 'success'}
        className={styles.submit}
      >
        {isPending ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}
