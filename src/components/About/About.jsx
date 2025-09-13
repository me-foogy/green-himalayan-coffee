import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImage.jpg'
import playIcon from '../../assets/playIcon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="aboutLeft">
        <img src={aboutImg} alt="About Image" className='aboutImage' onClick={()=>{setPlayState(true)}}/>
        <img src={playIcon} alt="play Icon" className='playImage' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="aboutRight">
        <h3>ABOUT US</h3>
        <h2>Respect First, Coffee Second</h2>
        <p>At <b>Green Himalayan Barista Training Center</b>, we are passionate about crafting skilled baristas and empowering individuals with the art and science of coffee. Located in the heart of Nepal, our center offers comprehensive training programs designed for those who aspire to build a rewarding career in the coffee industry—whether here or abroad.<br/>
          With expert instructors, hands-on learning, and a curriculum that covers everything from espresso basics to advanced latte art, we ensure our students gain real-world skills that meet international standards. Our mission is not only to teach coffee-making but to create confident, job-ready professionals who can thrive in cafes, restaurants, and coffee houses around the world.<br/>
          Join us and take the first step toward a global career in coffee!</p>
      </div>
    </div>
  )
}

export default About
