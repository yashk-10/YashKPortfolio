import React from 'react'
import Proj from './Proj'
import Beacon from '../assets/beacon.png'
import Wildfire from '../assets/wildfire.png'
import Universal from '../assets/universal.png'
import ProjData from './ProjData'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className="projects">
        <div className="projects-top">
            <div className="projects-line"></div>
            <h1 className="projects-head">Projects</h1>
        </div>
        <p className="projects-summary">Bringing Innovative Ideas to Life.</p>
        <Proj data={ProjData} pic={Beacon} id={0}/>
        <Proj data={ProjData} pic={Universal} id={1}/>
        <Proj data={ProjData} pic={Wildfire} id={2}/>
    </div>
  )
}

export default Projects