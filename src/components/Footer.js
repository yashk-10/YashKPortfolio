import React from 'react'
import Back from '../assets/backImg.png'
import Mail from '../assets/mail.png'
import DevPost from '../assets/devpost.png'
import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedIn.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <img alt="" className="foo-img" src={Back}/>
        <div className="foo-meat">
          <p className="foo-text">Created by Yash Kapoor</p>
          <div className="foo-right">
            <a href="mailto:yashkapoor1004@gmail.com"><img alt="" className="foo-icon" style={{width: "2.8vw"}}src={Mail}/></a>
            <a href="https://devpost.com/yashkapoor1004"><img alt="" className="foo-icon" style={{width: "2.8vw"}}src={DevPost}/></a>
            <a href="https://github.com/yashk-10"><img alt="" className="foo-icon" style={{width: "2.5vw"}}src={GitHub}/></a>
            <a href="https://www.linkedin.com/in/yashk10/"><img alt="" className="foo-icon" style={{width: "2.5vw"}}src={LinkedIn}/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer