import React from 'react'
import '../styles/landing.css'

const Landing = () => {
  return (
    <div className="landing">
        <div className="landing-left">
            <h1 className="landing-name">Yash Kapoor</h1>
            <h1 className="landing-role">Software Developer</h1>
            <h1 className="landing-location">Toronto, Canada</h1>
        </div>
        <div className="landing-right">
            <h1 className="landing-summary">Summary</h1>
            <div></div>
        </div>
    </div>
  )
}

export default Landing