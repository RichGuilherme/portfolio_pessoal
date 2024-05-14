import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enJson from "./translation/en.json"
import ptBRJson from "./translation/ptBR.json"

i18n
   .use(initReactI18next)
   .init({
    fallbacklng: ["en", "pt"],

    interpolation: {
        escapeValue: false 
    },
    lng: "pt",
    
    resources : {
        en: {
            ...enJson
        },
        pt: {
            ...ptBRJson
        }
    }
})

export default i18n