type Props = {
  label: string;
  className?: string;
};

export default function SectionLabelPresenter({ label, className }: Props) {
  return (
    <div className={`sectionLabel reveal${className ? ` ${className}` : ''}`}>
      {label}
    </div>
  );
}
