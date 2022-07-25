import React, { useState, useEffect, useRef } from 'react'
import Work from './Work'
import Data from './Data'
import ExperienceMain from '../assets/ExperienceMain.png'
import '../styles/experience.css'

const Experience = () => {
  const [active, setActive] = useState("Qoom");
  const Qoom = useRef()
  const Felix = useRef()
  const NodeApp = useRef()

  useEffect(() => {
    if(active === "Qoom"){
      Qoom.current.style.fontWeight = "700";
      Qoom.current.style.color = "#6FFFD4";
      Felix.current.style.fontWeight = "200";
      Felix.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "Felix"){
      Felix.current.style.fontWeight = "700";
      Felix.current.style.color = "#6FFFD4";
      Qoom.current.style.fontWeight = "200";
      Qoom.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "Node"){
      NodeApp.current.style.fontWeight = "700";
      NodeApp.current.style.color = "#6FFFD4";
      Felix.current.style.fontWeight = "200";
      Felix.current.style.color = "white";
      Qoom.current.style.fontWeight = "200";
      Qoom.current.style.color = "white";
    }

  }, [active]);





  return (
    <div className="experience">
        <div className="exp-top">
            <h1 className="exp-head">Experience</h1>
            <div className="exp-line"></div>
        </div>
        <p className="exp-summary">Attaining Industry-Specific Skills at Growing Companies.</p>
        <div className="exp-meat">
          <img className="exp-img" src={ExperienceMain}></img>
          <div className="exp-companies">
            <a ref={Qoom} onClick={() => setActive("Qoom")} id="Qoom" className="company">Qoom</a>
            <a ref={Felix} onClick={() => setActive("Felix")} id="Felix" className="company">Felix</a>
            <a ref={NodeApp} onClick={() => setActive("Node")} id="Node" className="company">Node App</a>
          </div>
          <div className="exp-content">
            {active === "Qoom" && <Work data={Data} id={0}/>}
            {active === "Felix" && <Work data={Data} id={1}/>}
            {active === "Node" && <Work data={Data} id={2} />}
          </div>
        </div>
    </div>
  )
}

export default Experience