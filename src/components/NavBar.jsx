/* eslint-disable react-hooks/rules-of-hooks */
import logo from '../assets/logoRichard-280x680.png'
import bandeiraBrasil from '../assets/iconsBandeiras/brazil.svg'
import bandeiraUSA from '../assets/iconsBandeiras/USA.svg'
import IconsRedeSocais from './IconsRedeSocais';

import { IoIosArrowDown, IoIosClose, IoIosMenu } from "react-icons/io";

import { useEffect, useState } from "react"

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
     const onScroll = () => {
       if(window.scrollY > 50){
         setScrolled(true)
       }else {
         setScrolled(false)

       }
     }

     window.addEventListener("scroll", onScroll)

     return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [{
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Sobre Mim",
  },
  {
    id: 3,
    link: "Projetos",
  },
  {
    id: 4,
    link: "Habilidades",
  }
]

  return (

     <header className={`h-24 text-white w-screen z-50 fixed ${scrolled ? "bg-black" : ""} 
     ease-linear duration-700`}>
        <div className='flex flex-row justify-between items-center mx-auto h-24 w-9/12 
        max-lg:w-10/12 my-1 '>

            <div className='w-40 h-16 min-w-40 mr-5 mb-5'>
                <img 
                src={logo} 
                alt="minha logo" /> 
            </div>
    
            <nav className='flex flex-row justify-between items-center gap-10 max-lg:hidden'>
                    <ul className='flex flex-row justify-between items-center gap-10'>
                        {links.map(({id, link}) => (
                             <li key={id} 
                             className='text-lg text-white text-center font-inter 
                                hover:opacity-80 cursor-pointer'
                             >
                            {link}
                            </li>
                        ))}
                    </ul>

                   <button className='border border-white py-5 px-9 relative group'>

                        <div className='absolute bg-white w-0 h-full top-0 left-0 duration-500
                          group-hover:block group-hover:duration-500 
                          group-hover:w-full'>
                        </div>

                        <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
                             Vamos Conectar
                        </span>
                   </button>

                   <div className='flex flex-row items-center gap-x-2 border border-white
                     py-1 px-2 cursor-pointer'>

                        <img 
                        className='w-6 h-5'
                        src={bandeiraBrasil} 
                        alt="iconsBrasl" 
                        />

                        <IoIosArrowDown />

                        <span className='hidden'>
                            <img 
                            src={bandeiraUSA} 
                            alt="icon Estado Unidos" 
                            />
                        </span>
                   </div>
            </nav>



              <div 
              onClick={() => setNav(!nav)}
              className='hidden max-lg:block cursor-pointer z-10'>

              {nav ?  <IoIosClose size={39}/> : <IoIosMenu size={39}/>} 
              </div>
              {nav && 
                      <ul className='w-full h-screen flex flex-col justify-center items-center 
                      absolute top-0 left-0 bg-gray-900 gap-9 '>
                          {links.map(({id, link}) => (
                                    <li key={id} 
                                    className='text-4xl text-white text-center font-inter 
                                       hover:opacity-80  cursor-pointer'
                                    >
                                   {link}
                                   </li>
                               ))}
       
                             
                               <div className='flex flex-row items-center absolute bottom-20'>
                                   <div className='h-1 bg-white w-24 mr-10 rounded-md'></div>
                                       <IconsRedeSocais flexDirection="flex-row"/>
                                   <div className='h-1 bg-white w-24 ml-10 rounded-md'></div>
                               </div>
                      </ul>
              }
        </div>
    </header>
  )
}

export default NavBar