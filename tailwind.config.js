/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        lato: ["var(--font-lato)"],
      },
      colors: {
        "primary-green": "#354F52",
        "primary-yellow": "#E1C158",
        "primary-white": "#F4FDFF",
        "secondary-green": "#84A98C",
        "accent-green": "#40826D",
        "accent-yellow": "#D3AF37",
      },
    },
  },
  plugins: [],
};
