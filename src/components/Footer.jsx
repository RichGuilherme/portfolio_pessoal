import IconsRedeSocais from './IconsRedeSocais'
import { useTranslation } from 'react-i18next'
import { Logo } from './Logo'


const Footer = () => {
    const { t } = useTranslation()
    const date = new Date()
    const year = date.getFullYear().toString()

    return (
        <div className=" min-h-[235px] h-52 max-h-60 bg-secondary-300 font-jost flex justify-center items-center">
            <div className='flex flex-row justify-between max-md:flex-col items-center h-full w-9/12 '>

                <Logo />

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