import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: '#212529' }}>
        <Typography
          sx={{
            color: '#FFFFFF', // Set text color to white
            fontSize: '1rem',
            padding: '1rem',
            fontFamily: 'Poppins, sans-serif',
            margin: '0 0 8px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          © 2023 Credit Repair AI. All rights reserved. | Privacy policy | Terms & Conditions
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
