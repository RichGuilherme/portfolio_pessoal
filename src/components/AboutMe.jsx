import { IoIosSchool, IoIosMusicalNotes } from 'react-icons/io'
import { IoCodeSlashOutline } from 'react-icons/io5'

const AboutMe = () => {
   const container = 'flex flex-col items-center  w-11/12 max-w-[514px] sm:w-full h-[368px] mx-auto px-5 bg-black shadow-container'
   const styleIcons = 'text-primary-200 h-[100px] w-24'
   const title = 'text-5xl font-bold'
   const contest = 'text-center font-semibold mt-8 text-[17px] tracking-wide leading-loose'

   return (
      <section id="sobreMim" 
      className='flex flex-col items-center w-full font-jost text-white relative'>
         <h1 className='mt-36'>Sobre mim</h1>

         <div className="grid gap-5 mt-14 lg:grid-cols-2
         2xl:grid-cols-3">
            <div className={container}>
               <IoIosSchool className={styleIcons} />
               <h2 className={title} >Educação</h2>
               <p className={contest}>
                  Tecnologo em Análise e Desenvolvimento de Sistemas <br></br> 
                  Jan/22 - Jul/24 
               </p>
            </div>

            <div className={container}>
               <IoCodeSlashOutline className={styleIcons} />
               <h2 className={title} >Experiência</h2>
               <p className={contest}>
                  Sem experiência profissonal... 
               </p>
            </div>

            <div className={container}>
               <IoIosMusicalNotes className={styleIcons} />
               <h2 className={title} >Hobbies</h2>
               <p className={contest}>
                   Games, Músicas, Series/Animes, Acadêmia e Programação são coisas do meu dia a dia
               </p>
            </div>

         </div>
      </section>
   )
}

export default AboutMe