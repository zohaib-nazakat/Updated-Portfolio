import React from 'react'
import './Skills.css';
import ui from '../../Images/ui.png'

const Skills = () => {
  return (
    <>
        <section id="skills">
            <span className="skillTitle">what I do</span>
            <span className="skillText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut corrupti dignissimos quibusdam! Repellendus, odio voluptates? Illum velit molestiae, magni assumenda nobis eveniet. Tempore quae quidem at assumenda nobis eius repellendus.</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign' />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">Web Development</h1>
                    <p className="skillBarPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptates!</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign'  />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">UI/UX Design</h1>
                    <p className="skillBarPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptates!</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ui} alt="UI UX" className='uiDesign'  />
                    <div className="skillBarText">
                    <h1 className="skillBarLogo">App Design</h1>
                    <p className="skillBarPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptates!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills