import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/sign-up/sign-up';
import SignInComponent from './pages/sign-in-component';
import HomeComponent from './pages/home-component';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignInComponent />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
