import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Content from './Content.jsx';
import NetflixContent from './NetflixContent.jsx';
import Slot from './Slot.jsx';
import Time from "./Time.jsx";
import Clicking from "./EventWithHook.jsx";
import Form from "./Form.jsx";
import Card from './Card.jsx';
import Todolist from "./Todolist"


console.log(__dirname);
ReactDOM.render(
  <React.StrictMode>
  <>
  {/* <Time/>
  <Content />
   <NetflixContent /> 
 <Slot /> 
 <Clicking /> */}
 {/* <Form /> */}
 <Todolist />
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
