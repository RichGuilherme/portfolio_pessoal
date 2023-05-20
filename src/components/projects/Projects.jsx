/* eslint-disable react-hooks/rules-of-hooks */
import ProjetosPessoais from './ProjetosPessoais'
import Certificados from './Certificados'

import planetaRochoso from '../../assets/planeta-rochoso.png'
import { useState } from 'react'

const Projects = () => {
  const [showProjectsP, setShowProjectsP] = useState(true)
  const [showCertif, setShowCertif] = useState(false)

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

  const navItens = "min-w-[71%] sm:min-w-[100%] h-14 border border-primary-200 font-medium text-center pt-4 hover:bg-gradient-to-r from-primary-100 to-secondary-200 cursor-pointer"


  return (
    <section id="projetos" 
    className="flex flex-col items-center w-full font-jost text-white relative mt-48">

      <img
        className='w-[250px] h-[249px] sm:max-w-[380px] sm:max-h-[365px] absolute left-0
        animate-planetaRochosoAnimation -z-10'
        src={planetaRochoso}
        alt="planeta rochoso"
      />
      <div 
      data-aos="fade-up" data-aos-delay="150"
      className='flex flex-col items-center'>
          <h1>Projetos</h1>
    
          <p className="text-[24px] font-medium w-11/12 text-center
                mt-5 ">
            Esse são alguns projetos e certificados acadêmicos</p>
    
          <nav className="flex items-center justify-center mt-10">
            <div onClick={handleShowProjectsP} className={navItens + " rounded-l-full"}>
              Projetos pessoais</div>
            <div onClick={handleShowCertif} className={navItens + " rounded-r-full"} >
              Certificados</div>
          </nav>
      </div>

      <div className='w-full mt-20 mb-32'>
        <ProjetosPessoais OnOff={showProjectsP} />
        <Certificados OnOff={showCertif} />
      </div>
    </section>
  )
}

export default Projects