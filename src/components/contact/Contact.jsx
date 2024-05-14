import { useTranslation } from "react-i18next"

import astronautaBackground from "../../assets/imagem-astronauta.svg"
import BoxsInformations from "./BoxsInformations"
import SendMessage from "./SendMensage"

const Contact = () => {
    const {t} = useTranslation()

    return (
        <section className="w-full min-h-[calc(100vh-200px)] font-jost bg-gradient-to-r text-white
    from-primary-200 to-secondary-300 flex flex-row max-lg:flex-col-reverse max-lg:min-h-full justify-between relative"
    id='conectar'>

            <div 
            data-aos="zoom-in" data-aos-delay="200"
            className='flex items-end w-[47%]'>
                <img
                    className="max-h-[75%] relative top-0"
                    loading='lazy'
                    src={astronautaBackground}
                    alt="astronauta "
                />
            </div>

            <div
            data-aos="fade-up" data-aos-delay="400"
            className="flex flex-col items-center mt-8 w-full mx-auto ">
                <h1 className='text-center'>{t("contact.0.get in touch")}</h1>
                
                 <BoxsInformations />
                 <SendMessage />

            </div>
        </section>
    )
}

export default Contact