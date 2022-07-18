import React from 'react'
import Arrow from '../assets/arrow.png'
import YashAbout from '../assets/YashAbout.png'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about">
        <div className="about-top">
            <div className="about-line"></div>
            <h1 className="about-head">About</h1>
        </div>
        <p className="about-summary">Web Programmer. Defi Enthusiast. Innovator.</p>
        <div className="about-main">
            <div className="about-left">
                <p className="about-quote">Don’t wait<br></br> for <u>opportunity.</u><br></br> Create it.</p>
                <p className="about-top-desc">As an avid learner I’m exhilarated by the vast horizons of 
                <b> software development</b> in <b>real-world applications</b>. My current interest lies in <b>Cybersecurity </b> 
                anchored around the sphere of <b>Blockchain Technology</b>. 
                </p>
                <p className="about-bottom-desc">Some of my personal favourite tools, frameworks, and libraries include:
                <b> React, Node.js, AWS, Git, MongoDB, MySQL, Firebase, Material-UI &amp; Redux</b>
                </p>
                <div className="about-bottom">
                <a style={{textDecoration: "none"}}href=""><h1 className="about-action">What I’m working on right now</h1>
                    <img id="about-arrow" className="about-arrow" src={Arrow}/></a>
                </div>
            </div>
            <img className="about-yash" src={YashAbout}/>
        </div>
    </div>
  )
}

export default About