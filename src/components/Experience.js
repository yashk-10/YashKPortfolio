import React, { useState } from 'react'
import Work from './Work'
import Data from './Data'
import ExperienceMain from '../assets/ExperienceMain.png'
import '../styles/experience.css'

const Experience = () => {
  const [active, setActive] = useState("Qoom");


  return (
    <div className="experience">
        <div className="exp-top">
            <h1 className="exp-head">Experience</h1>
            <div className="exp-line"></div>
        </div>
        <p className="exp-summary">Attaining Industry-Specific Skills at Growing Companies.</p>
        <img className="exp-img" src={ExperienceMain}></img>
        <div className="exp-companies">
          <a onClick={() => setActive("Qoom")} id="Qoom" className="company">Qoom</a>
          <a onClick={() => setActive("Felix")} id="Felix" className="company">Felix</a>
          <a onClick={() => setActive("Node")} id="Node" className="company">Node App</a>
        </div>
        <div className="exp-content">
          {active === "Qoom" && <Work data={Data} id={0}/>}
          {active === "Felix" && <Work data={Data} id={1}/>}
          {active === "Node" && <Work data={Data} id={2} />}
        </div>
    </div>
  )
}

export default Experience