import FooterPresenter from './FooterPresenter';

export default function FooterContainer() {
  const year = new Date().getFullYear();
  return <FooterPresenter year={year} />;
}
