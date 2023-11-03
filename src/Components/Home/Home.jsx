import React, { useEffect } from "react";
import "./Home.css";
import profile from "../../Images/profile.png";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from "react-scroll";
import {  Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../Images/css.png ';



const Home = () => {
  
    useEffect(()=>{
      AOS.init({duration:1000})
    });

  return (
    <>
      <section id="intro" >
        <div className="introContent" data-aos="fade-right">
          <span className="hi" >
            Hello, </span><br />
            <span className="introText">
              I'm <span className="name" data-aos="zoom-in">Zohaib</span> <br />
              <span className="endText">Website Designer</span>
            </span>
          
          <p className="introPara">
          Looking for an Opportunity in field of Web Development | React JS | HTML | CSS | JavaScript | Bootstrap 5
          </p>

          <Link to="#"><button className="introBtn" onClick={()=>{
        document.getElementById('contactform').scrollIntoView({behavior:'smooth'});
      }}> <p className="hirMeIcon"> <BusinessCenterIcon/> </p> Hire me</button></Link>
          
          <span className="socialMediaIcons">
            <span ><a href="https://github.com/zohaib-nazakat" className="mediaIcons" target="_blank"><GitHub/></a></span>
            <span ><a href="https://www.linkedin.com/in/zohaib-nazakat/" className="mediaIcons" target="_blank"><LinkedIn/></a></span>
            <span ><a href="/" className="mediaIcons" target="_blank"><Facebook/></a></span>
            <span ><a href="Https://wa.me/+923412802701" className="mediaIcons" target="_blank"><WhatsApp/></a></span>
          </span>
        </div>
        <img src={profile} alt="" className="bg" />
      </section>





{/* <Carousel>
      <Carousel.Item>
        <img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg" style={{height:'100vh', width:'100vw'}} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg" style={{height:'100vh', width:'100vw'}} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg" style={{height:'100vh', width:'100vw'}} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel> */}



    </>
  );
};

export default Home;
