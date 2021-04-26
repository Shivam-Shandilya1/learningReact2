import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var time = new Date().toLocaleTimeString({hour:'numeric',hour12:false});
var greet;
if(time>=1&&time<=11)
{
greet="Good Morning"
}if(time>=12&&time<=7)
{
  greet="Good Afternoon"
}else{
  greet = "Good Night"
}

ReactDOM.render(
  <React.StrictMode>
    <>
    <center>
    <div className="firstdiv">
      <p className="para1">Hello Sir,</p>&nbsp;&nbsp;
      <p className="para2">{greet}</p>
    </div>
    </center>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
