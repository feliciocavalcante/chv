/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        // Tons escuros predominantes
        primary: "#1a1a1a", // Fundo principal
        secondary: "#2a2a2a", // Elementos secundários, cards
        tertiary: "#3a3a3a", // Bordas, divisores

        // Branco para respiro visual
        white: "#ffffff",
        "white-50": "rgba(255, 255, 255, 0.5)",

        // Amarelo premium claro para CHV Run e destaques
        accent: "#FFD700", // Ouro/Amarelo premium
        "accent-dark": "#CCAA00", // Um tom mais escuro do amarelo para hover
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Exemplo de fonte moderna
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
