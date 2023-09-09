import React from 'react'
import './Footer.css';
import { Link } from 'react-scroll';
import { CopyAll, Copyright, Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
        <>
            <section id="footer">
                
                <div className="footerTitle">Front-End Developer</div>
                <div className="footerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis eaque consequuntur ipsam nobis, officia aliquid consequatur. Temporibus, aspernatur? Quos.</div>


                    <div className="footerIons">
                        <span className='fIcons'><Twitter/></span>
                        <span className='fIcons'><Facebook/></span>
                        <span className='fIcons'><GitHub/></span>
                        <span className='fIcons'><LinkedIn/></span>
                </div>
                <hr />
                <div className="footerBottom">
                    <h3><Copyright/> | Front-End Developer</h3>


                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                
            </section>
        </>
    )
}

export default Footer