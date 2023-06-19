import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import heroimg from "../../assects/images/heroimg.png";
import './home.scss';
import BallAnimation from '../ball-animation/ball-animation';

const Home = () => {
  return (
    <>
      
        <Grid container>
        {/* <div  style={{ overflowX: 'hidden' }}>
        <BallAnimation /></div> */}
          <Grid item xs={2}></Grid>
         
          <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', mt: 13, justifyContent: 'center' }}>
            <Typography sx={{ color: '#1F2937', fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', dispaly: 'flex', justifyContent: 'flex-end' }}>
              Stay Ahead Of The Competition With Our Grants Alerts
            </Typography>
            <Typography sx={{ color: '#4B5563', fontSize: '1rem', lineHeight: '1.2', fontFamily: 'Poppins, sans-serif', padding: '8px 0px 0px', marginBottom: '8px' }}>
              Access to up-to-date information on available grants gives you a competitive edge in securing the funding needed to achieve your goals. A Bi-Weekly Alerts.
            </Typography>
            <Button
              color="inherit"
              sx={{
                borderRadius: '100px',
                backgroundColor: '#D22126',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px ',
                padding: '0.5rem o,5rem',
                margin: '24px 0px',
                width: '368px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: '#EEC932',
                  borderColor: '#EEC932',
                },
                border: '1px solid',
                borderColor: '#D22126',
                color: 'white',
              }}
            >
              GET STARTED FOR ONLY $9.97 A MONTH
            </Button>
            
          </Grid>
          <Grid item xs={4} sx={{ mt: 13 }}>
            <img src={heroimg} alt="Logo" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
    
    </>
  );
};

export default Home;