import React from 'react'
import '../styles/navbar.css'
import YashLogo from '../assets/YashLogo.png'

const NavBar = () => {
  return (
    <div className="navbar">
        <img className="nav-logo" src={YashLogo}/>
        <div className="nav-right">
            <h1 className="nav-item">About</h1>
            <h1 className="nav-item">Experience</h1>
            <h1 className="nav-item">Projects</h1>
            <h1 className="nav-item">Contact</h1>
            <button className="nav-button">Resume</button>
        </div>
    </div>
  )
}

export default NavBar