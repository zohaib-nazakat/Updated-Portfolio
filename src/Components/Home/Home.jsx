import React from "react";
import "./Home.css";
import profile from "../../Images/profile.png";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from "react-scroll";
import {  Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hi">
            Hello, </span><br />
            <span className="introText">
              I'm <span className="name">Zohaib</span> <br />
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
    </>
  );
};

export default Home;
