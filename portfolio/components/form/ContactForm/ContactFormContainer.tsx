'use client';

import { useActionState } from 'react';
import { sendContactEmail, type ContactState } from '@/app/actions/contact';
import ContactFormPresenter from './ContactFormPresenter';

const initialState: ContactState = { status: 'idle', message: '' };

export default function ContactFormContainer() {
  const [state, action, isPending] = useActionState(sendContactEmail, initialState);
  return <ContactFormPresenter state={state} action={action} isPending={isPending} />;
}
