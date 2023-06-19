
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import FinancialFreedom from './components/financial-freedom/financial-freedom';
import Tracking from './components/tracking/tracking';
import Testimonial from './components/testimonial/testimonial';
import SampleCards from './components/sample-cards/sample-cards';
import ActCard from './components/act-card/act-card';
import Faq from './components/faq/faq';
import GrantFunding from './components/grant-funding/grant-funding';
import Footer from './components/footer/footer';

const App=()=> {
  return (
    <Grid >
      <Navbar/>
      <Home/>
      <FinancialFreedom/>
      <Tracking/>
      <Testimonial/>
      <SampleCards/>
      <ActCard/>
      <Faq/>
      <GrantFunding/>
      <Footer/>
    </Grid>
  );
}

export default App;
