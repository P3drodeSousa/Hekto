/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      height: {
        homeSlider: "764px",
        homeBanner: "462px",
      },
      leading: {
        homeSlider: "82px",
      },
      colors: {
        pink: "#FB2E86",
        red: "#FB2448",
        blue: "#2F1AC4",
        OffNavyBlue: "#3F509E",
        navyblue: "#151875",
        skyBlue: "rgba(243, 249, 255, 1)",
        pantonePurple: "#E0D3F5",
        purple: "#7E33E0",
        offPurple: "#9F63B5",
        offBlue: "#151875",
        gray: "#F6F7FB",
        offGreen: "#05E6B7",
        featuredCard: "#EEEFFB",
        featuredDetails: "#08D15F",
        featuredDots: "#FEBAD7",
        linearBg: "#F7F7F7",
        shonex: "rgba(26, 11, 91, 0.3);",
        trending: "#F1F0FF",
        trendingParagraph: "#ACABC3",
        trendingshowcase: "#F5F6F8",
        trendingShowcaseBox: "#FFF6FB",
        homeSliderPara: "#8A8FB9",
        blogCardPara: "#72718F",
        footer: "#E7E4F8",
        pageBanner: "#F6F5FF",
        pageBannerTitle: "#101750",
        pageFormPar: "#9096B2",
        formborder: "#C2C5E1",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
