import React from 'react'
import './Programs.css'
import program1 from '../../assets/program_1.jpg'
import program2 from '../../assets/program_2.jpg'
import program3 from '../../assets/program_3.jpg'
import program_1_icon from '../../assets/program_1_icon.png'
import program_2_icon from '../../assets/program_2_icon.png'
import program_3_icon from '../../assets/program_3_icon.png'

const Programs = () => {
  return (
    <div className='programs' name='services'>
      <div className="program">
        <img src={program1} alt="Program Image" />
            <div className='caption'> 
                <img src={program_1_icon} alt="icon Image" />
                <p> Basic Course </p>
            </div>
      </div>

      <div className="program">
        <img src={program2} alt="Program Image" />
        <div className='caption'> 
                <img src={program_2_icon} alt="icon Image" />
                <p> Advanced Course </p>
            </div>
      </div>

      <div className="program">
        <img src={program3} alt="Program Image" />
        <div className='caption'> 
                <img src={program_3_icon} alt="icon Image" />
                <p> Career Abroad </p>
            </div>
      </div>
    </div>
  )
}

export default Programs
