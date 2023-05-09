import { IoIosSchool, IoIosMusicalNotes} from 'react-icons/io'
import { IoCodeSlashOutline} from 'react-icons/io5'

const aboutMe = () => {
  const container = 'flex flex-col items-center  w-[527px] h-[368px] p-10 bg-black shadow-container'
  const styleIcons = 'text-primary-200 h-[100px] w-24'
  const title = 'text-5xl font-bold'
  const contest = 'text-center mt-8'

  return (
    <section className='flex flex-col h-[660px] items-center w-full 
    font-jost text-white'>
         <h1 className='text-5xl font-bold text-primary-200 mt-16'>Sobre mim</h1>

         <div className="flex flex-row items-center gap-5 mt-14">
             <div className={container}>
                <IoIosSchool className={styleIcons}/>
                <h2 className={title} >Educação</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

             <div className={container}>
                <IoCodeSlashOutline className={styleIcons}/>
                <h2 className={title} >Educação</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

             <div className={container}>
                <IoIosMusicalNotes className={styleIcons}/>
                <h2 className={title} >Educação</h2>
                <p className={contest}>
                 Lorem ipsum dolor sit amet consectetur adipniam  Maiores.
                </p>
             </div>

         </div>
    </section>
  )
}

export default aboutMe