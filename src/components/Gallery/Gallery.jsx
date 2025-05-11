import React from 'react'
import './Gallery.css'
import program_1 from '../../assets/program_1.jpg'

const Gallery = () => {
  return (
    <div className='gallery-container' name='gallery'>
      <div className="gallery">
        <img src={program_1} alt="gallery image" />
        <img src={program_1} alt="gallery image" />
        <img src={program_1} alt="gallery image" />
        <img src={program_1} alt="gallery image" />
      </div>
      <button className='btn dark-btn'>See More &gt;</button>
    </div>
  )
}

export default Gallery
