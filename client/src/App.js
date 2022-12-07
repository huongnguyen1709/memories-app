import React from 'react';
import { Container } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
