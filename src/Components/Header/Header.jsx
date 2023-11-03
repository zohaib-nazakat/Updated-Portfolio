import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { Close, ContactMail, DensityMedium, Facebook, MailOutline } from '@mui/icons-material';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // Initialize the menu to be hidden

  return (
    <nav className="navbar">
      <h3 className='logo'>PortFolio</h3>

      <div className="desktopMenu">
        <Link to='intro' spy={true} smooth={true} offset={-100} className="desktopMenuItem" target='_blank'>Home</Link>
        <Link to='skills' spy={true} smooth={true} offset={-50} className="desktopMenuItem">Skills</Link>
        <Link to='aboutMe' spy={true} smooth={true} offset={-100} className="desktopMenuItem">About Me</Link>
        <Link to='tools' spy={true} smooth={true} offset={-50} className="desktopMenuItem">Tools</Link>
      </div>

      <button className="deskTopMenuBtn" onClick={() => {
        document.getElementById('contactform').scrollIntoView({ behavior: 'smooth' });
      }}>
        <MailOutline /> Contact me
      </button>

      <span className='navBtn' onClick={() => setShowMenu(!showMenu)}> <DensityMedium /></span>

      <div className="NavMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to='intro' spy={true} smooth={true} offset={-100} className="listItem" onClick={() => setShowMenu(false)} target='_blank'>Home</Link>
        <Link to='skills' spy={true} smooth={true} offset={-50} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link to='aboutMe' spy={true} smooth={true} offset={-50} className="listItem" onClick={() => setShowMenu(false)}>About Me</Link>
        <Link to='tools' spy={true} smooth={true} offset={-50} className="listItem" onClick={() => setShowMenu(false)}>Tools</Link>
        <Link to='Contact' spy={true} smooth={true} offset={-50} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Header;
