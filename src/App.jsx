import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner'
import AboutMe from './components/aboutMe'
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
              <div className='bg-space bg-cover bg-center bg-no-repeat h-[2300px] 
              relative z-10' 
            //   style={{transform: `translateY(${-offset * 0.8}px)`}}
              >
                 <AboutMe />
              </div>
           </main>
        </>
    )
}

export default App
