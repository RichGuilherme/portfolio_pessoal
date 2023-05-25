import { FiArrowRight } from "react-icons/fi"
import { WriteTextType } from "./WriteTextType"
import { useTranslation } from "react-i18next"


import bannerAstronauta from "../assets/astronauta-fofo.png"
import astronautaRocket from "../assets/astronauta-rocket.png"
import IconsRedeSocais from "./IconsRedeSocais"
import curriculoPDF from '../assets/currículo.pdf'



const Banner = () => {
  const { t } = useTranslation()


  return (

    <section className='h-screen w-full relative font-inter'>
      <div className="bg-banner bg-cover bg-center bg-no-repeat bg-fixed h-screen w-full
       brightness-60 relative" ></div>


        <div className="absolute top-52 w-full">

          <div 
          data-aos="fade-up"
          className="flex flex-col items-center w-7 absolute left-16 
               top-72 max-md:hidden">

            <IconsRedeSocais flexDirection="flex-col" />
            <div className="h-24 bg-white w-1 mt-10 rounded-md"></div>
          </div>

          <div 
          data-aos="zoom-in"
          className="flex flex-row gap-10 justify-evenly items-center w-8/12 h-[430px] mx-auto 
          max-lg:flex-col max-lg:items-center max-lg:gap-12 max-lg:justify-center">

            <div className="flex flex-col justify-start min-w-[15%] text-white 
               max-lg:items-center max-sm:">
              <img
                className="w-28 h-28 animate-downUpAnimation"
                src={astronautaRocket}
                alt={t("banner.0.icon astronaut with rocket")}
              />

              <div className="border border-gray-300 text-center py-2.5 w-[279px] bg-gradient-to-r
                   from-primary-100 to-secondary-200">
                   <span className="font-bold text-lg max-sm:text-base ">
                     {t("banner.0.welcome")}
                   </span>
              </div>

              <h2 className="mt-10 text-6xl font-extrabold max-lg:text-center max-sm:text-4xl">
              {t("banner.0.I'm")}
                <p className="text-primary-200 max-w-[330px] max-lg:text-left">
                    <WriteTextType texto={[t("banner.0.web developer"), t("banner.0.front-end developer")]}
                      cursor="true" loops="{}" />
                </p>
              </h2>

              <a className="flex flex-row items-center mt-7 group cursor-pointer" 
              href={curriculoPDF} target="_blank" rel="noreferrer">
                <p className="text-lg font-bold">
                  {t("banner.0.resume")}
                </p>

                <span className="border border-white rounded-full ml-1 duration-300 group-hover:ml-3 
                        group-hover:duration-300 ">
                  <FiArrowRight size={18} />
                </span>
              </a>
            </div>

            <img
              className="w-5/12 h-11/12 drop-shadow-3xl hidden md:block"
              src={bannerAstronauta}
              alt={t("banner.0.icon astronaut in front of the computer")}
            />
          </div>

        </div>
    </section>
  )
}

export default Banner