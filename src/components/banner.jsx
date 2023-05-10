import { FiArrowRight } from "react-icons/fi"

import bannerAstronauta from "../assets/astronauta-fofo.png"
import astronautaRocket from "../assets/astronauta-rocket.png"

import IconsRedeSocais from "./iconsRedeSocais"
import { WriteTextType } from "./writeTextType"
import { useState, useEffect } from "react"

const banner = () => {
  const [scrolled, setScrolled] = useState(false)
  const [offset, SetOffset] = useState(0)

  
  const handleScroll = () => SetOffset(window.pageYOffset)
  
  useEffect(() => {
     const onScroll = () => {
       if(window.scrollY > 861){
         setScrolled(true)
         
       }else{
         setScrolled(false)
       }
     }

     window.addEventListener("scroll", onScroll)

     return () => window.removeEventListener("scroll", onScroll)
  }, [])
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
 }, [])


  return (
    <div className='h-screen w-full relative font-inter'>
      <div className="bg-banner bg-cover bg-center bg-no-repeat bg-fixed h-full brightness-60 
      relative" ></div>
       
       <div className="absolute top-60 w-full ease-in" 
            style={{transform: `translateY(${offset * 0.8}px)`}}>

               <div className="flex flex-col items-center w-7 absolute left-16 
               top-72 max-md:hidden">
             
                   <IconsRedeSocais flexDirection="flex-col" />
                   <div className="h-24 bg-white w-1 mt-10 rounded-md"></div>
               </div>
               
          <div className="flex flex-row gap-10 justify-evenly items-center w-8/12 h-[430px] mx-auto 
          max-lg:flex-col max-lg:items-center max-lg:gap-12 max-lg:justify-center">
            
               <div className="flex flex-col justify-start min-w-[448px] text-white max-lg:items-center">
                   <img 
                   className="w-28 h-28 animate-downUpAnimation"
                   src={astronautaRocket}
                   alt="astronauta em uma rocket" 
                   />
       
                   <div className="border border-gray-300 text-center py-2.5 w-72 bg-gradient-to-r
                   from-primary-100 to-secondary-200">
                      <span className="font-bold text-lg">Bem vindo ao meu portfólio!</span>
                   </div>
       
                   <h2 className="mt-10 text-6xl font-extrabold max-lg:text-center">
                    Oi!Sou Richard,
                      <p className="text-primary-200 max-w-xs max-lg:text-left">
                        {scrolled ? "" :
                           <WriteTextType texto={["Desenvolvedor Web", "Desenvolvedor Fron-end"]} 
                           cursor="true" loops="{}"/>
                        }
                      </p>
                   </h2>
       
                   <a className="flex flex-row items-center mt-7 group cursor-pointer" 
                   href="">
                        <p className="text-lg font-bold">
                          Download CV
                        </p>

                        <span className="border border-white rounded-full ml-1 duration-300 group-hover:ml-3 
                        group-hover:duration-300 ">
                            <FiArrowRight size={18}/>
                        </span>
                   </a>
               </div>

               <img 
               className="w-5/12 h-11/12 drop-shadow-3xl max-md:hidden"
               src={bannerAstronauta}
               alt="astronauta trabalhando em frente o computador" 
               />
          </div>

      </div>
    </div>
  )
}

export default banner