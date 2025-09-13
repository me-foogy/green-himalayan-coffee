import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'

const Gallery = () => {
  return (
    <div className='gallery-container' name='gallery'>
      <div className="gallery">
        <img src={gallery_3} alt="gallery image" />
        <img src={gallery_4} alt="gallery image" />
        <img src={gallery_2} alt="gallery image" />
        <img src={gallery_1} alt="gallery image" />
      </div>
      <button className='btn dark-btn'><a href='https://www.facebook.com/profile.php?id=100089365065685&sk=photos'>See More &gt;</a></button>
    </div>
  )
}

export default Gallery
