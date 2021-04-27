import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


var para1 =
{
  textAlign: "center",
  fontSize: "3.9rem",
  color:"#f07b2d",
  display: "inline-block",
  fontWeight: "649",
  marginTop:"35px",
 

}

var para2 =
{
  textAlign:"center" ,
  fontSize:"3.9rem" ,
  color:"#50d305" ,
  display:"inline-block" ,
  fontWeight:"649" ,
  marginTop:"35px" ,
  

}


var firstdiv =
{
backgroundColor: "#ffec94",
marginTop:"250px",
textAlign: "center",
height: "174px",
width: "925px",
borderRadius: "45px",
}


var time = new Date().getHours({hour:'numeric',hour12:false});
var greet;

if(time>=1 && time<=11)
{
greet="Good Morning";

}if(time>=12 && time<=19)
{
  greet="Good Afternoon"
  para2.color="orange";

}if(time>=19){
  greet = "Good Night";
  para2.color="black"
}

ReactDOM.render(
  <React.StrictMode>
    <>
    <center>
    <div style={firstdiv}>
      <p id="paraone"style={para1}>Hello Sir,</p>&nbsp;&nbsp;
      <p id="paratwo" style={para2}>{greet}</p>
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
