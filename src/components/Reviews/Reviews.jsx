import React, { useRef } from 'react'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.jpg'
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
                                <h3>Sworup Karki</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab eligendi ipsum atque ipsam doloribus aspernatur perspiciatis iste dicta praesentium quaerat officia minima delectus blanditiis, sequi placeat optio saepe architecto?</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sworup Karki</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab eligendi ipsum atque ipsam doloribus aspernatur perspiciatis iste dicta praesentium quaerat officia minima delectus blanditiis, sequi placeat optio saepe architecto?</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sworup Karki</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab eligendi ipsum atque ipsam doloribus aspernatur perspiciatis iste dicta praesentium quaerat officia minima delectus blanditiis, sequi placeat optio saepe architecto?</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sworup Karki</h3>
                                <span>⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ab eligendi ipsum atque ipsam doloribus aspernatur perspiciatis iste dicta praesentium quaerat officia minima delectus blanditiis, sequi placeat optio saepe architecto?</p>
                    </div>
                </li>
            </ul>
        </div>
              <button className='btn dark-btn'><a href='https://www.google.com/maps/place/Green+Himalayan+Barista+Training+Center/@27.673004,85.3815194,17z/data=!4m8!3m7!1s0x39eb1b8c1a6461a5:0x49330e7e21764a38!8m2!3d27.6729993!4d85.3840943!9m1!1b1!16s%2Fg%2F11tn580f2_?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'>See More &gt;</a></button>
    </div>
    
  )
}

export default Reviews
