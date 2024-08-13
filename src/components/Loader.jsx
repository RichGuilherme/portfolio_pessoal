import { IoCodeSlashOutline } from "react-icons/io5"
import BackVideo from "../assets/loop-background-for-project.mp4"

const Loader = () => {
  return (
    <div className="h-screen bg-space w-full max-w-full flex justify-center items-center bg-black text-white">
      <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
        <video
          src={BackVideo}
          className="z-40 object-cover w-screen h-screen fixed top-0 left-0"
          autoPlay
          playsInline
          muted
          loop>
        </video>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-2 animate-fadeOutUp z-50">
          <IoCodeSlashOutline size={100} className="text-primary-200" />
          <div className="text-5xl font-semibold flex flex-col items-center tracking-wide ">
            RichGuilherme
            <span className="text-2xl text-primary-200 mt-2 tracking-wide">
              Software Developer
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Loader