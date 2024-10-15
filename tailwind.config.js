/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'tighter': '1',
        'extra-loose': '2.5',
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        'white': '#ffffff',
        'black': '#000000',
      },
      backdropBlur: {
        'extra-sm': '2px',
        '4xl': '40px',     
        '5xl': '60px',     
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpg')",
        "contest-hero-bg": "url('/src/assets/images/contest-hero-bg.png')",
        "contest-card-bg":
          "linear-gradient(140deg, rgb(0, 241, 111), rgb(0, 95, 43))",
        "contest-card-header-bg":
          "linear-gradient(150deg, rgb(255, 243, 158) 0%, rgb(248, 224, 62) 100%)",
          'gradient-80': 'linear-gradient(to top, #FCDE70 60%, transparent 60%)',
          'gradient-50': 'linear-gradient(to top, #E8B86D 50%, transparent 50%)',
          'gradient-green': 'linear-gradient(to top, rgb(0, 241, 111) 50%, transparent 50%)',
          'gradient-top' : 'linear-gradient(to bottom, rgb(0, 0 ,0) 20%, transparent 20%)',
      },
      colors: {
        "green-primary": "#01AB41",
        "green-lighter": "#C0EBA6",
        "green-light": "#39731e",
        "green-darker": "#16423C",
        "green-mid": "#557846",
        "green-lightest": "#E2F1E7",
        "yellow-primary": "#f2c800",
        "yellow-light": "#FCDE70",
        "yellow-lighter": "#FCCD2A",
        "green-dark" : "#00712D",
        "orange-dark" : "#FF9100",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "1px 0px 1px #000000",
        lg: "0 8px 16px var(--tw-shadow-color)",
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 1)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      backgroundPosition: {
        'right-offset': 'calc(100% + 25px) center',
        'right-offset-80': 'calc(100% + 80px) center'
      },
      transform: {
        'flip-x': 'scaleX(-1)',
        'flip-y': 'scaleY(-1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
