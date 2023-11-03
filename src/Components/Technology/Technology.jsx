import React, { useEffect } from 'react';
import './Technology.css';
import html from '../../Images/html5.png'
import css from '../../Images/css.png'
import JavaScript from '../../Images/javascript.png'
import tailwind from '../../Images/tailwind.png'
import react from '../../Images/react.png'
import sql from '../../Images/sql.png'
import mongodb from '../../Images/mongodb.png'
import github from '../../Images/github.png'
import nodejs from '../../Images/nodejs.png'
import firebase from '../../Images/firebase.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import { GitHub } from '@mui/icons-material';


const Technology = () => {
    
        useEffect(()=>{
            AOS.init({duration:2000})
        })
    
  return (
    <>
        <section id="tools" data-aos="fade-right">

            <div className="toolTitle" data-aos="fade-in"><h1>Technology</h1></div>
            <div className="toolText" data-aos="fade-down"><p>I have very strong basic in these techlogoies. So, that's why I think I can use them very effectively. Using these Technology I can clone and build any type of Project. I have More than One Year Experience of these Tools</p></div>
            <div className="toolDiv" data-aos="fade-left">
                <div className="toolChild" data-aos="zoom-in">
                <h3>HTML</h3>
                <img src={html} className='technoImg' alt="" srcset="" />
                </div>
                <div className="toolChild pe-5" data-aos="fade-left">
                    <h3>CSS</h3>
                    <img src={css} className='technoImg' alt="" srcset="" />
                </div>
                <div className="toolChild" data-aos="fade-right">
                    <h3>JavaScript</h3>
                    <img src={JavaScript} className='technoImg js' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-right">
                    <h3>Tailwind</h3>
                    <img src={tailwind} className='tailwind' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-left">
                    <h3>React Js</h3>
                    <img src={react} className='technoImg' alt="" srcset="" />    
                </div>
                <div className="toolChild " data-aos="fade-right">
                    <h3>My SQL</h3>
                    <img src={sql} className='sql' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-left">
                    <h3>MongoDB</h3>
                    <img src={mongodb} className='technoImg db' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-right">
                    <h3>GitHuB</h3>
                    <img src={github} className='technoImg' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-left">
                    <h3>Node Js</h3>
                    <img src={nodejs} className='nodejs' alt="" srcset="" />    
                </div>
                <div className="toolChild" data-aos="fade-right">
                    <h3>Fire Base</h3>
                    <img src={firebase} className='technoImg' alt="" srcset="" />    
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Technology;