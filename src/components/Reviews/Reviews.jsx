import React, { useRef } from 'react'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/default_user.png'
import user_2 from '../../assets/user_1.jpg'
import user_3 from '../../assets/user_1.jpg'
import './Reviews.css'


const Reviews = () => {

    const slider = useRef();
        let tx=0;

    const slideForward = () => {
        if(tx > -50){tx-=25;}
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0){tx+=25;}
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='reviews'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Alisha Sampang</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Green Himalayan Barista Training Centre provides top-quality barista training. The classes are well-structured, and the learning process is smooth and enjoyable. The fees are affordable and absolutely worth it. The instructor is humble and has a great sense of humor, which makes the classes fun and engaging. If you’re planning to go abroad, this place also provides valuable guidance. Highly recommended for anyone passionate about coffee and looking to build a successful career in this field!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Garima Joshi</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Best training center. I was in a dilemma on what to do with the free time I had. Green Himalayan Barista Training Center provided me with awesome skills in making so many different kind of drinks and my art improved really well in just a few days. Teacher her has a really fun way of teaching and you never get bored in class. Every day it is a new technique and a new drink. Very much recommended , worth the price as well.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Rupmani Bhujel</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> I'm Rupmani Bhujel, a student at Green Himalayan Barista Training Center, and I highly recommend it to anyone passionate about coffee or looking for job opportunity in nepal or abroad this is an excellent place to start.The training is hands-on, and the environment is friendly and supportive.  instructor over here is really helpfull who makes learning easy and fun. It’s a great place to start your barista journey.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Riyana Shrestha</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> I had such an enriching experience at the Green Himalayan Barista Training Centre! The course was super informative without being too serious or overwhelming thanks to the instructor! You can really tell that they enjoy what they’re doing. If you’re looking to improve your barista skills or just starting out, I’d definitely recommend this place!</p>
                    </div>
                </li>
            </ul>
        </div>
              <button className='btn dark-btn'><a href='https://www.google.com/maps/place/Green+Himalayan+Barista+Training+Center/@27.673004,85.3815194,17z/data=!4m8!3m7!1s0x39eb1b8c1a6461a5:0x49330e7e21764a38!8m2!3d27.6729993!4d85.3840943!9m1!1b1!16s%2Fg%2F11tn580f2_?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'>( 200+ Positive Reviews )    See More &gt;</a></button>
    </div>
    
  )
}

export default Reviews
