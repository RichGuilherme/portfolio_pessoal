import { IoCodeSlashOutline } from "react-icons/io5"

const Loader = () => {
  return (
    <div className="h-screen w-full max-w-full flex justify-center items-center bg-black text-white">
       <div 
       data-aos="fade-up"
       className="flex flex-col items-center gap-2 animate-fadeOutUp">
           <IoCodeSlashOutline size={100} className="text-primary-200"/>
        <div className="text-5xl font-semibold tracking-wide flex flex-col items-center ">
            RichGuilherme
          <span className="text-2xl text-primary-200 mt-2 tracking-tight">
            Software Developer
          </span>
        </div>
       </div>
    </div>
  )
}

export default Loader