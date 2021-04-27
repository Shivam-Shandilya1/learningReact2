import React from 'react';
import reactDom from 'react-dom';
import Card from './Card';
import './index.css';


var bodyCss = {
    backgroundColor:"#d7d7d7",
}
var heading =
{
 color:"red",

 fontSize:"2.5rem",
 textAlign:"center",
}

function NetflixContent ()
{
    return (
        <center>
        <div style = {bodyCss}>
        <h1 style ={heading}>Netflix Anime that have been watched</h1>
        <Card
   imgsrc={process.env.PUBLIC_URL + '/Images/OnePunchMan.jfif'} 
       name="One Punch Man"
   />
      
        <Card
   imgsrc={process.env.PUBLIC_URL + '/Images/Death-Note.jpg'} 
 name="Death Note" />
   <Card
   imgsrc={process.env.PUBLIC_URL + '/Images/MyHeroAcademia.png'} 
      name="My Hero Academia" /> 
        </div>
        </center>
    )
}

export default NetflixContent;