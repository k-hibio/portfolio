import './App.css';
import React from 'react';
import LoginPage from './components/pages/LoginPage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/Register' element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
