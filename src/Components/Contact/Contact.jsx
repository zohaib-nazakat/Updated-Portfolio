import React, { useEffect } from 'react'
import './Contact.css'
import { ContactMail } from '@mui/icons-material'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
    })
  return (
        <>
            <section id="contactform">

                <form action="#" className="contact-Form">

                <div className="contactTitle" >Contact Me</div>
                <div className="contectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur.</div>


                    <input type="text" name="name" id="name" placeholder='Your Name' required data-aos="fade-left"/>
                    <input type="email" name="email" id="email" placeholder='Your Email' required data-aos="fade-right"/>
                    <textarea name="comment" id="comment" cols="15" rows="10" placeholder='Your Message' data-aos="fade-left"></textarea>

                    <button type="submit" className='contactBtn'> <ContactMail/><span className='contactBtnText'> Contact</span></button>
                </form>
            </section>
        </>
    )
}

export default Contact