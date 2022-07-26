import React from 'react'
import Back from '../assets/backImg.png'
import Arrow2 from '../assets/arrow2.png'
import '../styles/background.css'

const Background = () => {
  return (
    <div className="background">
      <p className="t t-1">&lt;body&gt;</p>
      <p className="t t-2">&lt;html&gt;</p>
      <p className="t t-3">&lt;div&gt;</p>
      <p className="t t-4">&lt;img&gt;</p>
      <p className="t t-5">&lt;body&gt;</p>


      <p className="d d-1">.....</p>
      <p className="d d-2">.....</p>
      <p className="d d-3">.....</p>
      <p className="d d-4">.....</p>
      <p className="d d-5">.....</p>
      <p className="d d-6">.....</p>
      <p className="d d-7">.....</p>
      <p className="d d-8">.....</p>
      <p className="d d-9">.....</p>
      <p className="d d-10">.....</p>
      <p className="d d-11">.....</p>
      <p className="d d-12">.....</p>
      <p className="d d-13">.....</p>
      <p className="d d-14">.....</p>
      <p className="d d-15">.....</p>


      <img className="ar ar-1" src={Arrow2}/>
      <img className="ar ar-2" src={Arrow2}/>
      <img className="ar ar-3" src={Arrow2}/>
      <img className="ar ar-4" src={Arrow2}/>

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