import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/HeaderNavbar'
import BOA from './Pages/User/BOA'
import Home from './Pages/Home';
import AnnEvent from './Pages/User/AnnEvent'
import SurveyTrace from './Pages/User/SurveyTrace'

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
          <Route path = '/SurvTrace' element={< SurveyTrace/>}/> 
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
