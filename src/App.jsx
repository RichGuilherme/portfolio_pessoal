import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
// import { useState, useEffect } from 'react'

function App() {

   // const handleScroll = () => SetOffset(window.pageYOffset)


   // useEffect(() => {
   //    window.addEventListener("scroll", handleScroll)

   //    return () => window.removeEventListener("scroll", handleScroll)
   // }, [])


   return (
      <>
         <NavBar />
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
