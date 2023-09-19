import React from 'react'
import './Skills.css';
import ui from '../../Images/ui.png'

const Skills = () => {
  return (
    <>
        <section id="skills">
            <span className="skillTitle">what I do</span>
            <span className="skillText">I can Build & Design Any Type of Landing And Registration Pages Professionally Using MERN Stack Technology </span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign' />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">Web Development</h1>
                    <p className="skillBarPara">I can Build Websites Professionally</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign'  />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">UI/UX Design</h1>
                    <p className="skillBarPara">If You Want to Looks your websites Awesome then don't Worry I got You.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
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