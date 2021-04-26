import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var today =new Date().toLocaleString('hi-IN',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

ReactDOM.render(
  <React.StrictMode>
    <>
    <h1>Shivam Shandilya</h1>
    <p>Today Date: {today}</p>
    <p>Time: {new Date().toLocaleString('hi-IN', { hour: 'numeric',minute:'numeric',second:'numeric' , hour12: true })}</p>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
