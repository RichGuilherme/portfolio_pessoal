import IconsRedeSocais from './IconsRedeSocais'
import { IoCodeSlashOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

// import logo from '../assets/logoRichard-280x680.png'

const Footer = () => {
    const { t } = useTranslation()
    const date = new Date()
    const year = date.getFullYear().toString()

    const logo = (
        <div className='w-40 h-16 min-w-[160px] mb-5'>
            <div className="flex flex-col items-center">
                <IoCodeSlashOutline size={37} className="text-primary-200" />
                <div className="text-xl text-white font-semibold tracking-wide flex flex-col items-center ">
                    RichGuilherme
                </div>
            </div>
        </div>
    )

    return (
        <div className=" min-h-[235px] h-52 max-h-60 bg-secondary-300 font-jost flex justify-center items-center">
            <div className='flex flex-row justify-between max-md:flex-col items-center h-full w-9/12 '>

                   {logo}
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