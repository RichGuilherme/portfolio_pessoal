import iconCss from '../../assets/iconsLinguagens/css3-original.svg'
import iconTailwind from '../../assets/iconsLinguagens/tailwindcss-original.svg'
import iconHTMl from '../../assets/iconsLinguagens/html_original.svg'
import iconJs from '../../assets/iconsLinguagens/javascript-original.svg'
import iconReact from '../../assets/iconsLinguagens/react-original.svg'
import iconGit from '../../assets/iconsLinguagens/git-original.svg'

const BoxsAnimat = () => {
    const boxsTec = 'grid grid-cols-[52px_minmax(257px,_2fr)] grid-rows-2 items-center h-24 bg-secondary-300 border border-primary-200 rounded-[10px] py-3 px-2 gap-x-1'
    const imgTec = 'w-[54px] h-[52px] float-right'
    const titleTec = 'text-xl font-bold mb-3'
    

    const tecsSlideRowOne = [
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
        },
    ]
    
    const tecsSlideRowTwo = [
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
    <div className='flex flex-col gap-y-8 overflow-hidden w-full
    before:absolute before:h-60  before:w-[85px] before:z-10 before:bg-gradient-to-r before:from-black before:to-transparent
    after:absolute after:h-60 after:w-[85px] after:z-10 after:bg-gradient-to-r after:from-black after:to-transparent after:top-0 after:right-0 after:rotate-180'>

        {/* primeira linha com as linguagens */}
        <div name="row One" className='flex items-center w-[calc(378px*6)] gap-8
        animate-boxLinguageAnim1'> {/*o 373px representa a soma do 341px da box + o gap de 32px*/}
            {tecsSlideRowOne.map(({id, img, alt, title, descrition}) => (
                <div className={boxsTec} key={id}>
                   <div className='row-span-2'>
                       <img 
                       className={imgTec}
                       src= {img}
                       alt= {alt}
                        />
                   </div>
                   <h2 className={titleTec}>{title}</h2>
                   <p className='font-light'>{descrition}</p>
                </div>
            ))}
            {/* clone dos primeiros elementos para criar o efeito de scroll infinito */}
            {tecsSlideRowOne.map(({id, img, alt, title, descrition}) => (
                <div className={boxsTec} key={id}>
                   <div className='row-span-2'>
                       <img 
                       className={imgTec}
                       src= {img}
                       alt= {alt}
                        />
                   </div>
                   <h2 className={titleTec}>{title}</h2>
                   <p className='font-light'>{descrition}</p>
                </div>
            ))}
        </div>
       
        {/* Segunda linha com as linguagens */}
        <div name="row Two" className='flex items-center w-[calc(378px*6)] gap-8 relative right-[1134px]
         animate-boxLinguageAnim2'> {/*o 381px representa a soma do 346px da box + o gap de 32px */}
            {tecsSlideRowTwo.map(({id, img, alt, title, descrition}) => (
                <div className={boxsTec} key={id}>
                   <div className='row-span-2'>
                       <img 
                       className={imgTec}
                       src= {img}
                       alt= {alt}
                        />
                   </div>
                   <h2 className={titleTec}>{title}</h2>
                   <p className='font-light'>{descrition}</p>
                </div>
            ))}
            
            {tecsSlideRowTwo.map(({id, img, alt, title, descrition}) => (
                <div className={boxsTec} key={id}>
                   <div className='row-span-2'>
                       <img 
                       className={imgTec}
                       src= {img}
                       alt= {alt}
                        />
                   </div>
                   <h2 className={titleTec} >{title}</h2>
                   <p className='font-light'>{descrition}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BoxsAnimat