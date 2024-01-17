import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Newsandstories from './Pages/newsandstories.js';
import Yearbook from './Pages/yearbook.js'
import Story from './components/Story.js';
import Home from './Pages/home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/Home" element={< Home />} />
          <Route path="/Newsandstories" element={< Newsandstories />} />
          <Route path='/Newsandstories/:id' element={< Story/>} />
          <Route path="/Yearbook" element={< Yearbook/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
