/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "macOS-Sierra": "url('/image/macOS-Sierra.webp')"
      },
      container: {
        center: true,
      },
      colors: {
        "macOS-header": "#E2E2E2",
        "macOS-red": "#EE6A5E",
        "macOS-orange": "#F6BF50",
        "macOS-gray": "#D0D0D0",
        "macOS-content": "#ECECEC",
        "border-style":"#CDCBD4",
        "button-border":"#E1E1E1",
        "copyright-text":"#B8B8B8",
        "button-bg":"#F7F7F7",
      },
    },
  },
  plugins: [],
};
