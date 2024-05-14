import { useEffect, useState } from "react"

const useScrolled = (numberScroll = 0) => {
    const [scrolled, setScrolled] = useState(false)
    

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > numberScroll) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        }
    
        window.addEventListener("scroll", onScroll)
    
        return () => window.removeEventListener("scroll", onScroll)
      }, [numberScroll])

  return [scrolled]
}

export default useScrolled