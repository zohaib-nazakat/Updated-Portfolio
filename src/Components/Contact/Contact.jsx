import React from 'react'
import './Contact.css'
import { ContactMail } from '@mui/icons-material'

const Contact = () => {
  return (
        <>
            <section id="contactForm">

                <form action="#" className="contact-Form">

                <div className="contactTitle">Contact Me</div>
                <div className="contectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur.</div>


                    <input type="text" name="name" id="name" placeholder='Your Name' required/>
                    <input type="email" name="email" id="email" placeholder='Your Email' required/>
                    <textarea name="comment" id="comment" cols="15" rows="10" placeholder='Your Message'></textarea>

                    <button type="submit" className='contactBtn'> <ContactMail/><span className='contactBtnText'> Contact</span></button>
                </form>
            </section>
        </>
    )
}

export default Contact