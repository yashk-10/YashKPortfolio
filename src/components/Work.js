import React from 'react'

const Work = ({ data, id }) => {
  return (
    <div>
        {data[id].map(item =>(
            <div className="work">
                <h1 className="work-role">{item.role}</h1>
                <h1 className="work-time">{item.time}</h1>
                <p className="work-bullet1">{item.bullet1}</p>
                <p className="work-bullet2">{item.bullet2}</p>
                <p className="work-bullet3">{item.bullet3}</p>
            </div>
        ))}
    </div>
  )
}

export default Work