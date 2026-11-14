/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'tablet': '1180px',
      'lg': '1181px',
      'xl': '1280px',
      '2xl': '1601px',
    },
    extend: {
      colors: {
        brand: {
          black: '#000000',
          obsidian: '#111010',
          surface: '#161515',
          card: '#181717',
          mint: '#31F8CA', // High-voltage neon cyan/mint
          orange: '#F6610E', // Electric orange
          border: '#DDDCD9',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
          'border-glow': 'rgba(49, 248, 202, 0.3)',
          sub: '#8B8A89',
          muted: '#545454',
          gray: '#A0A0A0',
          offwhite: '#F5F5F5',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        meta: ['"Inter"', 'sans-serif'],
      },
      lineHeight: {
        'tight-hero': '0.9',
        'tight-title': '1.05',
      },
      letterSpacing: {
        'tight-hero': '-0.03em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
