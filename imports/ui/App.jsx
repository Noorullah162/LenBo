import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import Header from './components/Header/Header.js';
import { BrowserRouter } from 'react-router-dom';


export const App = () => (
  <div>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    
  </div>
);
