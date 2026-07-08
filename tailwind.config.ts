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
        navy: {
          DEFAULT: '#0B1D3A',
          dark: '#071326',
          light: '#122B52',
          card: '#0F2547',
        },
        accent: {
          teal: '#0EA5E9',
          cyan: '#38BDF8',
        },
        abu: {
          light: '#F5F7FA',
          border: '#E2E8F0',
          dark: '#1E293B',
        },
        cta: {
          orange: '#F97316',
          hover: '#EA580C',
        }
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        fira: ['var(--font-fira-code)', 'monospace'],
      },
      boxShadow: {
        solid: '4px 4px 0px 0px #0B1D3A',
        'solid-teal': '4px 4px 0px 0px #0EA5E9',
        'solid-orange': '4px 4px 0px 0px #F97316',
        'solid-white': '4px 4px 0px 0px #FFFFFF',
      },
      borderRadius: {
        'button': '4px',
      }
    },
  },
  plugins: [],
}

export default config
