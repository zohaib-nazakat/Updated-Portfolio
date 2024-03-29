import React, { useEffect } from 'react'
import '../About/About.css'
import aboutImg from '../../Images/profile.png';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import CV from '../../CV/Zohaib_Nazakat_CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Aboutme = () => {

    useEffect(()=>{
        AOS.init({duration:1000})
    })
  return (
        <>
            <section id='aboutMe' data-aos='fade-right'>
                <h1 className='aboutHeading' >About Me</h1>
                <div className="aboutmeContent">
                <div className="aboutText">
                    <span className="aboutTitle">UI/UX Designer and Web Developer</span>
                    <div className="aboutTextPara" data-aos="zoom-in">Hello, I'm <span className="aboutName">Muhammad Zohaib</span> I have completed My Bachelor's in Computer Science From PUJC with Strong Academic Achivements. I'm also fully Proficient in <span className="aboutHighlight">Website Designing and Development.</span> Moreover, I can Design Landing Pages in Short Period of Time.</div>
                    <a href={CV} download target='_blank'> <button className="aboutBtn"><span className="aboutBtnIcon"><SimCardDownloadIcon/> Download CV</span></button></a>
                </div>
                
                <img src={aboutImg} alt="About Picture"  className='aboutImg' srcset="" data-aos="flip-up" />
                </div>
               
            </section>
        </>
    )
}

export default Aboutme;