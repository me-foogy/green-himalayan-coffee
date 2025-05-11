import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImage.jpg'
import playIcon from '../../assets/playIcon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="aboutLeft">
        <img src={aboutImg} alt="About Image" className='aboutImage'/>
        <img src={playIcon} alt="play Icon" className='playImage'/>
      </div>
      <div className="aboutRight">
        <h3>ABOUT US</h3>
        <h2>Respect First, Coffee Second</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ea! Quae inventore reprehenderit dolorum aliquam, molestiae nulla vitae amet corrupti deserunt odio consequatur iure eaque assumenda, ducimus adipisci quaerat culpa.</p>
      </div>
    </div>
  )
}

export default About
