import React from 'react'
import './HeaderCenter.css'
const HeaderCenter = (props) => {
  return (
    <div className="col-lg-12 headercenter">
                <h2>{props.children}</h2>
    </div>
  )
}

export default HeaderCenter