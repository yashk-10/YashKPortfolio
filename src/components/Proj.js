import React from 'react'
import edges from '../assets/edges.png'
import '../styles/projects.css'

const Proj = ({ data, pic, id }) => {
  let sides = false
  if(id == 1){
    sides = true
  }
  return (
    <div>
       {sides ? data[id].map(item =>(
            <div className="proj">
              <div className="proj-right-sides">
                <h1 className="proj-name-sides">{item.name}</h1>
                <p className="proj-desc">{item.desc1}</p>
                <p className="proj-desc">{item.desc2}</p>
                <p className="proj-desc">{item.desc3}</p>
              </div>
              <div className="proj-left">
                <div className="proj-top">
                  <h1 className="proj-tool">{item.tools[0]}</h1>
                  <h1 className="proj-tool">{item.tools[1]}</h1>
                  <h1 className="proj-tool">{item.tools[2]}</h1>
                  <img className="proj-edge-top" src={edges}/>
                </div>
                <img className="proj-img" src={pic}/>
                <div className="proj-bottom">
                  <img className="proj-edge-bottom" src={edges}/>
                  <h1 className="proj-tool">{item.tools[3]}</h1>
                  <h1 className="proj-tool">{item.tools[4]}</h1>
                  <h1 className="proj-tool">{item.tools[5]}</h1>
                  <h1 className="proj-tool">{item.tools[6]}</h1>
                </div>
              </div>
            </div>
        )): data[id].map(item =>(
            <div className="proj">
              <div className="proj-left">
                <div className="proj-top">
                  <h1 className="proj-tool">{item.tools[0]}</h1>
                  <h1 className="proj-tool">{item.tools[1]}</h1>
                  <h1 className="proj-tool">{item.tools[2]}</h1>
                  <img className="proj-edge-top" src={edges}/>
                </div>
                <img className="proj-img" src={pic}/>
                <div className="proj-bottom">
                  <img className="proj-edge-bottom" src={edges}/>
                  <h1 className="proj-tool">{item.tools[3]}</h1>
                  <h1 className="proj-tool">{item.tools[4]}</h1>
                  <h1 className="proj-tool">{item.tools[5]}</h1>
                  <h1 className="proj-tool">{item.tools[6]}</h1>
                </div>
              </div>
              <div className="proj-right">
                <h1 className="proj-name">{item.name}</h1>
                <p className="proj-desc">{item.desc1}</p>
                <p className="proj-desc">{item.desc2}</p>
                <p className="proj-desc">{item.desc3}</p>
              </div>
            </div>
        ))}



        {/* {data[id].map(item =>(
            <div className="proj">
              <div className="proj-left">
                <div className="proj-top">
                  <h1 className="proj-tool">{item.tools[0]}</h1>
                  <h1 className="proj-tool">{item.tools[1]}</h1>
                  <h1 className="proj-tool">{item.tools[2]}</h1>
                  <img className="proj-edge-top" src={edges}/>
                </div>
                <img className="proj-img" src={pic}/>
                <div className="proj-bottom">
                  <img className="proj-edge-bottom" src={edges}/>
                  <h1 className="proj-tool">{item.tools[3]}</h1>
                  <h1 className="proj-tool">{item.tools[4]}</h1>
                  <h1 className="proj-tool">{item.tools[5]}</h1>
                  <h1 className="proj-tool">{item.tools[6]}</h1>
                </div>
              </div>
              <div className="proj-right">
                <h1 className="proj-name">{item.name}</h1>
                <p className="proj-desc">{item.desc1}</p>
                <p className="proj-desc">{item.desc2}</p>
                <p className="proj-desc">{item.desc3}</p>
              </div>
            </div>
        ))} */}
    </div>
  )
}

export default Proj