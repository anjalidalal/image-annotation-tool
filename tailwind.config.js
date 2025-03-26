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
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },

        "surface-primary": "#FFFFFF",
        "surface-grey": "#E7E7EB",
        "text-dark": "#1E1E1E",
        "text-dark-h2": "#323C47",
        "medium-dark": "#707683",
        "primary-bg": "#F8F8F8",
        blue: "#2563EB",

        "cta-error": "#ca3c3c",
        "cta-error-hover": "#a63c45",
        "cta-icon-button-hover": "#f8f5ff",
        "cta-primary-disabled": "#dbdbdb",
        "cta-primary-hover": "#4a328b",

        "cool-blue": "#e7f0fb",
        "ice-blue": "#f2f6ff",
        "icon-grey": "#8e8e8e",
        "icon-white": "#F4F4F4",
        "navigation-rail-icon-default": "#535353",
        "status-error": "#ca3c3c",
        "status-success": "#088c61",
        "status-warning": "#f8b849",
        "surface-background": "#f3f3f3",
        "surface-hover": "#fafafa",
        "surface-stroke": "#dbdbdb",
        accentRed: "#BF4545",
      },
      shadow: {
        headerDropShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.35)",
        crossShadow: "0px 0px 8px rgba(0, 0, 0, 0.16)",
      },
      boxShadow: {
        footerShadow: "0px -4px 10px rgba(149, 149, 149, 0.1)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(33,255,144,0.4) 25%, rgba(172,92,211,0.4) 100%)",
      },
    },
  },
  plugins: [],
};
