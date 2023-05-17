import { IoIosSchool, IoIosMusicalNotes} from 'react-icons/io'
import { IoCodeSlashOutline} from 'react-icons/io5'

const AboutMe = () => {
  const container = 'flex flex-col items-center  w-11/12 sm:w-full h-[368px] mx-auto bg-black shadow-container'
  const styleIcons = 'text-primary-200 h-[100px] w-24'
  const title = 'text-5xl font-bold'
  const contest = 'text-center mt-8 text-[17px]'

  return (
    <section className='flex flex-col items-center w-full font-jost
    text-white relative'>
         <h1 className='mt-36'>Sobre mim</h1>

         <div className="grid gap-5 mt-14 lg:grid-cols-2
         2xl:grid-cols-3">
             <div className={container}>
                <IoIosSchool className={styleIcons}/>
                <h2 className={title} >Educação</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

             <div className={container}>
                <IoCodeSlashOutline className={styleIcons}/>
                <h2 className={title} >Experiência</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

             <div className={container}>
                <IoIosMusicalNotes className={styleIcons}/>
                <h2 className={title} >Hobby</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

         </div>
    </section>
  )
}

export default AboutMe