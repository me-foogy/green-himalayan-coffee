import React, { useState,useEffect } from 'react'
import { Link } from 'react-scroll';
import './navBar.css'
import logo from '../../assets/logo.png'
import hamburgerMenu from '../../assets/hamburgerMenu.png'

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="Logo" className='logo' />
        <h3>GREEN  HIMALAYAN  COFFEE</h3>
        <ul className={mobileMenu?'':'mobile-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true} offset={-220} duration={500}>Our Services</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='reviews' smooth={true} offset={-260} duration={500}>Reviews</Link></li>
            <li className='btn'><Link to='contact' smooth={true} offset={-160} duration={500}>Contact Us</Link></li>
        </ul>
        <img src={hamburgerMenu} alt="menu-icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
