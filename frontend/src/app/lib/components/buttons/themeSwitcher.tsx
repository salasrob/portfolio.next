'use client'

import { useEffect, useState } from 'react'

const themes = [
  { id: 'forest', label: 'Forest', color: '#1c3a1c' },
  { id: 'slate', label: 'Slate', color: '#0f172a' },
  { id: 'ember', label: 'Ember', color: '#2a1410' },
  { id: 'high-contrast', label: 'High Contrast', color: '#000000' },
]

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('forest')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('site-theme')
    if (saved && themes.some(t => t.id === saved)) {
      setCurrentTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    localStorage.setItem('site-theme', themeId)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
      {isOpen && (
        <div className="absolute bottom-12 right-0 mb-2 rounded-lg border border-stone-700 bg-stone-800 p-3 shadow-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-300">Theme</p>
          <div className="flex flex-col gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme.id)}
                className={`flex items-center gap-3 whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors hover:bg-stone-700 ${
                  currentTheme === theme.id ? 'bg-stone-700 text-stone-100' : 'text-stone-300'
                }`}
              >
                <span
                  className="inline-block h-4 w-4 rounded-full border border-stone-500"
                  style={{ backgroundColor: theme.color }}
                />
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 bg-stone-800 text-stone-300 shadow-lg transition-colors hover:bg-stone-700 hover:text-stone-100"
        aria-label="Change color theme"
        title="Change color theme"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      </button>
    </div>
  )
}
