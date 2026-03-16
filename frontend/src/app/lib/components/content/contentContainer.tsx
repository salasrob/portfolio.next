import { ReactNode } from "react";

export default function ContentContainer({ content }: { content: ReactNode }) {
  return (
    <article style={{
            border: '2px solid #8f9a5b',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginTop: '1rem' }}>
        {content}
    </article>
  )
}
