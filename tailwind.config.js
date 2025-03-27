/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["var(--font-roboto)"],
      },

      colors: {
        "surface-primary": "#FFFFFF",
        "surface-grey": "#E7E7EB",
        "text-dark": "#1E1E1E",
        "text-dark-h2": "#323C47",
        "text-dark-p": "#292D32",
        "medium-dark": "#707683",
        "primary-bg": "#F8F8F8",
        blue: "#2563EB",
        "icon-grey": "#90A0B7",
        "surface-stroke": "#555559",
        "surface-hover": "#E3E3E3",
      },
      boxShadow: {
        boxShadow: "0px 1px 6px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
