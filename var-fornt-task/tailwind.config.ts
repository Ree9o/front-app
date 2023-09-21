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
      },
      colors: {
        "primary": " #CBF34D",
        "badge-blue": "#4D5EF3",
        "badge-black": "#212121",
        "badge-aqua": "#4DD5F3",
        "badge-orange": "#F3894D",
        "badge-purple": "#BE4DF3",
        "Gray/900": "#333333",
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
