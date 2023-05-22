/* eslint-disable react/prop-types */
import calculadoraReact from '../../assets/projetosPessoaisImg/calculadora-react-img.png'
import weatherProject from '../../assets/projetosPessoaisImg/weather-project.png'
import LOLPages from '../../assets/projetosPessoaisImg/league-of-legends-page.png'
import projetoPessoal from '../../assets/projetosPessoaisImg/projeto-pessoal.png'

import { FiGithub  } from 'react-icons/fi'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { useEffect, useState} from 'react'

const ProjetosPessoais = ({OnOff = true}) => {
 const [on, setOn] = useState(true)

 useEffect(() => {
     setOn(OnOff)
 })

 const titleHover = "font-bold text-3xl text-primary-200 opacity-0 group-hover:opacity-100 duration-700"
 const descritionHover = 'font-light text-lg text-center opacity-0 group-hover:opacity-100 duration-700'
 const tecnologiasHover = 'text-xl text-primary-200 font-semibold opacity-0 group-hover:opacity-100 duration-1000' 
 const iconsHover = 'opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-primary-200 cursor-pointer'
 const boxsProjects = "h-[270px] w-full rounded-3xl relative before:cursor-default overflow-hidden max-w-sm before:bg-[#112240] before:opacity-80 before:w-full before:h-0 before:absolute before:duration-[900ms] hover:before:h-full group "

const listProjetcs = [
  {
    id:1,
    href: "/",
    github: "/",
    img: calculadoraReact,
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:2,
    href: "/",
    github: "/",
    img: weatherProject,
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:3,
    href: "/",
    github: "/",
    img: LOLPages,
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:4,
    href: "/",
    github: "/",
    img: projetoPessoal,
    title: "Calculadora React",
    tecnologias: "React Css Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
]
 

  return (
    <div 
    className = {`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>
       
       {listProjetcs.map(({id, img, title, descrition, github, href, tecnologias}) => (
        <a 
        data-aos="zoom-in"
        key={id} className = {boxsProjects}>
           <img 
           className = "object-cover object-center h-full  "
           src={img}
           alt={title} />

           <span className ="absolute top-0 left-0 flex flex-col gap-4 items-center
            w-full h-full py-[10px] mt-1">
               <h2 className = {titleHover}>
                {title}</h2>
               <h3 className= {tecnologiasHover}>{tecnologias}</h3>
               <p className = {descritionHover}>
                {descrition}</p>
                <div className = 'flex flex-row gap-4 mt-8'>
                    <FiGithub size={28} 
                    href = {github} 
                    className = {iconsHover}/>

                    <HiOutlineExternalLink size={28} 
                    href = {href} 
                    className = {iconsHover}/>
                </div>
           </span>

        </a>
       ))}
      
    </div>
  )
}

export default ProjetosPessoais