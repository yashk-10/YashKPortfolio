import React from 'react'
import Back from '../assets/backImg.png'
import '../styles/background.css'

const Background = () => {
  return (
    <div className="background">
        <p className="tag-1">&lt;body&gt;</p>
        <img className="back-img" src={Back}/>
        <img className="back-img rot" src={Back}/>
        <img className="back-img" src={Back}/>
        <img className="back-img rot" src={Back}/>
        <img className="back-img" src={Back}/>
        <img className="back-img rot" src={Back}/>


    </div>
  )
}

export default Background