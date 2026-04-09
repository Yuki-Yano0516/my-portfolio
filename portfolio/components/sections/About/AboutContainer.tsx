import AboutPresenter from "./AboutPresenter";

const skills = [
  {
    label: "Frontend",
    items: ["HTML / CSS", "React / Next.js", "JavaScript / TypeScript", "jQuery", "Tailwind CSS"],
  },
  {
    label: "Tooling & Others",
    items: ["WordPress", "Figma", "Adobe", "GitHub", "Vercel"],
  },
  {
    label: "Approach",
    items: ["Component Design", "Accessibility", "Performance", "Responsive"],
  },
];

const stats = [
  { num: "30+", label: "Projects Completed" },
  { num: "5", label: "Years Experience" },
  { num: "∞", label: "Cups of Coffee" },
];

export default function AboutContainer() {
  return <AboutPresenter skills={skills} stats={stats} />;
}
