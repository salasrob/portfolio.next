import { SectionProps } from "../sections/types";

interface ArticleProps {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    sections: SectionProps[];
}

export type {ArticleProps};