import React, { useState, useEffect } from 'react';
import '../styles/navbar.css'
import YashLogo from '../assets/YashLogo.png'
import Resume from '../assets/YashKResume.pdf'

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
    <div id="navbar" className={`navbar ${show && 'hidden'}`}>
        <a href="#App"><img alt="" className="nav-logo" src={YashLogo}/></a>
        <div className="nav-right">
            <a style={{"textDecoration": "none"}} href="#about" ><h1 className="nav-item">About</h1></a>
            <a style={{"textDecoration": "none"}} href="#experience"><h1 className="nav-item">Experience</h1></a>
            <a style={{"textDecoration": "none"}} href="#projects"><h1 className="nav-item">Projects</h1></a>
            <a style={{"textDecoration": "none"}} href="#contact"><h1 className="nav-item">Contact</h1></a>
            <a target="_blank" href={Resume}><button className="nav-button"><span>Resume</span></button></a>
        </div>
    </div>
  )
}

export default NavBar