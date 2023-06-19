import React from 'react';
import { Typography, Button,  Grid } from '@mui/material';
import trackingImg from "../../assects/images/tracking=img.png";

const Tracking = () => {
  return (
   
    <>     
      <Grid container  >
      <Grid xs={2}>
        
      </Grid>
        <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column',mt:2, justifyContent:'center',}}>
          <Typography sx={{color:'black' ,fontSize:'3.5rem',lineHeight:'1.2',fontWeight:600, fontFamily: 'Poppins, sans-serif',margin:'0 0 8px',dispaly:'flex',justifyContent:'flex-end'}}>
          Tracking Grants Have Never Been Easier
          </Typography>
          <Typography sx={{ color: '#4B5563', fontSize: '1rem', lineHeight: '1.2', fontFamily: 'Poppins, sans-serif', padding: '8px 0px 0px', marginBottom: '8px' }}>
          Having access to databases that provide up-to-date information on available grants is an essential tool for individuals and organizations seeking funding. A Bi-Weekly alert, every other Monday in your inbox.
          </Typography>
          <Button
            color="inherit"
            sx={{
              borderRadius: '100px',
            //   p: '5px',
              backgroundColor: '#D22126',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px ',
              padding: '0.5rem o,5rem',
              margin:'24px 0px',
              width:'166px',
              height:'48px',
              display:'flex',
              justifyContent:'center',
              '&:hover': {
                backgroundColor: '#EEC932',
                borderColor: '#EEC932',
              },
              border: '1px solid',
              borderColor: '#D22126',
              color: 'white',
            }}
          >
            GET STARTED 
          </Button>
        </Grid>
        <Grid item xs={4} sx={{mt:13, }}>
          <img src={trackingImg} alt="Logo" style={{ width:'100%' }} />
        </Grid>
        <Grid sx={2}>

        </Grid>
      </Grid>
   
    </>
  
  );
}

export default Tracking;
