import planetaVermelhor from '../../assets/planeta-vermelho.png'

import BoxsAnimat from './BoxsAnimat'

const Skills = () => {
  return (

    <section className='flex flex-col items-center w-full font-jost text-white 
    relative mt-32 '>
        <h1>Habilidades</h1>

        <img 
        className='w-[250px] h-[230px] sm:max-w-[380px] sm:max-h-[365px] absolute 
        right-8 bottom-52 z-[-1] max-sm:bottom-20 animate-planeteDownUpAnimation'
        src={planetaVermelhor}
        alt="planeta vermelho"
        />

        <div className='max-w-full relative mt-20 overflow-hidden lg:w-[1134px]'>
               <BoxsAnimat />
        </div>

    </section>
  )
}
  
export default Skills