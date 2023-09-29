import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-sp": "url('/hero-sp.png')",
        "hero": "url('/hero.jpg')",
        "cta-sp": "url('/cta-sp.png')",
        "cta":"url('/cta.jpg')",
      },
      fontSize: {
        'xm': ["0.875rem", {
          lineHeight:'1.3125rem',
        }],
        'xxl': ["2.5rem", {
          lineHeight: '3.75rem',
          fontWeight: "700",
        }]
      },
      lineHeight: {
        '60':'3.75rem',
        '72': '4.5rem',
      },
      colors: {
        "primary": " #CBF34D",
        "badge-blue": "#4D5EF3",
        "badge-black": "#212121",
        "badge-aqua": "#4DD5F3",
        "badge-orange": "#F3894D",
        "badge-purple": "#BE4DF3",
        "Gray/900": "#333333",
        "Gray/#666":"#666666",
        "Gray/700": "#999999",
        "Gray/600": "#CCCCCC",
        "Gray/100": "#EEEEEE",
        "BLACK": "#212121",
        "WHITE": "#FDFDFD",
      },
      rotate: {
        "130":"130deg"
      }
    },
  },
  plugins: [],
}
export default config
