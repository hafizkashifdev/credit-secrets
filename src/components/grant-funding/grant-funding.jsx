import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const GrantFunding = () => {
  return (
    <Grid container sx={{ backgroundColor:'#D22126'  }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{mt:15,pb:15}}>
       
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '4.5rem',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
          }}
        >
      Maximize your grant funding potential with ease!
        </Typography>
        <Button
          color="inherit"
          sx={{
            borderRadius: '100px',
            backgroundColor: '#FFBD59',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            padding: '1rem 0.75rem',
            margin: '24px 0px',
            width: '166px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              color: '#D22126',

            },
            border: '1px solid',
            borderColor: '#FFBD59',
            color: 'white',
            // Center the button
            mx: 'auto',
          }}
        >
          GET STARTED 
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default GrantFunding;
