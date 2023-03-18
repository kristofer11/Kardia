import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Employment from './pages/Employment';
import MessageSent from './pages/MessageSent';
import WhatIsClassical from './pages/WhatIsClassical';
import { Routes, Route } from 'react-router-dom';
import Programs from './pages/Programs';
import WhatIsPP from './pages/WhatIsPP';
import Enrollment from './pages/Enrollment';
import Tuition from './pages/Tuition';

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
          <Route path='/employment' element={<Employment />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/whatispp' element={<WhatIsPP />} />
          <Route path='/enrollment' element={<Enrollment />} />
          <Route path='/tuition' element={<Tuition />} />
          <Route path='/messagesent' element={<MessageSent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
