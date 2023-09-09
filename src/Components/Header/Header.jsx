import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { Close, ContactMail, DensityMedium, Facebook, MailOutline } from '@mui/icons-material';


const Header = () => {
  return (
    <nav className="navbar">
      <h3 className='logo'>PortFolio</h3>

      <div className="desktopMenu">
        <Link  to='intro' spy={true} smooth={true} offset={-100}  className="desktopMenuItem" target='_blank'>Home</Link>
        <Link  to='skills' spy={true} smooth={true} offset={-50} className="desktopMenuItem" >Skills</Link>
        <Link  to='aboutMe' spy={true} smooth={true} offset={-100} className="desktopMenuItem" >About Me</Link>
        <Link  to='tools' spy={true} smooth={true} offset={-50} className="desktopMenuItem" >Tools</Link>
      </div>

      <button className="deskTopMenuBtn"  onClick={()=>{
        document.getElementById('contactform').scrollIntoView({behavior:'smooth'});
      }} offset={-100}>
        <MailOutline/> Contact me
      </button>

      <span className='navBtn'> <DensityMedium/></span>

    </nav>
  )
}

export default Header