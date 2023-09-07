import React from 'react'
import './Services.css';
import computer from '../../Images/computer.svg';
import web from '../../Images/web.png';
import webapp from '../../Images/webapp.png';
import mobile from '../../Images/mobile.png';
import mobileapp from '../../Images/mobileapp.png';
import paint from '../../Images/paint.svg';


const Services = () => {
  return (
    <>
        <div className="services_page">
            <div className="container services_content">
            <h1 className='fs-2 pt-5'>Provides You Best Web Development Services</h1>
            <p>Yeah' I can create any Template Professionaly </p>

            <div className="services_card">
                <div className="cards">
                    <img src={computer} className='logos' alt="" srcset="" />
                    <h1>website</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>
                <div className="cards">
                    <img src={web} className='logos' alt="" srcset="" />
                    <h1>card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>
                <div className="cards">
                    <img src={webapp} className='logos' alt="" srcset="" />
                    <h1>card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>
                <div className="cards">
                    <img src={mobile} className='logos' alt="" srcset="" />
                    <h1>card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>
                <div className="cards">
                    <img src={mobileapp} className='logos' alt="" srcset="" />
                    <h1>card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>
                <div className="cards">
                    <img src={paint} className='logos' alt="" srcset="" />
                    <h1>card</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione praesentium ipsum, optio incidunt obcaecati excepturi. Illo praesentium, minus fuga blanditiis unde alias repudiandae! Quod, debitis?</p>
                </div>

            </div>
                <div className="servieces_btn btn  mt-5">ViewAll</div>
            </div>
        </div>
    </>
  )
}

export default Services