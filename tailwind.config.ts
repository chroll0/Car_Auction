import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        blue: { 10: "#1572D3" },
        purple: { 100: "#6E34B9" },
        darkBlue: { 100: "#0F172A", 200: "#2A16A6" },
        gray: { 100: "#959595", 50: "#6D6D6D", 10: "#D4D4D8" },
        black: { 100: "#090914", 90: "#242424" },
        skyBlue: { 100: "#7098FFA1", 10: "#ECF5FF" },
        // Define gradients outside of the colors object
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(180deg, #9847FF 18.5%, rgba(40, 0, 91, 0.87) 82%)",
        "gray-gradient":
          "linear-gradient(180deg, rgba(44, 80, 172, 0.12) 0%, rgba(18, 33, 70, 0.12) 100%)",
        "lightGray-gradient":
          "linear-gradient(89.92deg, rgba(255, 255, 255, 0.7) 0.05%, rgba(223, 232, 255, 0.7) 87.84%)",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      boxShadow: {
        "3xl": "0 0 15px 3px rgba(0, 0, 0, 0.1)",
        "4xl": "0 8px 20px 1px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
