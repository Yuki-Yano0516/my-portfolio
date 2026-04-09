import ContactPresenter from './ContactPresenter';

const email = 'hello@hayashi.dev';

const socials = [
  { label: 'Twitter',  href: 'https://twitter.com/' },
  { label: 'GitHub',   href: 'https://github.com/'  },
  { label: 'Zenn',     href: 'https://zenn.dev/'    },
  { label: 'LinkedIn', href: 'https://linkedin.com/'},
];

export default function ContactContainer() {
  return <ContactPresenter email={email} socials={socials} />;
}
