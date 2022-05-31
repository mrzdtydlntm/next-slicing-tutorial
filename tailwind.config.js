const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        primaryGrey: {
          DEFAULT: "F7F7FB",
          "200": "#E8E8F8",
          "300": "#8FBFE3"
        },
        yellow: {
          "50": "#FFFDF0",
          "100": "#FFFCE1",
          "200": "#FEF7B9",
          "300": "#FDF390",
          "400": "#FDED5E",
          "500": "#FCE72D",
          "600": "#E7D103",
          "700": "#CEBA03",
          "800": "#AB9A02",
          "900": "#7E7102"
        }
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };

      addUtilities(utilities);
    }),
  ],
};
