import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'
import YashLogo from '../assets/YashLogo.png'

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`navbar ${show && 'hidden'}`}>
        <img className="nav-logo" src={YashLogo}/>
        <div className="nav-right">
            <a style={{"textDecoration": "none"}} href="#about"><h1 className="nav-item">About</h1></a>
            <a style={{"textDecoration": "none"}} href="#experience"><h1 className="nav-item">Experience</h1></a>
            <a style={{"textDecoration": "none"}} href="#projects"><h1 className="nav-item">Projects</h1></a>
            <a style={{"textDecoration": "none"}} href="#contact"><h1 className="nav-item">Contact</h1></a>
            <a href="../assets/YashKResume.pdf"><button className="nav-button"><span>Resume</span></button></a>
        </div>
    </div>
  )
}

export default NavBar