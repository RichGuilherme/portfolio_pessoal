/* eslint-disable react-hooks/rules-of-hooks */
import logo from '../assets/logoRichard-280x680.png'
import bandeiraBrasil from '../assets/iconsBandeiras/brazil.svg'
import bandeiraUSA from '../assets/iconsBandeiras/USA.svg'
import IconsRedeSocais from './IconsRedeSocais';

import { IoIosArrowDown, IoIosClose, IoIosMenu } from "react-icons/io";

import { useState } from "react"
import useScrolled from '../hook/useScrolled';

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [showCountry, setShowCountry] = useState(false)
  const [scrolled] = useScrolled(50)

  const links = [{
    id: 1,
    link: "Home",
    href: "#"
  },
  {
    id: 2,
    link: "Sobre Mim",
    href: "#sobreMim"
  },
  {
    id: 3,
    link: "Projetos",
    href: "#projetos"
  },
  {
    id: 4,
    link: "Habilidades",
    href: "#habilidades"
  }
  ]

  return (

    <header className={`h-24 text-white w-screen z-50 fixed ${scrolled ? "bg-black" : ""} 
     ease-linear duration-700`}>
      <div className='flex flex-row justify-between items-center mx-auto h-24 w-9/12 
        max-lg:w-10/12 my-1 '>

        <div className='w-40 h-16 min-w-[160px] mr-5 mb-5'>
          <img
            className=''
            src={logo}
            alt="minha logo" />
        </div>

        <nav className='flex flex-row justify-between items-center gap-10 max-lg:hidden'>
          <ul className='flex flex-row justify-between items-center gap-10'>
            {links.map(({ id, link, href }) => (
              <li key={id}
                className='text-lg text-white text-center font-inter 
                                cursor-default'
              >
                <a href={href}
                  className='hover:text-primary-200 h-full w-full block'
                >
                  {link}</a>
              </li>
            ))}
            <a className='border border-white py-[18px] px-[32px] relative 
            before:w-0 before:h-full before:bg-white before:absolute before:top-0 before:left-0 
            before:duration-500 hover:before:w-full group' 
            href='#conectar'>
              <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
                Vamos Conectar
              </span>
            </a>
          </ul>


          <div className='flex flex-row items-center gap-x-2 border border-white py-1 px-2 
          cursor-pointer relative group min-w-[70px]' onClick={() => setShowCountry(!showCountry)}>
            <img
              className='w-7 h-6'
              src={bandeiraBrasil}
              alt="iconsBrasl"
            />
            <IoIosArrowDown className='group-hover:animate-bounce' />

            {showCountry &&
              <span className='absolute top-9 left-0 w-full h-full flex flex-col gap-2
            mt-1'>
                <div className='hover:bg-secondary-300 flex justify-center'>
                  <img
                    className='w-9 h-7 '
                    src={bandeiraBrasil}
                    alt="icon da bandeira do Brasil"
                  />

                </div>
                <div className='hover:bg-secondary-300 flex justify-center'>
                  <img
                    className='w-9 h-7 '
                    src={bandeiraUSA}
                    alt="icon Estado Unidos"
                  />
                </div>
              </span>
            }
          </div>

        </nav>


        <div
          onClick={() => setNav(!nav)}
          className='hidden max-lg:block cursor-pointer z-10'>
          {nav ? <IoIosClose size={39} /> : <IoIosMenu size={39} />}
        </div>

        {nav &&
          <aside className='w-7/12 h-screen absolute top-0 right-0 bg-black opacity-95'>
            <ul className='h-full flex flex-col justify-center items-center gap-9 '>
              {links.map(({ id, link, href }) => (
                <li key={id}
                  className='text-4xl text-white text-center font-inter hover:text-primary-200 
                          cursor-pointer'
                >
                  <a href={href} 
                  onClick={() => setNav(!nav)}>
                    {link}
                  </a>
                </li>
              ))}

              <div className='flex flex-row items-center gap-x-2 border border-white py-1 px-2 
          cursor-pointer relative group min-w-[70px]' onClick={() => setShowCountry(!showCountry)}>
                <img
                  className='w-7 h-6'
                  src={bandeiraBrasil}
                  alt="iconsBrasl"
                />
                <IoIosArrowDown className='group-hover:animate-bounce' />

                {showCountry &&
                  <span className='absolute top-9 left-0 w-full h-full flex flex-col gap-2 mt-1'>
                    <div className='hover:bg-secondary-300 flex justify-center'>
                      <img
                        className='w-9 h-7 '
                        src={bandeiraBrasil}
                        alt="icon da bandeira do Brasil"
                      />

                    </div>
                    <div className='hover:bg-secondary-300 flex justify-center'>
                      <img
                        className='w-9 h-7 '
                        src={bandeiraUSA}
                        alt="icon Estado Unidos"
                      />
                    </div>
                  </span>
                }
              </div>

              <div className='absolute bottom-20'>
                <IconsRedeSocais flexDirection="flex-row" />
              </div>
            </ul>
          </aside>
        }
      </div>
    </header>
  )
}

export default NavBar