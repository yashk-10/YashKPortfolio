import React from 'react'
import '../styles/experience.css'

const Proj = ({ data, pic, id }) => {
  return (
    <div>
        {data[id].map(item =>(
            <div className="proj">
                <img src={pic}/>
            </div>
        ))}
    </div>
  )
}

export default Proj