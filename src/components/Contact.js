import React from 'react'
import ContactLeft from '../assets/ContactLeft.png'
import ContactRight from '../assets/ContactRight.png'
import Arrow from '../assets/arrow.png'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="con-top">
            <h1 className="con-head">Contact</h1>
            <div className="con-line"></div>
        </div>
        <p className="con-summary">Feel Free to Reach Out! I Typically Respond Within 12 Hours.</p>

        <div className="con-meat">
            <div className="con-left">
                <a href="mailto:yashkapoor1004@gmail.com"><img alt="" className="con-left-img" src={ContactLeft} /></a>
                <div>
                    <p className="con-left-text">Send me a<br></br> message! I’m always seeking new opportunities and interested in<br></br> hearing any feedback.</p>
                    <div className="con-left-bottom">
                        <a style={{textDecoration: "none"}}href="mailto:yashkapoor1004@gmail.com">
                            <h1 className="con-left-action">Email</h1>
                            <img alt="" id="con-left-arrow" className="con-left-arrow" src={Arrow}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="con-right">
                <div>
                    <p className="con-right-text">Connect with me on LinkedIn! Looking forward to expading my network and building relationships with others in the industry.</p>
                    <div className="con-right-bottom">
                        <a style={{textDecoration: "none"}}href="https://www.linkedin.com/in/yashk10/">
                            <h1 className="con-right-action">LinkedIn</h1>
                            <img alt="" id="con-right-arrow" className="con-right-arrow" src={Arrow}/>
                        </a>
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/yashk10/"><img alt="" className="con-right-img" src={ContactRight} /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact