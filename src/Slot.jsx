import React from 'react';
import ReactDom from 'react-dom';


var heading =
{
 
color:"darkgoldenrod",
 fontSize:"2.5rem",
 textAlign:"center",

}
var bodyslot=
{
  backgroundColor:"rgb(249 255 108)",
 
}
var slotcontent = 
{
  textAlign:"center",
  backgroundColor:"#ecec71",
  height:"350px",
  width:"55rem",
  margin:"3.5rem",
  boxShadow:"10px 10px 20px 20px #2a2a1f",
  borderRadius:"30px",
}
var smiley = 
{
  
  height:"270px",
  width:"15rem",
  margin:"1rem",
  marginTop:"1.8rem",
  boxShadow:"3px 3px 2px 2px black",
  borderRadius:"30px",
  backgroundColor:"white"
  

}
var slot={display:"inline-block",}
var btnluck = {
  color:"black",
  backgroundColor:"yellow",
  borderRadius:"20px",
  height:"80px",
  width:"300px",
  boxShadow:"10px 10px 20px 20px #2a2a1f",
}

 

const Draw= ()=>
{
  var randomnum=Math.ceil(Math.random()*3);
  console.log(randomnum);
  if(randomnum == 1)
  {
    return(
    <>
    <img src={process.env.PUBLIC_URL+'/Images/smiley1.jfif'} style={smiley}></img>
    
    </>
    )
  }else if(randomnum == 2)
  {
    return(
    <>
    <img src={process.env.PUBLIC_URL+'/Images/smiley2.jfif'} style={smiley}></img>
    
    </>
    )
  }else if(randomnum == 3)
  {
    return(
    <>
    <img src={process.env.PUBLIC_URL+'/Images/smiley3.jfif'} style={smiley}></img>
    
    </>
    )
  }
}

function clikc()
{
  window.location.reload();
}

function Match()
{return(<>
  {console.log(document.getElementsByClassName("#sloto"))}
  </>)
  
}

const Slot= () =>
{
    return(
            <>
     
        <center>
        <div style={bodyslot}>
        <div>
        <h1 style={heading}>🎰 Welcome to Slot Game 🎰</h1>
        
        </div>
        <div style={slotcontent}>
        <center>
        <div style={slot} id="sloto"><Draw/></div>
        <div style={slot} id="slott"><Draw/></div>
        <div style={slot} id="slotth"><Draw/></div>
        <Match/>
        
        </center>
        </div>
        <button id="luckbtn" style={btnluck} type="button" onClick={clikc}>Try your Luck</button>
        </div>
       
        </center>
       
        </>
    )
}

export default Slot;
