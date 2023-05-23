import { MdWhatsapp, MdLocationOn } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { useTranslation } from 'react-i18next'

const BoxsInformations = () => {
    const {t} = useTranslation()

    return (
        <div className='flex flex-wrap justify-center gap-4 w-full max-w-[955px] mt-10'>
            <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
    px-4 max-w-[290px] h-24'>
                <div className='flex flex-row items-center gap-1'>
                    <MdWhatsapp size={22} className='text-green-400' />
                    <h2 className='font-bold text-xl'>WhatsApp</h2>
                </div>

                <p
                    className='text-[#A9A9A9] text-lg'>
                    (31) 989298009</p>
            </div>

            <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
    px-4 max-w-[343px] h-24'>
                <div className='flex flex-row items-center gap-1'>
                    <IoIosSend size={22} className='text-blue-500' />
                    <h2 className='font-bold text-xl'>Email</h2>
                </div>
                <a
                    className='text-[#A9A9A9] text-lg'
                    href=''>richard.guilhermeAS@hotmail.com</a>
            </div>

            <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
    px-4 max-w-[290px] h-24'>
                <div className='flex flex-row items-center gap-1'>
                    <MdLocationOn size={22} className='text-red-600' />
                    <h2 className='font-bold text-xl'>
                        {t("contact.1.boxs informations.location")}</h2>
                </div>

                <p
                    className='text-[#A9A9A9] text-lg'
                >Vespasiano - MG</p>
            </div>
        </div>
    )
}

export default BoxsInformations