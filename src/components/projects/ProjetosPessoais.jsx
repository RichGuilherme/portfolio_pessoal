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



const listProjetcs = [
  {
    id:1,
    href: "/",
    github: "/",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:2,
    href: "/",
    github: "/",
    img: weatherProject,
    alt: "calculadora-react",
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:3,
    href: "/",
    github: "/",
    img: LOLPages,
    alt: "calculadora-react",
    title: "Calculadora React",
    tecnologias: "React CSS Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:4,
    href: "/",
    github: "/",
    img: projetoPessoal,
    alt: "calculadora-react",
    title: "Calculadora React",
    tecnologias: "React Css Js",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
]
 

  return (
    <div 
    
    className = {`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>
       
       {listProjetcs.map(({id, img, alt, title, descrition, github, href, tecnologias}) => (
        
        <a 
        data-aos="zoom-in"
        key={id} className="h-[270px] w-full rounded-3xl relative before:cursor-default
        overflow-hidden max-w-sm before:bg-[#112240]
        before:opacity-80 before:w-full before:h-0 before:absolute before:duration-[900ms] 
        hover:before:h-full group ">
           <img 
           className = "object-cover object-center h-full  "
           src={img}
           alt={alt} />

           <span className ="absolute top-0 left-0 flex flex-col gap-4 items-center
            w-full h-full py-[10px] mt-1">
               <h2 className = {titleHover}>
                {title}</h2>
               <h3 className='text-xl text-primary-200 font-semibold opacity-0 group-hover:opacity-100 duration-1000' >{tecnologias}</h3>
               <p className = {descritionHover}>
                {descrition}</p>
                <div className='flex flex-row gap-4 mt-8'>
                    <FiGithub size={28} href={github} className='opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-secondary-300 cursor-pointer'/>
                    <HiOutlineExternalLink size={28}href={href} className='opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-secondary-300 cursor-pointer'/>
                </div>
           </span>

        </a>
       ))}
      
    </div>
  )
}

export default ProjetosPessoais