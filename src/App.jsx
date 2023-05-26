import { useEffect, useState } from 'react'

import 'aos/dist/aos.css'
import Aos from 'aos'


import './App.css'
import Header from './components/header/Header'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'



function App() {
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {

      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)}, 4300);
    }, []);


   useEffect(() => {
      Aos.init({
         duration: 1700,
      })
   })

   return (
      <>
      {isLoading ? <Loader /> :  
      <> 
         <Header />
         <main >
            <Banner />
            <div
               // fundo com as estrelas
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
      }

      </>
    

   )
}

export default App
