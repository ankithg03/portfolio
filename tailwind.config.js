const tokens = require('@contentful/f36-tokens');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.entries(tokens).reduce((acc, [key, value]) => {
  // Filter Hex colors from the f36-tokens
  if (/^#[0-9A-F]{6}$/i.test(value)) {
    acc[key] = value;
  }

  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        'port-secondary': 'var(--port-secondary)',
        'port-dark-primary': 'var(--port-dark-primary)',
        'port-black-primary': 'var(--port-black-primary)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: 1.1,
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', ...fontFamily.sans],
        Poppins: ["Poppins","sans-serif"],
        FiraCode: ["Fira Code","monospace"],
        NotoSans: ["Inter Tight", "Poppins","sans-serif"],
        PPMori: ["PPMori", "Inter Tight", "Poppins","sans-serif"], // Add the new font here
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
