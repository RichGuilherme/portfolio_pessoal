/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'

import calculadoraReact from '../../assets/projetosPessoaisImg/calculadora-react-img.png'
import weatherProject from '../../assets/projetosPessoaisImg/weather-project.png'
import LOLPages from '../../assets/projetosPessoaisImg/league-of-legends-page.png'
import projetoPessoal from '../../assets/projetosPessoaisImg/projeto-pessoal.png'


const ProjetosPessoais = ({ OnOff = true }) => {
  const { t } = useTranslation()
  const [on, setOn] = useState(true)

  useEffect(() => {
    setOn(OnOff)
  })


  const listProjetcs = [
    {
      id: 1,
      href: "https://richguilherme.github.io/calculadora_React/",
      github: "https://github.com/RichGuilherme/calculadora_React",
      img: calculadoraReact,
      title: t("projects.1.react calculator.title"),
      tecnologias: "React - Css - Js",
      descrition: t("projects.1.react calculator.descrition")
    },
    {
      id: 2,
      href: "https://richguilherme.github.io/weather-project/",
      github: "https://github.com/RichGuilherme/weather-project",
      img: weatherProject,
      title: "Weather Project",
      tecnologias: "React - Css - Js - Axios - Api",
      descrition: t("projects.1.weather project.descrition")
    },
    {
      id: 3,
      href: "https://richguilherme.github.io/page-league-of-legends/",
      github: "https://github.com/RichGuilherme/page-league-of-legends",
      img: LOLPages,
      title: "LOL pages",
      tecnologias: "Html - Css - Js",
      descrition: t("projects.1.lol pages.descrition")
    },
    {
      id: 4,
      href: "/",
      github: "https://github.com/RichGuilherme/portfolio_pessoal",
      img: projetoPessoal,
      title: t("projects.1.personal portfolio.title"),
      tecnologias: "React - Tailwind - Js - I18n",
      descrition: t("projects.1.personal portfolio.descrition")
    },
  ]


  const titleHover = "font-bold text-3xl text-primary-200 opacity-0 group-hover:opacity-100 duration-700"
  const tecnologiasHover = 'text-xl font-semibold mb-4 opacity-0 group-hover:opacity-100 duration-1000'
  const descritionHover = 'font-light text-lg text-center opacity-0 group-hover:opacity-100 duration-700'
  const iconsHover = 'opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-primary-200 cursor-pointer'
  const boxsProjects = "h-[270px] w-full rounded-3xl relative before:cursor-default overflow-hidden max-w-sm before:bg-[#0a1629] before:opacity-80 before:w-full before:h-0 before:absolute before:duration-[900ms] hover:before:h-full group "

  return (
    <div
      className={`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>

      {listProjetcs.map(({ id, img, title, descrition, github, href, tecnologias }) => (
        <div
          data-aos="zoom-in"
          key={id} className={boxsProjects}>
          <img
            className="object-cover object-center h-full w-full"
            src={img}
            alt={title} 
          />

          <span className="absolute top-0 left-0 flex flex-col gap-3 items-center
            w-full h-full py-[10px] px-2 mt-1">
            <h2 className={titleHover}>
              {title}</h2>

            <h3 className={tecnologiasHover}>
              {tecnologias}</h3>

            <p className={descritionHover}>
              {descrition}</p>

            <div className='flex flex-row gap-4 mt-8'>
              <a href={github} rel="noreferrer" target="_blank">
                <FiGithub size={28}
                  className={iconsHover} />
              </a>

              <a href={href} rel="noreferrer" target="_blank" >
                <HiOutlineExternalLink size={28}
                  className={iconsHover} />
              </a>
            </div>
          </span>

        </div>
      ))}

    </div>
  )
}

export default ProjetosPessoais