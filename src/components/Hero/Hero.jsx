import React from 'react'
import { Link } from 'react-scroll';
import './hero.css'

const Hero = () => {
  return (
    <div className='hero container' name='home'>
      <div className="hero-text">
        <h1>Green Himalayan <br/> Barista Training Center</h1>
        <p>Respect First, Coffee Second</p><br/>
        <Link to='services' smooth={true} offset={-220} duration={500} className='btn'>Scroll Down</Link>
      </div>
    </div>
  )
}

export default Hero
