import { ArticleProps } from './types';
import Section from '../sections/section';

const Article: React.FC<ArticleProps> = ({ title, subtitle, author, date, sections }) => {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{"by " + author + " " + date}</h3>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </article>
  );
};
  
export default Article;