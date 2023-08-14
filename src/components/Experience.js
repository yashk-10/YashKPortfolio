import React, { useState, useEffect, useRef } from 'react'
import Work from './Work'
import Data from './Data'
import ExperienceMain from '../assets/ExperienceMain.png'
import '../styles/experience.css'

const Experience = () => {
  const [active, setActive] = useState("BlackBerry");
  const BlackBerry = useRef()
  const Qoom = useRef()
  const NodeApp = useRef()

  useEffect(() => {
    if(active === "BlackBerry"){
      BlackBerry.current.style.fontWeight = "700";
      BlackBerry.current.style.color = "#6FFFD4";
      Qoom.current.style.fontWeight = "200";
      Qoom.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "Qoom"){
      Qoom.current.style.fontWeight = "700";
      Qoom.current.style.color = "#6FFFD4";
      BlackBerry.current.style.fontWeight = "200";
      BlackBerry.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "Node"){
      NodeApp.current.style.fontWeight = "700";
      NodeApp.current.style.color = "#6FFFD4";
      Qoom.current.style.fontWeight = "200";
      Qoom.current.style.color = "white";
      BlackBerry.current.style.fontWeight = "200";
      BlackBerry.current.style.color = "white";
    }

  }, [active]);





  return (
    <div id="experience" className="experience">
        <div className="exp-top">
            <h1 className="exp-head">Experience</h1>
            <div className="exp-line"></div>
        </div>
        <p className="exp-summary">Attaining Industry-Specific Skills at Growing Companies.</p>
        <div className="exp-meat">
          <img alt="" className="exp-img" src={ExperienceMain}/>
          <div className="exp-companies">
            <a  ref={BlackBerry} onClick={() => setActive("BlackBerry")} id="BlackBerry" className="company">BlackBerry</a>
            <a  ref={Qoom} onClick={() => setActive("Qoom")} id="Qoom" className="company">Qoom</a>
            <a  ref={NodeApp} onClick={() => setActive("Node")} id="Node" className="company">Node App</a>
          </div>
          <div className="exp-content">
            {active === "BlackBerry" && <Work data={Data} id={0}/>}
            {active === "Qoom" && <Work data={Data} id={1}/>}
            {active === "Node" && <Work data={Data} id={2} />}
          </div>
        </div>
    </div>
  )
}

export default Experience