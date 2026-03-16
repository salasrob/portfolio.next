import ContentContainer from '@/app/lib/components/content/contentContainer'
import MarkdownContentContainer from '@/app/lib/components/content/markdownContentContainer';

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

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
        <a className='group mb-2 inline-flex items-center font-semibold leading-tight text-od-400' href='/blog'>{"<- "}Life as it occurs to me</a>
        <ContentContainer content={<MarkdownContentContainer filePath={`${publicsFilePath}/${params.slug}.md`}/>} />
      </div>
    </main>
  )
}
