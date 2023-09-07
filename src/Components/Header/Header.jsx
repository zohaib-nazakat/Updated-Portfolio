import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { ContactMail, Facebook, MailOutline } from '@mui/icons-material';


const Header = () => {
  return (
    <nav className="navbar">
      <h3 className='logo'>PortFolio</h3>

      <div className="desktopMenu">
        <Link className="desktopMenuItem" to='/' target='_blank'>Home</Link>
        <Link className="desktopMenuItem" to='#'>Clients</Link>
        <Link className="desktopMenuItem" to='#'>About</Link>
        <Link className="desktopMenuItem" to='#'>Portfolio</Link>
      </div>

      <button className="deskTopMenuBtn">
        <MailOutline/> Contact me
      </button>

    </nav>
  )
}

export default Header