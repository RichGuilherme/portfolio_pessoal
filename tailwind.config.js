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
         },
         gradient: {
           100: '#233B74',
           200: '#301C74',
           300: '#6E43CB'
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
          planetaRochosoAnimation : 'planetaRochosoAnimation 20s linear infinite ',
          planetaVermelhoAnimation : 'planetaVermelhoAnimation 10s linear infinite alternate',
          boxLinguageAnim1 : "boxLinguageAnim1 35s linear infinite;",
          boxLinguageAnim2 : "boxLinguageAnim2 35s linear infinite ;",
          fadeOutUp: "fadeOutUp 2s ease forwards 2.2s"
      },
      keyframes : {
          downUpAnimation : {
            "0%" : {},
            "50%" : {transform: "translateY(-20px)" },
            "100%" : {transform: "translateY(20px)" }
      },
         planetaRochosoAnimation : {
          "0%" : {transform: "translateY(0px) rotate(0deg)"},
          "50%" : {transform: "translateY(-30px) rotate(120deg)"},
          "80%" : {transform: "translateY(30px) rotate(240deg)"},
         "100%" : {transform: "translateY(0px) rotate(360deg)"}
        },
         planetaVermelhoAnimation : {
          "0%" : {},
          "50%" : {transform: "translateY(-20px)"},
          "100%" : {transform: "translateY(20px)" }
          },

         boxLinguageAnim1 : {
           "from" : {transform: "translateX(0px);"},
           "to" : {transform: "translateX(calc(-388px*4))"}
         },
         boxLinguageAnim2 :{
           "from" : {transform: "translateX(0px);"},
           "to" : {transform: "translateX(calc(388px*4))"}
         },
         fadeOutUp : {
          "from" : {opacity: "1"},
          "to" : {opacity: "0", transform: "translate3d(0, -100%, 0)"}
        }
    },
  },
  plugins: [],
 }
}

