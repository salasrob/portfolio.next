import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        od: {
          50: '#f5f6f0',
          100: '#e8eadd',
          200: '#d0d4b8',
          300: '#b3ba8d',
          400: '#8f9a5b',
          500: '#6b7a3d',
          600: '#4b5320',
          700: '#3d4420',
          800: '#2a3018',
          900: '#1a2010',
          950: '#0f1409',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
