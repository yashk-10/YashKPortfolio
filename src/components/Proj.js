import React from 'react'
import '../styles/experience.css'

const Proj = ({ data, pic, id }) => {
  return (
    <div>
        {data[id].map(item =>(
            <div className="proj">
              <div className="proj-left">
                <img className="proj-img" src={pic}/>
                <div className="proj-top">
                  <h1 className="proj-tool"></h1>
                  <h1 className="proj-tool"></h1>
                  <h1 className="proj-tool"></h1>
                </div>
                <div className="proj-bottom">
                  <h1 className="proj-tool"></h1>
                  <h1 className="proj-tool"></h1>
                  <h1 className="proj-tool"></h1>
                  <h1 className="proj-tool"></h1>
                </div>
              </div>
              <div className="proj-right">
                <h1 className="proj-name"></h1>
                <p className="proj-desc"></p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Proj