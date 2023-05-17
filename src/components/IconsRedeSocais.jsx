/* eslint-disable react/prop-types */
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import { FaWhatsapp } from 'react-icons/fa'

const IconsRedeSocais = ({flexDirection}) => {
   const direction = flexDirection

    const redeSociais = [
        {
           id: 1,
           href: "/",
           icon: <FiGithub size={28} className="text-white hover:opacity-80" />
        },
        {
           id: 2,
           href: "/",
           icon: <FaWhatsapp size={28} className="text-white hover:opacity-80" />
        },
        {
           id: 3,
           href: "/",
           icon: <FiInstagram size={28} className="text-white hover:opacity-80" />
        },
        {
           id: 4,
           href: "/",
           icon: <FiLinkedin size={28} className="text-white hover:opacity-80" />
        }
     ]
  return (
   <div className={`flex ${direction} items-center gap-5`}>
       {redeSociais.map(({id, href, icon}) => (
         <a key={id} href={href}>
              {icon}
         </a>
       ))}
   </div>
  )
}

export default IconsRedeSocais