import {useEffect, useState} from 'react'


const typeWrite = (props) => {
  const [texto, setTexto] = useState("")


  const escreverNaTela = (texto, i = 0) => {
     if(i < texto.length){
          setTexto(texto.slice(0, i + 2))
          setTimeout(() => escreverNaTela(texto, i + 1), 1000)
     }else{
        setTexto("")
     }
  }
  
  useEffect(() => {
      setTimeout(() => escreverNaTela(props.text))
  }, [])
  
    return (
      <div>
          {texto}
      </div>
    )
}

export default typeWrite