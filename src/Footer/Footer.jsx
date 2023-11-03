import React from 'react'
import './Footer.css';
import { Link } from 'react-scroll';
import { CopyAll, Copyright, Face, Facebook, GitHub, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
        <>
            <section id="footer">
                
                <div className="footerTitle">Front-End Developer</div>
                <div className="footerText">Feel Free To Contact With Me !</div>


                    <div className="footerIons">
                        <span className='fIcons'> <a href="Https://wa.me/+923412802701" target='_blank'><WhatsApp/></a></span>
                        <span className='fIcons'><a href="/" target='_blank'><Facebook/></a></span>
                        <span className='fIcons'><a href="https://github.com/zohaib-nazakat" target='_blank'><GitHub/></a></span>
                        <span className='fIcons'><a href="https://www.linkedin.com/in/zohaib-nazakat/" target='_blank'><LinkedIn/></a></span>
                </div>
                <hr />
                <div className="footerBottom">
                    <h3> &copy; | Front-End Developer</h3>


                    <ul>
                        <li><Link  to='intro' spy={true} smooth={true} offset={-100}  target='_blank'>Home</Link></li>
                        <li><Link  to='aboutMe' spy={true} smooth={true} offset={-100}  target='_blank'>About</Link></li>
                        <li><Link  to='skills' spy={true} smooth={true} offset={-100}  target='_blank'>Skills</Link></li>
                        <li><Link  to='tools' spy={true} smooth={true} offset={-100}  target='_blank'>Skills</Link></li>
                    </ul>
                </div>
                
            </section>
        </>
    )
}

export default Footer