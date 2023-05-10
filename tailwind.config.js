/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
         banner : "url('./assets/fundo-banner.png')",
         space : "url('./assets/fundo-space.jpg')"
      },
      colors : {
         primary: {
           100: '#6e43cb80',
           200: '#6E43CB',
         },
         secondary: {
           100: '#13132a59',
           200: '#14142b80',
           300: '#14142B'
         }
      },
      fontFamily : {
         jost: ['jost', 'sans-serif'],
         inter: ['Inter', 'sans-serif']
      },
      brightness :{
         60: '.60'
      },
      dropShadow : {
         "3xl" : "5px 4px 4px rgba(0, 0, 0, 1)"
      },
      boxShadow : {
         container : "0px 3px 6px 3px rgba(255, 255, 255, 0.28)"
      },
      animation : {
          downUpAnimation : 'downUpAnimation 3s linear infinite alternate',
          boxLinguageAnim1 : "boxLinguageAnim1 25s ease-in-out infinite alternate;",
          boxLinguageAnim2 : "boxLinguageAnim2 25s ease-in-out infinite alternate;"
      },
      keyframes : {
          downUpAnimation : {
            "0%" : {},
            "50%" : {transform: "translateY(-20px)"},
           "100%" : {transform: "translateY(20px)"}
      },
         boxLinguageAnim1 : {
           "from" : {transform: "translateX(-52%)"},
           "to" : {transform: "translateX(0%)"}
         },
         boxLinguageAnim2 :{
          "from" : {transform: "translateX(0%)"},
          "to" : {transform: "translateX(-52%)"}
         }
    },
  },
  plugins: [],
 }
}

