import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/theme.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider, { ContextGlobal } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </BrowserRouter>
);


