import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <>
    <h1>Netflix Anime that I watched</h1>
    <ol>
      <li>One Punch Man</li>
      <li>Death Note</li>
      <li>My Hero Academia</li>
      <li>Naruto</li>
      <li>Demon Slayer</li>
    </ol>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
