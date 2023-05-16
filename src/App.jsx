import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner'
import AboutMe from './components/aboutMe'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact'
import Footer from './components/footer'
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
            {/* // style={{transform: `translateY(${-offset * 0.8}px)`}} */}
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
