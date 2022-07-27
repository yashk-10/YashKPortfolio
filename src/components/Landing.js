import React from 'react'
import landingImg from '../assets/landingImg.png'
import '../styles/landing.css'

const Landing = () => {
  return (
    <div id="landing" className="landing">
        <div className="landing-left">
            <h1 className="landing-name">Yash Kapoor</h1>
            <h1 className="landing-role">Software Developer</h1>
            <h1 className="landing-location">Toronto, Canada</h1>
        </div>
        <div className="landing-right">
          <div className="landing-summary">
            <b className="summary-text">Summary</b>
            <div className="summary-line"></div>
          </div>
          <div className="landing-headline">
            <b>I build meaningful code.</b>
          </div>
          <p className="landing-description">I’m a <b>Computer Science</b> student
            at the <br></br><b>University of Waterloo</b> enthusiastic<br></br> about creating digital solutions. </p>
          <a href="#about"><button className="landing-button"><span>Explore</span></button></a>
        </div>
        <img alt="" className="landing-img bounce-1" src={landingImg}/>
    </div>
  )
}

export default Landing