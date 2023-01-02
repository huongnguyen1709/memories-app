import React from 'react';
import { Container } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  console.log(process.env);
  console.log(process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN);
  return (
    <GoogleOAuthProvider clientId={process.env.PUBLIC_GOOGLE_API_TOKEN}>
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/auth' element={<Auth />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
