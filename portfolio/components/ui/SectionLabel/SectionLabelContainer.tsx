import SectionLabelPresenter from './SectionLabelPresenter';

type Props = {
  label: string;
  className?: string;
};

export default function SectionLabelContainer(props: Props) {
  return <SectionLabelPresenter {...props} />;
}
