import 'reflect-metadata'; // Importa reflect-metadata al principio
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//import LoginView from './app/features/login_view/login_view';

//import Login from './app/features/login_view/components/login_componen';
import App from './App';
//import LoginView from './app/features/login_view/login_view';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
      {/* <Router>
        <Login />
      </Router> */}
  </React.StrictMode>,
);