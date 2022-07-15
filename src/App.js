import React, {useState, useEffect} from 'react'
import './index.css'
import GridLoader from "react-spinners/GridLoader";
import './whirl.css'


const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    
  return (
    <div className="App">
        {/* <div class="whirl pong"></div> */}
        {
            loading ?
            <div className="loader">
                <GridLoader 
                color={"#6FFFD4"}
                loading={loading}
                size={15} 
                />
             </div>
            :
            <h1>hey</h1>
        }
    </div>
  )
}

export default App