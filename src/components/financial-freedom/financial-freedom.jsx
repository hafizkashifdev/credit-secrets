import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import iconOne from '../../assects/icons/Icon-one.svg';

import finacialData from './finacial-data';

const FinancialFreedom = () => {
  return (
    <Grid container sx={{ mt: 20, backgroundColor: '#F3F4F6', p: 2,pb:20 }}>
      <Grid item xs={2} />
      <Grid item xs={8} sx={{ mt: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ color: '#D22126', fontSize: '3rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', display: 'flex', justifyContent: 'center' }}>TOTAL FINANCIAL FREEDOM</Typography>
        <Typography sx={{ color: '#1F2937', fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', display: 'flex', justifyContent: 'center' }}>
          Comprehensive Solution For Individuals &
        </Typography>
        <Typography sx={{ color: '#1F2937', fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', display: 'flex', justifyContent: 'center' }}> Businesses Seeking Funding</Typography>
      </Grid>
      <Grid container sx={{ mt: 2, backgroundColor: '#F3F4F6', p: 2 }}>
      <Grid item xs={2} />
      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
          {finacialData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box sx={{ width: '100%', height: "308px", backgroundColor: "#ffffff", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <img src={item.icon} style={{ width: '100px', height: '100px', padding: '8px' }} alt={`icon-${index}`} />
                </Box>
                <Typography sx={{ color: '#1F2937', fontSize: '1.25rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>{item.title}</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '1rem', fontFamily: 'Poppins, sans-serif', textAlign: 'center', padding: '8px' }}>{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default FinancialFreedom;
