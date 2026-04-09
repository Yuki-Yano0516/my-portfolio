import type { Work } from '@/types/microcms';
import WorksPresenter from './WorksPresenter';

type Props = {
  works: Work[];
};

export default function WorksContainer({ works }: Props) {
  return <WorksPresenter works={works} />;
}
