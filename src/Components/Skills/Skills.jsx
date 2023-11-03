import React, { useEffect } from 'react'
import './Skills.css';
import ui from '../../Images/ui.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    })


  return (
    <>
        <section id="skills">
            <span className="skillTitle" data-aos="fade-right">what I do</span>
            <span className="skillText" data-aos="fade-left">I can Build & Design Any Type of Landing And Registration Pages Professionally Using MERN Stack Technology </span>

            <div className="skillBars">
                <div className="skillBar" data-aos="fade-right">
                    <img src={ui} alt="UI UX" className='uiDesign' />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">Web Development</h1>
                    <p className="skillBarPara">I can Build Websites Professionally</p>
                    </div>
                </div>
            </div>
            <div className="skillBars" data-aos="fade-left">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign'  />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">UI/UX Design</h1>
                    <p className="skillBarPara">If You Want to Looks your websites Awesome then don't Worry I got You.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars" data-aos="fade-right">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign'  />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">App Design</h1>
                    <p className="skillBarPara">Along with websites I can build and Design Mobile Apps</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills