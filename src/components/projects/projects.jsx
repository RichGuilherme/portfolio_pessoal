import ProjetosPessoais from './projetosPessoais'
import Certificados from './certificados'

import planetaRochoso from '../../assets/planeta-rochoso.png'
import { useState } from 'react'

const projects = () => {
  const [showProjectsP, setShowProjectsP] = useState(true)
  const [showCertif, setShowCertif] = useState(false)

  const handleShowProjectsP = () => {
      if(showProjectsP === false){
        setShowProjectsP(true)
        setShowCertif(false)
      }
  }

  const handleShowCertif = () => {
    if(showCertif === false)
      setShowCertif(true)
      setShowProjectsP(false)
    }

  const navItens = "min-w-[71%] sm:min-w-[100%] h-14 border border-primary-200 font-medium text-center pt-4 hover:bg-gradient-to-r from-primary-100 to-secondary-200 cursor-pointer"


  return (
    <section className="flex flex-col items-center w-full font-jost
    text-white relative mt-56">
            <h1>Projetos</h1>

            <img 
             className='w-[250px] h-[230px] sm:max-w-[380px] sm:max-h-[365px] absolute left-0
             animate-downUpAnimation ease-in-out -z-10'
             src={planetaRochoso} 
             alt="planeta rochoso" 
            />

            <p className="text-[24px] font-medium w-11/12 text-center
            mt-5 "> 
            Esse são alguns projetos e certificados acadêmicos</p>

           <nav className="flex items-center justify-center mt-10">
              <div  onClick={handleShowProjectsP} className={navItens + " rounded-l-full"}>
                 Projetos pessoais</div>
              <div onClick={handleShowCertif} className={navItens + " rounded-r-full"} >
                 Certificados</div>
           </nav>

           <div className='w-full mt-20'>
               <ProjetosPessoais  OnOff={showProjectsP}/>
               <Certificados OnOff={showCertif} />
           </div>
    </section>
  )
}

export default projects