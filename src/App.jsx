import './App.css'
import Header from './components/header/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'

import { useEffect } from 'react'

import 'aos/dist/aos.css'
import Aos from 'aos'



function App() {
   useEffect(() => {
      Aos.init({ 
         duration: 1700,
               })
   })

   return (
      <>
         <Header />
         <main >
            <Banner />
            {/* Fundo de estrelas */}
            <div
            name="Imagem-de-fundo-space" 
            className='bg-space bg-cover bg-center bg-no-repeat h-full relative z-10' >
               <AboutMe />
               <Skills />
               <Projects />
            </div>
            <Contact />
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   )
}

export default App
