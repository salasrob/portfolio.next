'use client'

import { useState, useRef, useEffect } from 'react'
import type { MLCEngine, ChatCompletionMessageParam } from '@mlc-ai/web-llm'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const MODEL_ID = 'Phi-3.5-mini-instruct-q4f16_1-MLC'

export default function AiChat({ context }: { context: string }) {
  const [stage, setStage] = useState<'idle' | 'loading' | 'ready' | 'unsupported'>('idle')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCached, setIsCached] = useState(false)
  const [progress, setProgress] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)
  const engineRef = useRef<MLCEngine | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const chatBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!navigator.gpu) {
      setStage('unsupported')
      return
    }
    // Check if model is already cached
    checkModelCached()
  }, [])

  const checkModelCached = async () => {
    try {
      const cacheKeys = await caches.keys()
      const hasCache = cacheKeys.some((key) => key.includes('webllm') || key.includes('mlc'))
      if (hasCache) {
        setIsCached(true)
      }
    } catch {
      // Cache API not available, assume not cached
    }
  }

  const trimmedContext = context.substring(0, 6000)

  const systemPrompt = `You are a helpful assistant on Robert Salas's portfolio website. Answer questions about his work experience, skills, projects, and values based on the following context. Be concise and friendly. If you don't know something, say so honestly.

Context:
${trimmedContext}

Additional values: Robert values data privacy, free thinking, and protecting our natural world. He enjoys Brazilian Jiu Jitsu, hiking, and playing games with his kids.`

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  const loadModel = async () => {
    setStage('loading')
    setProgress('Initializing...')

    try {
      const { CreateMLCEngine } = await import('@mlc-ai/web-llm')
      const engine = await CreateMLCEngine(MODEL_ID, {
        initProgressCallback: (report) => {
          const text = report.text
          if (text.includes('Fetching param cache')) {
            setProgress('Loading model from cache into GPU...')
          } else {
            setProgress(text)
          }
        },
      })
      engineRef.current = engine
      setIsCached(true)
      setStage('ready')
      setIsExpanded(true)
    } catch (err) {
      console.error('Failed to load model:', err)
      setProgress('Failed to load model. WebGPU may not be supported in your browser.')
      setStage('idle')
    }
  }

  const handleExpand = () => {
    if (stage === 'ready') {
      setIsExpanded(true)
    } else {
      // Need to load model first — expand will happen after load
      setIsExpanded(true)
      loadModel()
    }
  }

  const handleCollapse = () => {
    setIsExpanded(false)
  }

  const sendMessage = async () => {
    if (!input.trim() || !engineRef.current || isGenerating) return

    const userMessage: ChatMessage = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsGenerating(true)

    // Sliding window: keep only recent messages to fit within ~4096 token context
    // System prompt ~1500 tokens, leave ~2500 for conversation + response (300 max)
    // Rough estimate: 1 token ≈ 4 chars, so ~2200 tokens ≈ 8800 chars for history
    const MAX_HISTORY_CHARS = 8000
    const allMessages = [...messages, userMessage]
    let historyMessages = allMessages
    let totalChars = historyMessages.reduce((sum, m) => sum + m.content.length, 0)

    while (totalChars > MAX_HISTORY_CHARS && historyMessages.length > 2) {
      historyMessages = historyMessages.slice(2) // Remove oldest pair (user + assistant)
      totalChars = historyMessages.reduce((sum, m) => sum + m.content.length, 0)
    }

    const chatHistory: ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      ...historyMessages.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
    ]

    const controller = new AbortController()
    abortRef.current = controller

    try {
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      const stream = await engineRef.current.chat.completions.create({
        messages: chatHistory,
        temperature: 0.7,
        max_tokens: 300,
        stream: true,
      })

      let accumulated = ''
      for await (const chunk of stream) {
        if (controller.signal.aborted) break
        const delta = chunk.choices[0]?.delta?.content || ''
        accumulated += delta
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: accumulated }
          return updated
        })
      }

      if (controller.signal.aborted) {
        setMessages((prev) => [...prev, { role: 'assistant', content: '⚠️ Response cancelled.' }])
      } else if (!accumulated) {
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: 'Sorry, I could not generate a response.' }
          return updated
        })
      }
    } catch (err) {
      if (!controller.signal.aborted) {
        console.error('Generation error:', err)
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: 'Sorry, something went wrong.' }
          return updated
        })
      }
    } finally {
      abortRef.current = null
      setIsGenerating(false)
      setIsCancelling(false)
    }
  }

  const cancelGeneration = () => {
    setIsCancelling(true)
    if (abortRef.current) {
      abortRef.current.abort()
    }
    if (engineRef.current) {
      engineRef.current.interruptGenerate()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (stage === 'unsupported') {
    return null
  }

  // Collapsed state — show a clickable bar
  if (!isExpanded) {
    return (
      <div className="mt-8 hidden lg:block max-w-sm">
        <button
          onClick={handleExpand}
          className="flex w-full items-center justify-between rounded-lg border border-od-400/20 bg-od-950/50 px-4 py-3 text-sm font-medium text-od-400 transition-colors hover:bg-od-400/10"
        >
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2a1 1 0 011 1v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L11 6.586V3a1 1 0 011-1zM4.5 9A2.5 2.5 0 002 11.5v7A2.5 2.5 0 004.5 21h15a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0019.5 9h-15zM8 14a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            Ask about Rob (Powered by Phi-3.5 Mini)
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {!isCached && (
          <p className="mt-2 text-xs text-stone-500">
            Requires a 1–2 GB model download (cached after first load). Needs a WebGPU-capable browser.
          </p>
        )}
      </div>
    )
  }

  // Expanded but still loading
  if (stage === 'loading') {
    return (
      <div className="mt-8 hidden lg:block max-w-sm">
        <div className="overflow-hidden rounded-lg border border-od-400/20 bg-od-950/50 animate-[slideOpen_0.3s_ease-out_forwards]" style={{ transformOrigin: 'top' }}>
          <div className="flex items-center justify-between border-b border-od-400/20 px-4 py-3">
            <p className="text-xs font-medium text-od-400">Ask about Rob (Powered by Phi-3.5 Mini)</p>
            <button onClick={handleCollapse} className="text-stone-500 hover:text-stone-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-6 text-sm text-od-400">
            <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            <span className="text-xs">{progress || 'Initializing...'}</span>
          </div>
        </div>
      </div>
    )
  }

  // Expanded and ready
  return (
    <div className="mt-8 hidden lg:block max-w-sm">
      <div
        className="overflow-hidden rounded-lg border border-od-400/20 bg-od-950/50 animate-[slideOpen_0.3s_ease-out_forwards]"
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex items-center justify-between border-b border-od-400/20 px-4 py-3">
          <p className="text-xs font-medium text-od-400">Ask about Rob (Powered by Phi-3.5 Mini)</p>
          <button onClick={handleCollapse} className="text-stone-500 hover:text-stone-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div
          ref={chatBoxRef}
          className="flex h-48 flex-col gap-3 overflow-y-auto px-3 py-3 text-xs"
        >
          {messages.length === 0 && (
            <p className="text-stone-500 italic">Ask me about Rob&apos;s experience, skills, or values...</p>
          )}
          {messages.map((msg, i) =>
            msg.content ? (
              <div
                key={i}
                className={`whitespace-pre-wrap rounded-md px-2 py-1.5 ${
                  msg.role === 'user'
                    ? 'ml-auto max-w-[80%] bg-od-400/20 text-stone-200'
                    : 'mr-auto max-w-[90%] bg-stone-800/50 text-stone-300'
                }`}
              >
                {msg.content}
              </div>
            ) : null
          )}
          {isGenerating && messages[messages.length - 1]?.content === '' && (
            <div className="mr-auto rounded-md bg-stone-800/50 px-2 py-1.5 text-stone-400">
              <span className="animate-pulse">Thinking...</span>
            </div>
          )}
        </div>
        <div className="border-t border-od-400/20 px-3 py-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a question..."
              className="flex-1 rounded-md border border-stone-700 bg-transparent px-2 py-1.5 text-xs text-stone-200 placeholder-stone-500 outline-none focus:border-od-400/50"
            />
            {isGenerating ? (
              <button
                onClick={cancelGeneration}
                disabled={isCancelling}
                className="rounded-md bg-red-500/20 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/30 disabled:opacity-50"
              >
                {isCancelling ? 'Cancelling...' : 'Cancel'}
              </button>
            ) : (
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="rounded-md bg-od-400/20 px-3 py-1.5 text-xs font-medium text-od-400 transition-colors hover:bg-od-400/30 disabled:opacity-50"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
