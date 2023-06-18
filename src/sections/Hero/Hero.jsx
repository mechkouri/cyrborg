import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">welcome to Cybrog</h6>
            <h4 className="hero-title"><em>Browse</em> our Popular ganes here</h4>
            <div className="main-button">
                <a href="browse.html">Browse Now</a>
            </div>
        </div>
    </div>
  )
}

export default Hero