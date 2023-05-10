import iconCss from '../assets/iconsLinguagens/css3-original.svg'
import iconTailwind from '../assets/iconsLinguagens/tailwindcss-original.svg'
import iconHTMl from '../assets/iconsLinguagens/html_original.svg'
import iconJs from '../assets/iconsLinguagens/javascript-original.svg'
import iconReact from '../assets/iconsLinguagens/react-original.svg'
import iconGit from '../assets/iconsLinguagens/git-original.svg'

const skills = () => {
  const boxsTec = 'grid grid-cols-[52px_minmax(257px,_2fr)] grid-rows-2 max-w-[341px] h-24 bg-secondary-300 border border-primary-200 rounded-[10px] py-3 px-2 gap-x-1'
  const imgTec = 'w-[54] h-[52px] float-right'
  const tecnologia = 'text-xl font-bold'

  const tecsRowOne = [
    {
        id: 1,
        img: iconCss,
        alt: "Icon css",
        title: "CSS",
        descrition: "Cascading Style Shell is a style sheet languege"
    },
    {
        id: 2,
        img: iconTailwind,
        alt: "Icon tailwind",
        title: "Tailwind",
        descrition: "Cascading Style Shell is a style sheet languege"
    },
    {
        id: 3,
        img: iconHTMl,
        alt: "Icon html",
        title: "HTML5",
        descrition: "Cascading Style Shell is a style sheet languege"
    }
  ]
  const tecsRowTwo = [
    {
        id: 1,
        img: iconJs,
        alt: "Icon Javascript",
        title: "Javascript",
        descrition: "Cascading Style Shell is a style sheet languege"
    },
    {
        id: 2,
        img: iconReact,
        alt: "Icon react",
        title: "React",
        descrition: "Cascading Style Shell is a style sheet languege"
    },
    {
        id: 3,
        img: iconGit,
        alt: "Icon git",
        title: "Git",
        descrition: "Cascading Style Shell is a style sheet languege"
    }
  ]

  return (

    <section className='flex flex-col items-center w-full font-jost 
    text-white relative mt-32 '>
        <h1>Skills</h1>

        <img 
        src="" 
        alt="" 
        />

        <div>
             <div name="row One" className='flex flex-row gap-14 '>
                 {tecsRowOne.map(({id, img, alt, title, descrition}) => (
                     <div className={boxsTec} key={id}>
                        <div className='row-span-2'>
                            <img 
                            className={imgTec}
                            src= {img}
                            alt= {alt}
                             />
                        </div>
                        <h2 className={tecnologia}>{title}</h2>
                        <p className='font-light'>{descrition}</p>
                     </div>
                 ))}
             </div>

             <div name="row Two" className='flex flex-row gap-14 mt-11'>
                 {tecsRowTwo.map(({id, img, alt, title, descrition}) => (
                     <div className={boxsTec} key={id}>
                        <div className='row-span-2'>
                            <img 
                            className={imgTec}
                            src= {img}
                            alt= {alt}
                             />
                        </div>
                        <h2 className={tecnologia}>{title}</h2>
                        <p className='font-light'>{descrition}</p>
                     </div>
                 ))}
             </div>

        </div>
    </section>
  )
}

export default skills