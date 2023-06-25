import React from 'react';
// import { Typography, Button,  Grid } from '@mui/material';
import trackingImg from "../../assects/images/tracking=img.png";
// import { Container } from '@mui/material';

import './tracking.css'


const Tracking = () => {
  return (
   
    <>
    <section id="tracking" className="d-flex align-items-center" >
        <div className="container" >
          <div className="row">
            <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
              <div>
                <h1 >Stay Ahead Of The Competition With Our Grants Alerts</h1>
                <h2>Access to up-to-date information on available grants gives you a competitive edge in securing the funding needed to achieve your goals. A Bi-Weekly Alerts.</h2>
                <a href="/" className="download-btn">GET STARTED </a>
              </div>
            </div>
            <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
              <img src={trackingImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
   
    </>
  
  );
}

export default Tracking;
