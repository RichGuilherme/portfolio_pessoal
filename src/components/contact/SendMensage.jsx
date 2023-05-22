const SendMensage = () => {
    return (
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
         relative before:absolute before:top-0 before:w-0 before:h-full before:left-0 before:duration-500 
         before:bg-white hover:before:w-full group'>

                <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
                    Enviar Mensagem
                </span>
                
            </button>
        </div>
    )
}

export default SendMensage