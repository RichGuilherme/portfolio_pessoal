import { useTranslation } from "react-i18next"
import { IoIosSchool, IoIosMusicalNotes } from "react-icons/io"
import { IoCodeSlashOutline } from "react-icons/io5"


const AboutMe = () => {
   const { t } = useTranslation()

   const container = "flex flex-col items-center  w-11/12 max-w-[514px] sm:w-full h-[368px] mx-auto px-5 bg-black shadow-container"
   const styleIcons = "text-primary-200 h-[100px] w-24"
   const title = "text-5xl font-bold text-center"
   const contest = "text-center font-semibold mt-8 text-[17px] tracking-wide leading-loose"


   return (
      <section id="sobreMim"
         className='flex flex-col items-center w-full font-jost text-white relative '>

         <h1 className='mt-36' data-aos="fade-up">
            {t("about me.0.title")}
         </h1>

         <div
            className="grid gap-5 mt-14 lg:grid-cols-2
         2xl:grid-cols-3">
            <div className={container} data-aos="zoom-in">
               <IoIosSchool className={styleIcons} />
               <h2 className={title} >{t("about me.1.education")}</h2>
               <p className={contest}>
                  {t("about me.1.formation")}<br></br>
                  Jan/22 - jul/24
               </p>
            </div>

            <div className={container} data-aos="zoom-in">
               <IoCodeSlashOutline className={styleIcons} />
               <h2 className={title} >{t("about me.2.experiences")}</h2>
               <p className={contest}>
                  {t("about me.2.professional experiences")}
               </p>
            </div>

            <div className={container} data-aos="zoom-in">
               <IoIosMusicalNotes className={styleIcons} />
               <h2 className={title} >{t("about me.3.hobbies")}</h2>
               <p className={contest}>
                  {t("about me.3.my hobbies")}
               </p>
            </div>

         </div>
      </section>
   )
}

export default AboutMe