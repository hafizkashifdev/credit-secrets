
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import FinancialFreedom from './components/financial-freedom/financial-freedom';
import Tracking from './components/tracking/tracking';
import Testimonial from './components/testimonial/testimonial';

const App=()=> {
  return (
    <Grid >
      <Navbar/>
      <Home/>
      <FinancialFreedom/>
      <Tracking/>
      <Testimonial/>
    </Grid>
  );
}

export default App;
