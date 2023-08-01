import { IoCodeSlashOutline } from "react-icons/io5"

export const Logo = () => {
  return (
    <a
      href='#'
      className='w-40 h-16 min-w-[160px] mr-5 mb-5'>
      <div className="flex flex-col items-center">
        <IoCodeSlashOutline size={37} className="text-primary-200" />
        <div className="flex flex-col items-center text-white text-xl font-semibold tracking-wide ">
          RichGuilherme
        </div>
      </div>
    </a>
  )
}
