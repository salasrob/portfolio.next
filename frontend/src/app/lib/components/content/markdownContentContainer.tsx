// components/MarkdownContentContainer.tsx
import { promises as fs } from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

type MarkdownContentContainerProps = {
  filePath: string
}

export default async function MarkdownContentContainer({ filePath }: MarkdownContentContainerProps) {
  const fullPath = path.join(process.cwd(), filePath)
  const file = await fs.readFile(fullPath, 'utf8')

  return (
    <section className="prose prose-invert max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
      <div className="overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
          {file}
        </ReactMarkdown>
      </div>
    </section>
  )
}
