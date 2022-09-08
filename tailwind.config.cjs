/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        Opensea_gradient_button:
          "linear-gradient(52.36deg, #15B2E5 4.41%, #2081E2 91.6%)",
        header_gradient_border:
          "linear-gradient(269.93deg, #4481EB 0.11%, #04BEFE 100.02%)",
        navlink_bedroom_gradient:
          "linear-gradient(91.74deg, #F4C4F3 3.03%, #FC67FA 97.01%)",
        dandy_dragon_hero_gradient:
          "linear-gradient(90.36deg, #00BDF0 0.25%, #005BEA 96.44%)",
        dandy_team_gradient:
          "linear-gradient(270.34deg, rgba(135, 0, 199, 0.85) 9.14%, rgba(210, 0, 177, 0.85) 99.7%, rgba(0, 0, 0, 0.95))",
        dandy_dragon_about_gradient:
          "linear-gradient(90.65deg, #4FACFE 0.27%, #00F2FE 99.82%)",
        Blue_about_button_gradient:
          "linear-gradient(91.93deg, #007ADF 0.45%, #00ECBC 95.15%)",
        Red_about_button_gradient:
          "linear-gradient(90.96deg, #D51A30 0.58%, #FF005C 99.42%)",
        footer_gradient_border:
          "linear-gradient(91deg, #4481EB 0.19%, #04BEFE 98.84%)",
      },
    },
  },
  plugins: [],
};
