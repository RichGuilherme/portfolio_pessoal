/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next"
import { useState } from "react"

import PersonalProject from "./PersonalProjects"
import Certificate from "./Certificate"

import planetaRochoso from "../../assets/planeta-rochoso.png"

const Projects = () => {
  const [showProjectsP, setShowProjectsP] = useState(true)
  const [showCertif, setShowCertif] = useState(false)
  const {t} = useTranslation()
 
  const handleShowProjectsP = () => {
    if (showProjectsP === false) {
      setShowProjectsP(true)
      setShowCertif(false)
    }
  }

  const handleShowCertif = () => {
    if (showCertif === false)
      setShowCertif(true)
    setShowProjectsP(false)
  }

  const navItens = "min-w-[71%] sm:min-w-[100%] h-14 border border-primary-200 font-medium text-center text-lg tracking-wider pt-4 hover:bg-gradient-to-r from-primary-100 to-secondary-200 cursor-pointer"


  return (
    <section id="projetos" 
    className="flex flex-col items-center w-full font-jost text-white relative mt-48">

      <img
        className='w-[250px] h-[249px] sm:max-w-[380px] sm:max-h-[365px] absolute left-0
        animate-planetaRochosoAnimation -z-10'
        src={planetaRochoso}
        loading="lazy"
        alt={t("projects.0.rocky planet")}
      />
      <div 
      data-aos="fade-up" data-aos-delay="150"
      className='flex flex-col items-center'>
          <h1>{t("navBar.0.projects")}</h1>
    
          <p className="text-[24px] font-medium w-11/12 text-center
                mt-5 ">
           {t("projects.0.projects and certificates")}</p>
    
          <nav className="flex items-center justify-center mt-10">
            <div onClick={handleShowProjectsP} className={navItens + " rounded-l-full"}>
            {t("projects.0.personal projects")}</div>
            <div onClick={handleShowCertif} className={navItens + " rounded-r-full"} >
            {t("projects.0.certificates")}</div>
          </nav>
      </div>

      <div className='w-full mt-20 mb-32'>
        <PersonalProject OnOff={showProjectsP} />
        <Certificate OnOff={showCertif} />
      </div>
    </section>
  )
}

export default Projects