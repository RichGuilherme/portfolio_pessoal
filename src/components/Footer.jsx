import IconsRedeSocais from './IconsRedeSocais'
import { useTranslation } from 'react-i18next'

import logo from '../assets/logoRichard-280x680.png'

const Footer = () => {
    const {t} = useTranslation()
    const date = new Date()
    const year = date.getFullYear().toString()

    return (
        <div className=" h-52 max-h-full bg-secondary-300 font-jost ">
            <div className='flex flex-row justify-between max-md:flex-col items-center h-full w-9/12 
        mx-auto'>
                <img
                    className='w-40 h-16 min-w-40'
                    src={logo}
                    alt={t("footer.0.my logo")} />

                <div className='flex flex-col items-center text-center gap-10 w-[314px] max-sm:w-[280px]'>
                    <div className='flex flex-row items-center'>
                        <div className='h-1 bg-white w-24 mr-10 rounded-md max-md:hidden'></div>
                        <IconsRedeSocais flexDirection="flex-row" />
                        <div className='h-1 bg-white w-24 ml-10 rounded-md max-md:hidden'></div>
                    </div>

                    <p
                        className='text-white '
                    >Copyright {year}. {t("footer.0.copyright")}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer