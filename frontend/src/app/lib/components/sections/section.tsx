import { SectionProps } from "./types";
  
const Section: React.FC<SectionProps> = ({ title, subtitle, content }) => {
  return (
    <section>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </section>
  );
};
  
export default Section;