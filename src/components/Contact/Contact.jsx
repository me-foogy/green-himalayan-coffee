import React from 'react'
import './Contact.css'
import mail_image from '../../assets/email.png'
import phone_image from '../../assets/phone-call.png'
import location_image from '../../assets/pin.png'

const Contact = () => {
  return (
    <div className='contact container' name='contact'>
      <div className="contact-col">
        <h3>call us or send a message</h3>
        <ul>
          <li><img src={mail_image}/> greenhimalayancoffee2018@gmail.com</li>
          <li><img src={phone_image}/> +977 9867070814</li>
          <li><img src={location_image}/>Madhyapur Thimi, Opposite of TB hospital<br/>Bhaktapur, Nepal</li>
        </ul>
      </div>
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4331625514983!2d85.38151937582677!3d27.673004027004747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b8c1a6461a5%3A0x49330e7e21764a38!2sGreen%20Himalayan%20Barista%20Training%20Center!5e0!3m2!1sen!2snp!4v1746730129655!5m2!1sen!2snp"
          width="600"
          height="450" 
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}

export default Contact
