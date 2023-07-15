import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Beginning from './pages/Beginning';
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
import Auction from './pages/Auction';
import Fundraising from './pages/Fundraising';
import Donations from './pages/Donations';
import Sycamore from './pages/Sycamore.js';
import Uniforms from './pages/Uniforms';
import Calendar from './pages/Calendar';
import July2022 from './pages/blogs/July2022';
import June2022 from './pages/blogs/June2022';
import July2021 from './pages/blogs/July2021';
import June2021 from './pages/blogs/June2021';
import May2021 from './pages/blogs/May2021';
import June2022Siblings from './pages/blogs/June2022Siblings';
import July2023 from './pages/blogs/July2023'
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beginning' element={<Beginning />} />
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
          <Route path='/auction' element={<Auction />} />          
          <Route path='/fundraising' element={<Fundraising />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/sycamore' element={<Sycamore />} />
          <Route path='/uniforms' element={<Uniforms />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/july2022' element={<July2022 />} />
          <Route path='/june2022' element={<June2022 />} />
          <Route path='/july2021' element={<July2021 />} />
          <Route path='/june2021' element={<June2021 />} />
          <Route path='/may2021' element={<May2021 />} />
          <Route path='/june2022siblings' element={<June2022Siblings />} />
          <Route path='/july2023' element={<July2023 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
