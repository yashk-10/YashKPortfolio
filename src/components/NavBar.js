import React from 'react'
import '../styles/navbar.css'
import YashLogo from '../assets/YashLogo.png'

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="nav-logo" src={YashLogo}/>
        <div className="nav-right">
            <a style={{"textDecoration": "none"}} href="/about"><h1 className="nav-item">About</h1></a>
            <a style={{"textDecoration": "none"}} href="/experience"><h1 className="nav-item">Experience</h1></a>
            <a style={{"textDecoration": "none"}} href="/projects"><h1 className="nav-item">Projects</h1></a>
            <a style={{"textDecoration": "none"}} href="/contact"><h1 className="nav-item">Contact</h1></a>
            <button className="nav-button"><span>Resume</span></button>
        </div>
    </div>
  )
}

export default NavBar