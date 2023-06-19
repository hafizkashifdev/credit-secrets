import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Circle } from '@mui/icons-material';
import logoImage from '../../assects/images/logo.png';

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = React.useState('transparent');

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setNavbarBackground('#FFFFFF'); // Change background color when scrolling
      } else {
        setNavbarBackground('rgba(0, 0, 0, 0)'); // Set background color to transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid container sx={{ marginBottom: '4rem' }}>
      <AppBar position="fixed" 
      // style={{ background: 'transparent',}}
      sx={{ backgroundColor: navbarBackground, borderBottom: 'none', p: 1.5, boxShadow: 'none', }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ marginLeft: '17.6rem' }}>
            <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', fontWeight: '700', fontFamily: 'Poppins, sans-serif', color: '#000000' }}>
              <img src={logoImage} alt="Logo" style={{ marginRight: '8px', width: '60px', height: '60px' }} />
              Credit Repair Ai&nbsp;
              <span style={{ fontSize: '6px', color: '#D22126' }}>
                <Circle sx={{ fontSize: 'inherit', mt: 1.2 }} />
              </span>
            </Typography>
          </Box>
          <Box sx={{ marginRight: '18rem' }}>
            <Button
              color="inherit"
              sx={{
                borderRadius: '100px',
                backgroundColor: 'transparent',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                padding: '0.6rem 2rem',
                color: '#D22126',
                border: '1px solid',
                marginRight: '18px',
                p: '9px 32px',
                borderColor: '#D22126',
                width: '108px',
                height: '44px',
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#D22126',
                  borderColor: '#D22126',
                  color: 'white',
                },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              sx={{
                borderRadius: '100px',
                p: '5px',
                backgroundColor: '#D22126',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                padding: '0.6rem 2rem',
                textTransform: 'capitalize',
                width: '175px',
                height: '44px',
                '&:hover': {
                  backgroundColor: '#EEC932',
                  borderColor: '#EEC932',
                },
                border: '1px solid',
                borderColor: '#D22126',
                color: 'white',
              }}
            >
              Register Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
