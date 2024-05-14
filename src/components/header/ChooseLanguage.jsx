
import {useTranslation} from "react-i18next"
import i18next from "i18next"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

import bandeiraBrasil from "../../assets/iconsBandeiras/brazil.svg"
import bandeiraUSA from "../../assets/iconsBandeiras/USA.svg"

const ChooseLanguage = () => {
    const [showCountry, setShowCountry] = useState(false)
    const { i18n: {language}} = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language)
    
    
    const handleLanguage = (parameterLanguage) => {
        switch (parameterLanguage) {
            case "pt":
               i18next.changeLanguage("pt")
               setCurrentLanguage("pt")
               break;
            case "en":
               i18next.changeLanguage("en")
               setCurrentLanguage("en")
               break;
        }
    }
    

    return (
        <div
            onClick={() => setShowCountry(!showCountry)}
            className="flex flex-row items-center gap-x-2 border border-white py-1 px-2 
            cursor-pointer relative group min-w-[70px] max-h-9">
            <img
                className='w-7 h-6'
                src={currentLanguage === "pt" ? bandeiraBrasil : bandeiraUSA}
                alt="iconsBrasl"
            />
            <IoIosArrowDown className='group-hover:animate-bounce' />

            {showCountry &&
                <span className='absolute top-9 left-[-1px] w-[150px] p-[10px] flex flex-col gap-2 mt-1
                bg-black/50 border border-white'>
                    <button
                     onClick={() => handleLanguage("pt")}
                     className='hover:bg-white/10 flex justify-center'>
                        <img
                            className='w-9 h-7 mr-[11px]'
                            src={bandeiraBrasil}
                            alt="icon da bandeira do Brasil"
                        />
                        <p>PT - BR</p>
                    </button>
                    
                    <button 
                    onClick={() => handleLanguage("en")}
                    className='hover:bg-white/10 flex justify-center '>
                        <img
                            className='w-9 h-7 mr-[11px]'
                            src={bandeiraUSA}
                            alt="icon Estado Unidos"
                        />
                        <p>EN - US</p>
                    </button>
                </span>
            }
        </div>
    )
}

export default ChooseLanguage