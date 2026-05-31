import ContentContainer from '@/app/lib/components/content/contentContainer'
import MarkdownContentContainer from '@/app/lib/components/content/markdownContentContainer';
import Link from 'next/link';

import { promises as fs } from 'fs'

const publicsFilePath = "public"
let file = await fs.readFile(process.cwd() + '/public/portfolio.json', 'utf8');
let data = JSON.parse(file);

const getContentComponents = () => {
    let len = data.sections.length;
    for (let index = 0; index < len; index++) {
        let section = data.sections[index];
        if (section.header == "Blog") {
            console.log(section.contentComponents);
            return section.contentComponents;
        }
    }
}

export async function generateStaticParams() {
  const content = getContentComponents();
  const slugs = content.map((item: any) => ({ slug: item.slug }));
  return slugs
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
        <Link className='group mb-2 inline-flex items-center font-semibold leading-tight text-od-400' href='/blog'>{"<- "}Life as it occurs to me</Link>
        <ContentContainer content={<MarkdownContentContainer filePath={`${publicsFilePath}/${slug}.md`}/>} />
      </div>
    </main>
  )
}
