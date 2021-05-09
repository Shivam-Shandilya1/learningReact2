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
import Todolist from "./Todolist";
import Clickbtn from "./Clickbtn.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Googlekeep from "./Googlekeep.jsx";
import PokeCard from './PokeCard.jsx';
ReactDOM.render(
  <React.StrictMode>
  <>
  {/* <Time/>
  <Content />
   <NetflixContent /> 
 <Slot /> 
 <Clicking />
 
 <Form />
 
 <Todolist /> 
 <Clickbtn/>
 <Googlekeep />
 <PokeCard /> */}
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
