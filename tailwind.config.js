/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          blue: "#313DE8",
          denim: "#030417",
          cloud: "#EBF4FB",
          white: "#FFFFFF",
          rhino: "#D9D9D9",
        },
        secondary: {
          cerulean: "#398FCF",
          babyBlue: "#7BB7E3",
        },
      },
      screens: {
        s: "500px",
        sm: "640px",
        md: "768px",
        m: "890px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      lineHeight: {
        tight: "1.12rem",
        s: "1.52rem",
        m: "1.8rem",
        l: "3.5rem",
      },
      letterSpacing: {
        m: "2px",
        l: "5px",
        xl: "10px",
        "2xl": "20px",
        "3xl": "30px",
        "4xl": "40px",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(230deg, rgba(49,61,232,1) 59%, rgba(57,143,207,1) 100%)`,
      },
      dropShadow: {
        "6xl": "5px 7px 11px 0px #000000",
      },
      extend: {
        gridTemplateColumns: {
          4: "repeat(4, minmax(180px, 1fr))",
        },
      },
    },
  },
  plugins: [],
};
