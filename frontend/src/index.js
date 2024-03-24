import React from 'react';
import ReactDOM from 'react-dom/client';
import './userStyle.scss';
import App from './App';
import {AlumnContextProvider} from './Context/AlumniContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlumnContextProvider>
     <App />
    </AlumnContextProvider>
  </React.StrictMode>
);

