import React from 'react';

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
        </center>
        </>
    );
}

export default Content;