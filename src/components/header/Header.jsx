/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import { IoIosClose, IoIosMenu } from "react-icons/io";
import useScrolled from '../../hook/useScrolled';
import { useTranslation } from "react-i18next";

import ChooseLanguage from './ChooseLanguage';

// import logo from '../../assets/logoRichard-280x680.png'
import IconsRedeSocais from '../IconsRedeSocais';
import { IoCodeSlashOutline } from "react-icons/io5";


const Header = () => {
  const [navMobile, setNavMobile] = useState(false)
  const { t } = useTranslation()
  const [scrolled] = useScrolled(50)

  const links = [{
    id: 1,
    link: "Home",
    href: "#"
  },
  {
    id: 2,
    link: t("navBar.0.about me"),
    href: "#sobreMim"
  },
  {
    id: 3,
    link: t("navBar.0.skills"),
    href: "#habilidades"
  },
  {
    id: 4,
    link: t("navBar.0.projects"),
    href: "#projetos"
  }
  ]

  const Logo = (
    <a
      href='#'
      className='w-40 h-16 min-w-[160px] mr-5 mb-5'>
      <div className="flex flex-col items-center">
        <IoCodeSlashOutline size={37} className="text-primary-200" />
        <div className="text-xl font-semibold tracking-wide flex flex-col items-center ">
            RichGuilherme
        </div>
      </div>
    </a>
  )

  const Nav = (
    <nav className='flex flex-row justify-between items-center gap-10'>
      <ul className='flex flex-row justify-between items-center gap-10'>
        {links.map(({ id, link, href }) => (
          <li key={id}
            className='text-lg text-white font-inter max-w-[100px] relative  
                                cursor-default'
          >
            <a href={href}
              className=' h-full w-full block break-normal
              after:w-full after:h-[1px] after:bg-primary-200 after:block after:scale-0 
              after:transition-transform after:duration-500 hover:after:scale-100'
            >
              {link}</a>
          </li>
        ))}

        <a className='border border-white py-[18px] text-center text-lg px-[19px] min-w-[165px] relative 
           before:w-0 before:h-full before:bg-white before:absolute before:top-0 before:left-0 
           before:duration-500 hover:before:w-full group'
          href='#conectar'>
          <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
            {t("navBar.0.connect")}
          </span>
        </a>

      </ul>
    </nav>
  )


  return (

    <header className={`h-24 text-white w-screen z-50 fixed ${scrolled ? "bg-black/50 backdrop-blur-md" : ""} 
     ease-linear duration-700`}>

      <div className='flex flex-row justify-between items-center mx-auto h-24 w-9/12 max-xl:w-10/12
      my-1 '>

        {Logo}

        <div className="max-lg:hidden flex flex-row items-center gap-5">
          {Nav}
          <ChooseLanguage />
        </div>

        <div
          onClick={() => setNavMobile(!navMobile)}
          className='hidden max-lg:block cursor-pointer z-10'>
          {navMobile ? <IoIosClose size={39} /> : <IoIosMenu size={39} />}
        </div>



        {navMobile &&
          <aside
            data-aos="fade-left"
            className='w-7/12 max-sm:w-full h-screen absolute top-0 right-0 bg-[#000000e6]'>

            <ul className='h-full flex flex-col justify-center items-center gap-9 '>
              {links.map(({ id, link, href }) => (
                <li key={id}
                  className='text-4xl text-white text-center font-inter hover:text-primary-200 
                          cursor-pointer'
                >
                  <a href={href}
                    onClick={() => setNavMobile(!navMobile)}>
                    {link}
                  </a>
                </li>
              ))}

              <ChooseLanguage />

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

export default Header