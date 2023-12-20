import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/HeaderNavbar'
import BOA from './Pages/BOA'
import Home from './Pages/Home';
import AnnEvent from './Pages/AnnEvent'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      < Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={< Home/>}/>
          <Route path='/AnnEvent' element={< AnnEvent/>}/>
          <Route path='/Boa' element={< BOA/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
