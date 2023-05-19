import astronautaBackground from '../../assets/imagem-astronauta.svg'
import BoxsInformations from './BoxsInformations'
import SendMensage from './SendMensage'

const Contact = () => {
    return (
        <section className="w-full lg:h-[calc(100vh-200px)] h-full font-jost bg-gradient-to-r text-white
    from-primary-200 to-secondary-300 flex flex-row max-lg:flex-col-reverse justify-between relative"
    id='conectar'>

            <div className='flex items-end w-[47%]'>
                <img
                    className="h-[75%] max-h-[690px] "
                    src={astronautaBackground}
                    alt="astronauta "
                />
            </div>

            <div className="flex flex-col items-center mt-8 w-full mx-auto ">
                <h1 className='text-center'>Entrar em contato</h1>
                
                 <BoxsInformations />
                 <SendMensage />

            </div>
        </section>
    )
}

export default Contact