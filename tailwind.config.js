const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Utilise la classe 'dark' pour activer le mode sombre
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border, 210, 16%, 93%))",
        input: "hsl(var(--input, 210, 16%, 93%))",
        ring: "hsl(var(--ring, 210, 22%, 49%))",
        background: "hsl(var(--background, 0, 0%, 100%))",
        foreground: "hsl(var(--foreground, 0, 0%, 0%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 162, 47%, 50%))", // green as default
          foreground: "hsl(var(--primary-foreground, 162, 100%, 95%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 258, 71%, 60%))", // violet as secondary
          foreground: "hsl(var(--secondary-foreground, 258, 100%, 95%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 348, 86%, 61%))",
          foreground: "hsl(var(--destructive-foreground, 348, 100%, 95%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 210, 16%, 93%))",
          foreground: "hsl(var(--muted-foreground, 210, 22%, 49%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 162, 47%, 50%))", // green as default
          foreground: "hsl(var(--accent-foreground, 162, 100%, 95%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0, 0%, 100%))",
          foreground: "hsl(var(--popover-foreground, 0, 0%, 0%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0, 0%, 100%))",
          foreground: "hsl(var(--card-foreground, 0, 0%, 0%))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
