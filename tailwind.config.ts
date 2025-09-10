import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ["Poppins","sans-serif"],
        FiraCode: ["Fira Code","monospace"],
        NotoSans: ["Inter Tight", "Poppins","sans-serif"],
        PPMori: ["PPMori", "Inter Tight", "Poppins","sans-serif"],
        sans: ['var(--font-urbanist)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
export default config
