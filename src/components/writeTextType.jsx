import { Cursor, useTypewriter} from 'react-simple-typewriter'

export const WriteTextType = ({texto, cursor = true, loops = {}}) => {
 const [text] = useTypewriter({
    words : texto,
    loop : loops,
    typeSpeed : 300,
    deleteSpeed : 50
 })

  return (
     <span className='max-w-xs'>
       {text}
      {cursor ? <Cursor cursorStyle='|'/> 
      : ""}
     </span>
  )
}
