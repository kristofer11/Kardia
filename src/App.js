import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import WhatIsClassical from './pages/WhatIsClassical';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Mission />} />
    {/* 'what is classical' is not being used, that content currently on home page. */}
          <Route path='/classical-education' element={<WhatIsClassical />} />
          <Route path='/faculty-staff' element={<Faculty />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
