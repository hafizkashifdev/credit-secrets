import React from "react";
import { Typography, Button, Grid, Box, Container } from "@mui/material";
import heroimg from "../../assects/images/heroimg.png";
import "./home.scss";
import BallAnimation from "../ball-animation/ball-animation";
import FinancialFreedom from "../financial-freedom/financial-freedom";
import Tracking from "../tracking/tracking";
import Testimonial from "../testimonial/testimonial";
import SampleCards from "../sample-cards/sample-cards";
import ActCard from "../act-card/act-card";
import Faq from "../faq/faq";
import GrantFunding from "../grant-funding/grant-funding";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";

const Home = () => {
  return (
    <>    
    <Navbar/>
    
<Hero/>
     <FinancialFreedom/>
     <Tracking/>
     <Testimonial/>
     <SampleCards/>
     <ActCard/>
     <Faq/>
     <GrantFunding/>
     <Footer/>
     
     
     </>

  );
};

export default Home;
