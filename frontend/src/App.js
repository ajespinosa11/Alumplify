import { BrowserRouter, Route, Routes } from 'react-router-dom';


//User Import
import Navbar from './Pages/UserNavbar'
import BOA from './Pages/User/BOA'
import Home from './Pages/Home';
import AnnEvent from './Pages/User/AnnEvent'
import SurveyTrace from './Pages/User/SurveyTrace'
import NewStory from './Pages/User/NewStory'
import RevealStory from './Components/RevealStory'
import YearBook from './Pages/User/YearBook'
import Login from './Pages/User/Login'
import SignUp from './Pages/User/SignUp'
import ReqForm from './Pages/User/ReqForm'
import About from './Pages/User/About';
//-------------------------------------------------------

//Admin Import
import AdminNav from './Pages/AdminNav'
import NsAnn from './Pages/Admin/NsAnn';
import Dashboard from './Pages/Admin/Dashboard';
import AdmimBOA from './Pages/Admin/BOA';
import ListAlumn from './Pages/Admin/ListAlumn';
import SurvAn from './Pages/Admin/SurvAn';

import Test from './Pages/Test';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route>
          {/* User */}
          <Route path='/' element={<div>< Navbar/> <Home /></div>} />
          <Route path='/Logins' element={<div>< Navbar/> <Login /></div>} />
          <Route path='Logins/SignUp' element={<div><SignUp /></div>}/>
          <Route path='/Home' element={<div> < Navbar/> < Home/></div>}/>
          <Route path='/About' element={<div> < Navbar/> < About/></div>}/>
          <Route path='/AnnEvent' element={<div>< Navbar/> < AnnEvent/></div>}/>
          <Route path='/Boa' element={<div>< Navbar/> < BOA/></div>}/>
          <Route path='/RequestForm' element={<div>< Navbar/> < ReqForm/></div>}/>
          <Route path = '/SurvTrace' element={<div>< Navbar/> < SurveyTrace/></div>}/>
          <Route path = '/NewsStories' element= {<div>< Navbar/> < NewStory/></div>}/>
          <Route path = '/RevealStory/:id' element= {<div>< Navbar/> <RevealStory/></div>}/>
          <Route path = '/YearBook' element= {<div>< Navbar/> <YearBook/></div> }/>
          {/* ADministrator */}
          <Route path = 'Admin/Dashboard' element={<div className='flexRow'><AdminNav/> <Dashboard /> </div>}/>
          <Route path = 'Admin/NsAnn' element={<div className='flexRow'><AdminNav/> <NsAnn /></div>}/>
          <Route path = 'Admin/BOA' element={<div className='flexRow'><AdminNav/> <AdmimBOA /></div>}/>
          <Route path = 'Admin/ListAlumn' element={<div className='flexRow'><AdminNav /> <ListAlumn /></div>}/>
          <Route path = 'Admin/SurvAn' element={<div className='flexRow'><AdminNav /> <SurvAn /></div>}/>
          <Route path = "/testRoom" element= {<Test/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
