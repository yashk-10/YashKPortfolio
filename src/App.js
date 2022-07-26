import React, {useState, useEffect} from 'react'
import './styles/index.css'
import './styles/navbar.css'
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import About from './components/About';
import Background from './components/Background';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/loader.css'


const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    
  return (
    <div id="App" className="App">
        {/* <>
                <Background/>
                <NavBar/>
                <Landing/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
        </> */}
        {/* <div class="whirl pong"></div> */}
        {
            loading ?
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
            :
            <div className="everything">
                <Background/>
                <NavBar/>
                <Landing/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
        </div>
        }
    </div>
  )
}

export default App