import fs from 'fs';
import path from 'path';
import { ArticleProps } from '../components/articles/types';
import { SectionProps } from '../components/sections/types';

interface PortfolioData {
  articles: ArticleProps[];
  sections: SectionProps[];
}

export class PortfolioViewModel {
  private data: PortfolioData;

  constructor() {
    const filePath = path.join(process.cwd(), 'data/portfolioData.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    this.data = JSON.parse(fileContents);
  }

  getArticles(): ArticleProps[] {
    return this.data.articles;
  }

  getSections(): SectionProps[] {
    return this.data.sections;
  }
}