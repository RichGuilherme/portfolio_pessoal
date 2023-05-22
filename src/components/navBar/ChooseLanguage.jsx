import { useState } from 'react'

import bandeiraBrasil from '../../assets/iconsBandeiras/brazil.svg'
import bandeiraUSA from '../../assets/iconsBandeiras/USA.svg'
import { IoIosArrowDown } from 'react-icons/io'

import {useTranslation} from 'react-i18next'
import i18next from 'i18next'

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
            className='flex flex-row items-center gap-x-2 border border-white py-1 px-2 cursor-pointer 
    relative group min-w-[70px] max-h-9'>
            <img
                className='w-7 h-6'
                src={currentLanguage === "pt" ? bandeiraBrasil : bandeiraUSA}
                alt="iconsBrasl"
            />
            <IoIosArrowDown className='group-hover:animate-bounce' />

            {showCountry &&
                <span className='absolute top-9 left-0 w-full h-full flex flex-col gap-2 mt-1'>
                    <button
                     onClick={() => handleLanguage("pt")}
                     className='hover:bg-secondary-300 flex justify-center'>
                        <img
                            className='w-9 h-7 '
                            src={bandeiraBrasil}
                            alt="icon da bandeira do Brasil"
                        />
                    </button>
                    
                    <button 
                    onClick={() => handleLanguage("en")}
                    className='hover:bg-secondary-300 flex justify-center'>
                        <img
                            className='w-9 h-7 '
                            src={bandeiraUSA}
                            alt="icon Estado Unidos"
                        />
                    </button>
                </span>
            }
        </div>
    )
}

export default ChooseLanguage