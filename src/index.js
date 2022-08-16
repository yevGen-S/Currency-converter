import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import {App} from './App';
import { ConverterPage } from './pages/ConverterPage';
import { CurrencyPage } from './pages/CurrencyPage';

// import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}> </Route> 
          <Route path='/converter' element={<ConverterPage />}> </Route>
          <Route path='/currency' element={<CurrencyPage />}> </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// reportWebVitals();
