// components/MarkdownContentContainer.tsx
import { promises as fs } from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownContentContainerProps = {
  filePath: string
}

export default async function MarkdownContentContainer({ filePath }: MarkdownContentContainerProps) {
  const fullPath = path.join(process.cwd(), filePath)
  const file = await fs.readFile(fullPath, 'utf8')

  return (
    <section className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {file}
      </ReactMarkdown>
    </section>
  )
}
