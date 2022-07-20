import React from 'react'
import '../styles/experience.css'

const Work = ({ data, id }) => {
  return (
    <div>
        {data[id].map(item =>(
            <div className="work">
                <h1 className="work-role">{item.role}</h1>
                <h1 className="work-time">{item.time}</h1>
                <p className="work-desc bull-1">{item.bullet1}</p>
                <p className="work-desc bull-2">{item.bullet2}</p>
                <p className="work-desc bull-3">{item.bullet3}</p>
            </div>
        ))}
    </div>
  )
}

export default Work