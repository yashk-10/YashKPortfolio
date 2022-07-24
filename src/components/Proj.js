import React from 'react'
import '../styles/projects.css'

const Proj = ({ data, pic, id }) => {
  return (
    <div>
        {data[id].map(item =>(
            <div className="proj">
              <div className="proj-left">
                <img className="proj-img" src={pic}/>
                <div className="proj-top">
                  <h1 className="proj-tool">{item.tools[0]}</h1>
                  <h1 className="proj-tool">{item.tools[1]}</h1>
                  <h1 className="proj-tool">{item.tools[2]}</h1>
                </div>
                <div className="proj-bottom">
                  <h1 className="proj-tool">{item.tools[3]}</h1>
                  <h1 className="proj-tool">{item.tools[4]}</h1>
                  <h1 className="proj-tool">{item.tools[5]}</h1>
                  <h1 className="proj-tool">{item.tools[6]}</h1>
                </div>
              </div>
              <div className="proj-right">
                <h1 className="proj-name">{item.name}</h1>
                <p className="proj-desc">{item.desc}</p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Proj