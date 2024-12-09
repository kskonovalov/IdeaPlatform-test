module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196f3",
        secondary: "#f2fcff",
        accent: "#ff6d00",
        text: "#4b4b4b",
        border: "#dde0e0",
        background: "#f3f7fa",
      },
      screens: {
        "2xl": "1920px",
        xl: "1440px",
        lg: "1280px",
        md: "960px",
        sm: "480px",
      },
      borderRadius: {
        m: "20px",
      },
      spacing: {
        s: "10px",
        m: "20px",
        l: "30px",
        xl: "40px",
      },
      boxShadow: {
        card: "0 0 40px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
