import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
   const [offset, SetOffset] = useState(0)

   const handleScroll = () => SetOffset(window.pageYOffset)
 
   
   useEffect(() => {
     window.addEventListener("scroll", handleScroll)
 
     return () => window.removeEventListener("scroll", handleScroll)
  }, [])
 

    return(
        <>
           <NavBar/>
           <main >
              <Banner />
              {/* Fundo de estrelas */}
              <div className='bg-space bg-cover bg-center bg-no-repeat h-full relative z-10' >
             {/* style={{transform: `translateY(${-offset * 0.8}px)`}} */}
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
