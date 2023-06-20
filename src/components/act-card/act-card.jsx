import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const ActCard = () => {
  return (
    <Grid container sx={{ backgroundColor: '#FFBD59',  }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{mt:15,pb:15}}>
        <Typography
          sx={{
            color: '#D22126',
            fontSize: '3.5rem',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
          }}
        >
          Act now!
        </Typography>
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '3.5rem',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
          }}
        >
          Secure the funding your organization needs to achieve its goals. Sign up for our grant alerts now and get instant access to up-to-date grant information
        </Typography>
        <Button
          color="inherit"
          sx={{
            borderRadius: '100px',
            backgroundColor: '#D22126',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            padding: '0.5rem 1rem',
            margin: '24px 0px',
            width: '368px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              color: '#D22126',

            },
            border: '1px solid',
            borderColor: '#D22126',
            color: 'white',
            // Center the button
            mx: 'auto',
            "@media (max-width: 600px)": {
              width:'100%'
            },
          }}
        >
          GET STARTED FOR ONLY $9.97 A MONTH
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default ActCard;
