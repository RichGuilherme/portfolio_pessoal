import { FiArrowRight } from "react-icons/fi"

import bannerAstronauta from "../../assets/astronauta-fofo.png"
import astronautaRocket from "../../assets/astronauta-rocket.png"

import TypeWrite from "./typeWrite.jsx"
import IconsRedeSocais from "../iconsRedeSocais"



const banner = () => {

  

  return (
    <div className='h-screen w-full relative font-inter'>
      <div className="bg-banner bg-cover bg-center bg-no-repeat bg-fixed h-full brightness-60"></div>
       
       <div className='absolute top-60 w-full' >
               <div className="flex flex-col items-center w-7 absolute left-16 
               top-72 max-md:hidden">
             
                   <IconsRedeSocais flexDirection="flex-col" />
                  <div className="h-24 bg-white w-1 mt-10 rounded-md"></div>
               </div>
               
          <div className="flex flex-row justify-evenly items-center w-8/12 mx-auto max-lg:flex-col 
          max-lg:items-center max-lg:justify-center">
            
               <div className="flex flex-col justify-start text-white max-lg:items-center">
                   <img 
                   className="w-28 h-28 animate-downUpAnimation"
                   src={astronautaRocket}
                   alt="astronauta em uma rocket" 
                   />
       
                   <div className="border border-gray-300 text-center py-2.5 w-72 bg-gradient-to-r
                   from-primary-100 to-secondary-200">
                      <span className="font-bold text-lg">Bem vindo ao meu portfólio!</span>
                   </div>
       
                   <h1 className="mt-10 text-6xl font-extrabold max-lg:text-center">Oi!Sou Richard,
                   <p className="text-primary-200">
                     {/* <TypeWrite text="teste"/> */}
                     desenvolvedor web
                   </p></h1>
       
                   <a className="flex flex-row items-center mt-5 group" href="">
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
               className="w-5/12 h-full ml-3 drop-shadow-3xl max-md:hidden"
               src={bannerAstronauta}
               alt="astronauta trabalhando em frente o computador" 
               />
          </div>

      </div>
    </div>
  )
}

export default banner