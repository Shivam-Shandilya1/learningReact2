import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const heading =
{
    fontSize:"4rem",
    color:"green",

}

   
function Time ()
{
    let time = new Date().toLocaleTimeString();
   
 
    const [Current,NewTime]=useState(time);

    const UpdateTime= () =>
    {
        time = new Date().toLocaleTimeString();
        NewTime(time);
    }
    setInterval(UpdateTime,1000);
  
 return(
     <>
    
     <center>
       <h3 style={{color:"green"}}>Task 0</h3>
     <h1 style={heading}>{Current}</h1>
    
     </center>
  
     </>
 )
}
export default Time;