import React from 'react';
import heroImg from '../../assects/images/heroimg.png';
import './hero.css';
import BallAnimation from '../ball-animation/ball-animation';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="ball-animation-container">
        <BallAnimation />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
            <div>
              <h1>Stay Ahead Of The Competition With Our Grants Alerts</h1>
              <h2>Access to up-to-date information on available grants gives you a competitive edge in securing the funding needed to achieve your goals. A Bi-Weekly Alerts.</h2>
              <a href="/" className="download-btn">GET STARTED FOR ONLY $9.97 A MONTH</a>
            </div>
          </div>
          <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
            <img src={heroImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
