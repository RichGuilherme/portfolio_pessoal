import planetaVermelhor from '../../assets/planeta-vermelho.png'

import BoxsAnimat from './boxsAnimat'

const skills = () => {
  return (

    <section className='flex flex-col items-center w-full font-jost 
     text-white relative mt-32 '>
        <h1>Habilidades</h1>

        <img 
        className='w-[380px] h-[365px] max-sm:max-w-[250px] max-sm:max-h-[230px] absolute 
        right-8 bottom-20 z-[-1] max-sm:bottom-8 animate-downUpAnimation'
        src={planetaVermelhor}
        alt="planeta vermelho"
        />

        <div className='max-w-[1024px] relative mt-20 overflow-hidden max-lg:w-full'>
               <BoxsAnimat />
        </div>

    </section>
  )
}
  
export default skills