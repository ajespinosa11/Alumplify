import React from 'react';
import './App.scss';
import './admin.scss'
import Navbar from './components/Navbar.js';
import Newsandstories from './Pages/newsandstories.js';
import Yearbook from './Pages/yearbook.js'
import Story from './components/Story.js';
import Home from './Pages/home.js'
import Admindashboard from './Pages/Admindashboard.js';
import Adminpersoninfo from './Pages/AdminPersonInfo.js'
import Adminjob from './Pages/AdminJob.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<div> <Navbar/> < Home/> </div>} />
          <Route path="/Newsandstories" element={<div> <Navbar/> <Newsandstories/> </div>} />
          <Route path='/Newsandstories/:id' element={<div> <Navbar /><Story/> </div>} />
          <Route path="/Yearbook" element={<div> <Navbar /> <Yearbook/> </div>} />
          <Route path='/admindashboard' element={<Admindashboard/>} />
          <Route path='/Personal-Information' element={<Adminpersoninfo/>} />
          <Route path='/Alumni-job' element={<Adminjob/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

