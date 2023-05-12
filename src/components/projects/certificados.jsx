import { useState, useEffect } from 'react'
import logicaDaProgramação from '../../assets/certificados/certificado-lógica-da-programação.jpg'


const certificados = ({OnOff = false}) => {
  const [on, setOn] = useState(false)

  useEffect(() => {
      setOn(OnOff)
  })

  const listsCertificates = [
    {
      id:1,
      href: "https://www.udemy.com/certificate/UC-9d496ae4-d836-4c2b-9969-8877f7487e56/",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    },
    {
      id:2,
      href: "/",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    },
    {
      id:3,
      href: "/",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    },
    {
      id:4,
      href: "/",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    },
    {
      id:5,
      href: "",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    },  {
      id:6,
      href: "",
      img: logicaDaProgramação,
      alt: "calculadora-react",
      title: "Calculadora React",
      descrition: "Lorem ipsum dolor sit amet consectetur deleniti quam."
    }
  ]

  const fundoHover = "flex-col justify-center gap-7 px-3 text-center rounded-3xl items-center absolute top-0 left-0 h-0 w-full bg-gradient-to-r from-primary-200 to-secondary-300 duration-500 opacity-90 group-hover:flex group-hover:h-full group-hover:duration-1000 "
  const titleHover = "font-bold text-2xl opacity-0 group-hover:block group-hover:opacity-100 group-hover:duration-1000"
  const descritionHover = 'font-light text-lg opacity-0 group-hover:block group-hover:opacity-100 group-hover:duration-1000'


  return (
    <div className = {`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>
       {listsCertificates.map(itens => (
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

export default certificados