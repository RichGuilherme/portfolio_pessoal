import { useTranslation } from 'react-i18next'
import planetaVermelho from '../../assets/planeta-vermelho.png'

import BoxsAnimat from './BoxsAnimat'

const Skills = () => {
  const {t} = useTranslation()

  return (

    <section id="habilidades" 
    className='flex flex-col items-center w-full font-jost text-white relative mt-32 '>
      <h1 data-aos="fade-up">{t("navBar.0.skills")}</h1>

      <img
        className='w-[250px] h-[240px] sm:max-w-[380px] sm:max-h-[365px] absolute 
        right-8 bottom-52 z-[-1] max-sm:bottom-20 animate-planetaVermelhoAnimation animate-planetaVermelhoAnimationRotate'
        src={planetaVermelho}
        alt={t("skills.0.planet red")}
      />

      <div className='max-w-full relative mt-20 overflow-hidden lg:w-[1134px]'>
        <BoxsAnimat />
      </div>

    </section>
  )
}

export default Skills