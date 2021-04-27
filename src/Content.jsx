import React from 'react';

import {add,subs,mul,divide} from './Calculator';
function Content () 
{
    var para1 =
{
  textAlign: "center",
  fontSize: "3.9rem",
  color:"#f07b2d",
  display: "inline-block",
  fontWeight: "649",
  marginTop:"35px",
 

};

var para2 =
{
  textAlign:"center" ,
  fontSize:"3.9rem" ,
  color:"#50d305" ,
  display:"inline-block" ,
  fontWeight:"649" ,
  marginTop:"35px" ,
  

};


var firstdiv =
{
backgroundColor: "#ffec94",
marginTop:"250px",
textAlign: "center",
height: "174px",
width: "925px",
borderRadius: "45px",
};


var time = new Date().getHours({hour:'numeric',hour12:false});
var greet;

if(time>=1 && time<=11)
{
greet="Good Morning";

};if(time>=12 && time<=19)
{
  greet="Good Afternoon"
  para2.color="orange";

};if(time>=19){
  greet = "Good Night";
  para2.color="black"
};



    return(
        <>
        <center>
        <div style={firstdiv}>
          <p id="paraone"style={para1}>Hello Sir,</p>&nbsp;&nbsp;
          <p id="paratwo" style={para2}>{greet}</p>
        </div>
        <div>
            <p style={{color:"#ff008d",fontSize:"3.5rem",fontWeight:"600"}}>Calculator</p>
            <ul>
                <li>Sum Of Numbers is: {add(23,45)}</li>
                <li>Difference Of Numbers is: {subs(23,45)}</li>
                <li>Product of Num is: {mul(3,4)}</li>
                <li>Division of Num is: {divide(5,3)}</li>
            </ul>

        </div>
        </center>
        </>
    );
}

export default Content;