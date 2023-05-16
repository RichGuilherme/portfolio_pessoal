import astronautaBackground from '../assets/imagem-astronauta.svg'
import {MdWhatsapp, MdLocationOn} from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'

const Contact = () => {
  return (
    <section className="w-full lg:h-[calc(100vh-200px)] h-full font-jost bg-gradient-to-r text-white
    from-primary-200 to-secondary-300 flex flex-row max-lg:flex-col-reverse justify-between relative ">
       
       <div className='flex items-end w-[47%]'>
            <img
            className="h-[75%] max-h-[690px] " 
            src={astronautaBackground} 
            alt="astronauta "
             />
       </div>

        <div className="flex flex-col items-center mt-8 w-full mx-auto ">
            <h1 className='text-center'>Entrar em contato</h1>

            <div className='flex flex-wrap justify-center gap-4 w-full max-w-[955px] mt-10'>
                <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
                px-4 max-w-[290px] h-24'>
                    <div className='flex flex-row items-center gap-1'>
                        <MdWhatsapp size = {22} className='text-green-400' />
                        <h2 className='font-bold text-xl'>WhatsApp</h2>
                    </div>

                    <p
                    className='text-[#A9A9A9] text-lg'>
                    (31) 989298009</p>
                </div>

                <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
                px-4 max-w-[343px] h-24'>
                    <div className='flex flex-row items-center gap-1'>
                        <IoIosSend size = {22} className='text-blue-500'/>
                        <h2 className='font-bold text-xl'>Email</h2>
                    </div>
                    <a 
                    className='text-[#A9A9A9] text-lg'
                    href=''>richard.guilhermeAS@hotmail.com</a>
                </div>

                <div className='bg-secondary-200 flex flex-col gap-1 justify-center w-full rounded-lg
                px-4 max-w-[290px] h-24'>
                    <div className='flex flex-row items-center gap-1'>
                        <MdLocationOn size = {22} className='text-red-600'/>
                        <h2 className='font-bold text-xl'>
                        Localização</h2>
                    </div>

                    <p
                    className='text-[#A9A9A9] text-lg'
                    >Vespasiano - MG</p>
                </div>
            </div>

            <div className='grid grid-cols-2 justify-items-start max-sm:justify-items-center
             w-full max-sm:grid-cols-1 max-w-[660px] max-h-[425px] gap-y-6 gap-x-2 mt-10 mx-auto'>
                  <input 
                  type='text'
                  className='w-full max-w-[322px] h-16 bg-[#ffffff1a] text-white rounded-[20px] 
                   pl-4 outline-none focus:border focus:border-white'
                  placeholder='Seu Nome...' />
  
                  <input 
                  type='email'
                  className='w-full max-w-[322px] h-16 bg-[#ffffff1a] text-white rounded-[20px]
                   pl-4 outline-none focus:border focus:border-white'
                  placeholder='Seu E-mail...' />
  
                  <input 
                  type='text'
                  className='w-full max-w-[652px] h-48 bg-[#ffffff1a] col-span-2 max-sm:col-span-1
                  rounded-[20px] pl-4 outline-none focus:border focus:border-white'
                  placeholder='Sua Mensagem...' />
                  
                  <button className='border border-[#ffffff1a] w-[145px] h-[45px] bg-[#ffffff1a] 
                  group relative'>
                    <div className='absolute bg-white w-0 h-full top-0 left-0 duration-500
                          group-hover:block group-hover:duration-500 group-hover:w-full'>
                        </div>

                        <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
                            Enviar Mensagem 
                        </span>
                    </button>
             </div>

        </div>
    </section>
  )
}

export default Contact