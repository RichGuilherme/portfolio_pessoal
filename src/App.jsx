import './App.css'
import NavBar from './components/navBar'
import Banner from './components/banner/banner'
import AboutMe from './components/aboutMe'

function App() {
    return(
        <>
           <NavBar/>
           <main >
              <Banner />
              <div className='bg-space bg-cover bg-center bg-no-repeat h-[2300px]'>
                 <AboutMe />
              </div>
           </main>
        </>
    )
}

export default App
