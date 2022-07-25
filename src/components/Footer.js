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
        <img className="foo-img" src={Back}/>
        <div className="foo-meat">
          <p className="foo-text">Created by Yash Kapoor</p>
          <div className="foo-right">
            <a href=""><img className="foo-icon" src={Mail}/></a>
            <a href=""><img className="foo-icon" src={DevPost}/></a>
            <a href=""><img className="foo-icon" src={GitHub}/></a>
            <a href=""><img className="foo-icon" src={LinkedIn}/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer