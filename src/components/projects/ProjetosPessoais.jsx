/* eslint-disable react/prop-types */
import calculadoraReact from '../../assets/projetosPessoaisImg/calculadora-react-img.png'
import { useEffect, useState} from 'react'

const ProjetosPessoais = ({OnOff = true}) => {
 const [on, setOn] = useState(true)

 useEffect(() => {
     setOn(OnOff)
 })

 const informations = "absolute top-1/2 left-0 text-center"
 const titleHover = "font-bold text-2xl opacity-0 group-hover:block group-hover:opacity-100 duration-700"
 const descritionHover = 'font-light text-lg opacity-0 group-hover:block group-hover:opacity-100 duration-700'

const listProjetcs = [
  {
    id:1,
    href: "/",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:2,
    href: "/",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:3,
    href: "/",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:4,
    href: "/",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },
  {
    id:5,
    href: "",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  },  {
    id:6,
    href: "",
    img: calculadoraReact,
    alt: "calculadora-react",
    title: "Calculadora React",
    descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
  }
]
 

  return (
    <div className = {`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto `}>
       {listProjetcs.map(itens => (
        <a href={itens.href} key={itens.id} className="h-[270px] w-full rounded-3xl relative 
        overflow-hidden max-w-sm before:bg-gradient-to-r from-primary-200 to-secondary-300 
        before:opacity-75 before:w-full before:h-0 before:absolute before:duration-[900ms] 
        hover:before:h-full group ">
           <img 
           className = "object-cover object-center h-full  "
           src={itens.img}
           alt={itens.alt} />
           <span className = {informations}>
               <h2 className = {titleHover}>
                {itens.title}</h2>

               <p className = {descritionHover}>
                {itens.descrition}</p>
           </span>

        </a>
       ))}
      
    </div>
  )
}

export default ProjetosPessoais