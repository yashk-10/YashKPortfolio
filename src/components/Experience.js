import React, { useState, useEffect, useRef } from 'react'
import Work from './Work'
import Data from './Data'
import ExperienceMain from '../assets/ExperienceMain.png'
import '../styles/experience.css'

const Experience = () => {
  const [active, setActive] = useState("HubSpot");
  const HubSpot = useRef();
  const BlackBerry = useRef();
  const NodeApp = useRef();

  useEffect(() => {
    if(active === "BlackBerry"){
      BlackBerry.current.style.fontWeight = "700";
      BlackBerry.current.style.color = "#6FFFD4";
      HubSpot.current.style.fontWeight = "200";
      HubSpot.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "HubSpot"){
      HubSpot.current.style.fontWeight = "700";
      HubSpot.current.style.color = "#6FFFD4";
      BlackBerry.current.style.fontWeight = "200";
      BlackBerry.current.style.color = "white";
      NodeApp.current.style.fontWeight = "200";
      NodeApp.current.style.color = "white";
    } else if (active === "Node"){
      NodeApp.current.style.fontWeight = "700";
      NodeApp.current.style.color = "#6FFFD4";
      HubSpot.current.style.fontWeight = "200";
      HubSpot.current.style.color = "white";
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
            <a  ref={HubSpot} onClick={() => setActive("HubSpot")} id="HubSpot" className="company">HubSpot</a>
            <a  ref={BlackBerry} onClick={() => setActive("BlackBerry")} id="BlackBerry" className="company">BlackBerry</a>
            <a  ref={NodeApp} onClick={() => setActive("Node")} id="Node" className="company">Node App</a>
          </div>
          <div className="exp-content">
            {active === "HubSpot" && <Work data={Data} id={0}/>}
            {active === "BlackBerry" && <Work data={Data} id={1}/>}
            {active === "Node" && <Work data={Data} id={2} />}
          </div>
        </div>
    </div>
  )
}

export default Experience