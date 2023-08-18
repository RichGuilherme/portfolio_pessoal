/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineExternalLink } from 'react-icons/hi'


import logicaDaProgramação from '../../assets/certificados/certificado-lógica-da-programação.jpg'
import cssWeb from '../../assets/certificados/bootcamp-css-web.png'
import fundamentosReact from '../../assets/certificados/fundamentos-react.png'
import hooksBasico from '../../assets/certificados/hooks-Basicos.png'
import JsAdvanced from '../../assets/certificados/formação-javascript-developer.png'


const Certificados = ({ OnOff = false }) => {
  const { t } = useTranslation()
  const [on, setOn] = useState(false)

  useEffect(() => {
    setOn(OnOff)
  }, [OnOff])

  const listsCertificates = [
    {
      id: 1,
      href: "https://www.udemy.com/certificate/UC-9d496ae4-d836-4c2b-9969-8877f7487e56/",
      img: logicaDaProgramação,
      title: t("projects.2.programming logic.title"),
      descrition: t("projects.2.programming logic.descrition")
    },
    {
      id: 2,
      href: "https://www.dio.me/certificate/B021C86E/share",
      img: cssWeb,
      title: t("projects.2.web css.title"),
      descrition: t("projects.2.web css.descrition")
    },
    {
      id: 3,
      href: "https://www.dio.me/certificate/D56D691A/share",
      img: fundamentosReact,
      title: t("projects.2.react fundamentals.title"),
      descrition: t("projects.2.react fundamentals.descrition")
    },
    {
      id: 4,
      href: "https://www.dio.me/certificate/41D541C9/share",
      img: hooksBasico,
      title: t("projects.2.basic hooks.title"),
      descrition: t("projects.2.basic hooks.descrition")
    },
    {
      id: 5,
      href: "https://www.dio.me/certificate/4FC7C2B6/share",
      img: JsAdvanced,
      title: t("projects.2.js advanced.title"),
      descrition: t("projects.2.js advanced.descrition")
    },


  ]

  const titleHover = "flex items-center font-bold text-3xl text-center text-primary-200 opacity-0 group-hover:opacity-100 duration-700"
  const CertificatesHover = 'text-xl font-semibold mb-1 opacity-0 group-hover:opacity-100 duration-1000'
  const descritionHover = 'font-light text-lg text-center opacity-0 group-hover:opacity-100 duration-700'
  const iconsHover = 'text-white pl-1 opacity-0 group-hover:opacity-100 duration-1000 hover:duration-0 hover:text-primary-200 cursor-pointer'
  const boxsCertificates = "h-[270px] w-full rounded-3xl relative before:cursor-default overflow-hidden max-w-sm before:bg-[#0a1629] before:opacity-90 before:w-full before:h-0 before:absolute before:duration-[900ms] hover:before:h-full group "


  return (
    <div className={`w-[70%] ${on ? "flex" : "hidden"} flex-row flex-wrap gap-12 justify-center mx-auto`}>

      {listsCertificates.map(({ id, img, title, descrition, href, tecnologias }) => (
        <div
          data-aos="zoom-in"
          key={id} className={boxsCertificates}>
          <img
            className="object-cover object-center h-full w-full "
            loading="lazy"
            src={img}
            alt={title}
          />

          <span className="absolute top-0 left-0 flex flex-col gap-1 items-center
            w-full h-full py-[10px] px-2 mt-1">
            <h2 className={titleHover}>
               {title}
                <a href={href} rel="noreferrer" target="_blank" >
                  <HiOutlineExternalLink size={33}
                    className={iconsHover} />
                </a>
            </h2>

            <h3 className={CertificatesHover}>
              {tecnologias}</h3>

            <p className={descritionHover}>
              {descrition}</p>

          </span>
        </div>
      ))}

    </div>
  )
}

export default Certificados