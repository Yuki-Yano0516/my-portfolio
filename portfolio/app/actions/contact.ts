'use server';

import { Resend } from 'resend';

export type ContactState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error('[sendContactEmail] CONTACT_TO_EMAIL is not configured');
    return { status: 'error', message: '送信に失敗しました。時間をおいて再度お試しください。' };
  }

  const name    = formData.get('name')?.toString().trim()    ?? '';
  const email   = formData.get('email')?.toString().trim()   ?? '';
  const subject = formData.get('subject')?.toString().trim() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !message) {
    return { status: 'error', message: '必須項目をすべてご入力ください。' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'メールアドレスの形式が正しくありません。' };
  }

  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return { status: 'error', message: '入力内容が長すぎます。' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to:   toEmail,
      replyTo: email,
      subject: subject ? `【お問い合わせ】${subject}` : `【お問い合わせ】${name} 様より`,
      text: [
        `お名前: ${name}`,
        `メールアドレス: ${email}`,
        `件名: ${subject || '（なし）'}`,
        '',
        message,
      ].join('\n'),
    });

    return {
      status: 'success',
      message: 'お問い合わせを受け付けました。3営業日以内にご返信いたします。',
    };
  } catch (err) {
    console.error('[sendContactEmail] failed:', err);
    return {
      status: 'error',
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
}
