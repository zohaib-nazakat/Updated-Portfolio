import React from "react";
import "./Home.css";
import profile from "../../Images/profile.png";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from "react-scroll";
import { Face, Facebook, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum 
            odit, reprehenderit debitis nostrum sint consequatur.
          </p>

          <Link to="#"><button className="introBtn"> <p className="hirMeIcon"> <BusinessCenterIcon/> </p> Hire me</button></Link>
          
          <span className="socialMediaIcons">
            <span ><Link to="#" className="mediaIcons"><GitHub/></Link></span>
            <span ><Link to="#" className="mediaIcons"><LinkedIn/></Link></span>
            <span ><Link to="#" className="mediaIcons"><Facebook/></Link></span>
            <span ><Link to="#" className="mediaIcons"><WhatsApp/></Link></span>
          </span>
        </div>
        <img src={profile} alt="" className="bg" />
      </section>
    </>
  );
};

export default Home;
