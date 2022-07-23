import React from 'react'
import Proj from './Proj'
import Lan from '../assets/landingImg.png'
import ProjData from './ProjData'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className="projects">
        <div className="proj-top">
            <div className="proj-line"></div>
            <h1 className="proj-head">Projects</h1>
        </div>
        <p className="proj-summary">Bringing Innovative Ideas to Life.</p>
        {/* <Proj data={ProjData} pic={Lan} id={0}/>
        <Proj data={ProjData} id={1}/>
        <Proj data={ProjData} id={2}/> */}
    </div>
  )
}

export default Projects