/* eslint-disable react/prop-types */
import { Cursor, useTypewriter } from "react-simple-typewriter"

export const WriteTextType = ({ texto = [""], cursor = true, loop = {}}) => {
   const [text] = useTypewriter({
      words: texto,
      typeSpeed: 300,
      deleteSpeed: 50,
      loop: loop
   })

   return (
      <span >
         {text}
         {cursor ? <Cursor cursorStyle='|' />
            : ""}
      </span>
   )
}
