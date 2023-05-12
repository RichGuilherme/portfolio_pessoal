import calculadoraReact from '../../assets/projetosPessoaisImg/calculadora-react-img.png'
import { useEffect, useState} from 'react'

const ProjetosPessoais = ({OnOff = true}) => {
 const [on, setOn] = useState(true)

 useEffect(() => {
     setOn(OnOff)
 })

 const fundoHover = "flex-col justify-center gap-7 px-3 text-center rounded-3xl items-center absolute top-0 left-0 h-0 w-full bg-gradient-to-r from-primary-200 to-secondary-300 duration-500 opacity-90 group-hover:flex group-hover:h-full group-hover:duration-1000 "
 const titleHover = "font-bold text-2xl opacity-0 group-hover:block group-hover:opacity-100 group-hover:duration-1000"
 const descritionHover = 'font-light text-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:duration-1000'

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
    <div className = {`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>
       {listProjetcs.map(itens => (
        <a href={itens.href} key={itens.id} className = "rounded-3xl h-[270px] w-full relative max-w-sm group hover: ">
           <img 
           className = "object-cover object-center h-full rounded-3xl "
           src={itens.img}
           alt={itens.alt} />

           <span className = {fundoHover}>
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