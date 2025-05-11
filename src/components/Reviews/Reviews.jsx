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
              <button className='btn dark-btn'>See More &gt;</button>
    </div>
    
  )
}

export default Reviews
