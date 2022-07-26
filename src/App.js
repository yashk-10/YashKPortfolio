import React, {useState, useEffect} from 'react'
import './styles/index.css'
import './styles/navbar.css'
import GridLoader from "react-spinners/GridLoader";
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import About from './components/About';
import Background from './components/Background';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './whirl.css'


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
        <>
                <Background/>
                <NavBar/>
                <Landing/>
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
        </>
        {/* <div class="whirl pong"></div> */}
        {/* {
            loading ?
            <div className="loader">
                <GridLoader 
                color={"#6FFFD4"}
                loading={loading}
                size={15} 
                />
             </div>
            :
            <>
                <NavBar/>
                <Landing/>
                <About/>
            </>
        } */}
    </div>
  )
}

export default App