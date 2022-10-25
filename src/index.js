import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import './fonts/Helvetica-Neue-Font/Helvetica Neue Medium Extended/Helvetica Neue Medium Extended.ttf';
import './fonts/nitti/Nitti-Bold.woff';
import './fonts/nitti/Nitti-Normal.woff';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
  <BrowserRouter>
    <App />
  </BrowserRouter>

  /*</React.StrictMode>*/
);


