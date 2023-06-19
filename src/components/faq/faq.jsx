import { Grid, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import faqData from './faq-data';

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <Grid container sx={{ mt: 15 ,pb:15}}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#1F2937',
              fontSize: '3.5rem',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              margin: '0 0 8px',
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            FAQ
          </Typography>
        </Grid>

        <Grid container>
          {faqData.map((item, index) => (
            <Grid
              container
              alignItems="center"
              sx={{ marginBottom: 2 }}
              key={index}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  sx={{
                    color: openQuestionIndex === index ? '#D22126' : '#1F2937',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    margin: '0 0 8px',
                  }}
                >
                  {item.question}
                </Typography>
              </Grid>
              <Grid item sx={{ marginLeft: 'auto', cursor: 'pointer' }}>
                {openQuestionIndex === index ? (
                  <RemoveIcon
                    onClick={() => handleQuestionClick(index)}
                    sx={{ color: '#D22126' }}
                  />
                ) : (
                  <AddIcon
                    onClick={() => handleQuestionClick(index)}
                    sx={{ color: '#D22126' }}
                  />
                )}
              </Grid>
              {openQuestionIndex === index && (
                <Grid item xs={12} sx={{  color: '#1F2937', fontSize: '1rem', fontFamily: 'Poppins, sans-serif',padding:'0px 128px 0px 0px '}}>
                  <Typography variant="body1">{item.answer}</Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Faq;
