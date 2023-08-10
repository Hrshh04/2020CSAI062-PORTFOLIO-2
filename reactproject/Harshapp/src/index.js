import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import { FirstComponent, Demo } from './component/FirstComponent';
import LocalStorage from './component/LocalStorage';
import Newroute from './component/Newroute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Newroute/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
