import React from 'react';
import reactDom from 'react-dom';
import Card from './Card';
import './index.css';


var bodyCss = {
    backgroundColor:"#d7d7d7",
}
var heading =
{
 color:"#afafaf",

 fontSize:"2.5rem",
 textAlign:"center",
}

var ns = 
[
   {
       imglink:process.env.PUBLIC_URL + '/Images/OnePunchMan.jfif',
       name:"One Punch Man"
   } ,
   {
       imglink:process.env.PUBLIC_URL + '/Images/Death-Note.jpg',
       name:"Death Note"
   },
   {
    imglink:process.env.PUBLIC_URL + '/Images/MyHeroAcademia.png',
    name:"My Hero Academia"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/Naruto.jpg',
       name:"Naruto"
   },
   {
       imglink:process.env.PUBLIC_URL + '/Images/DemonSlayer.jpg',
       name:"Demon Slayer"
   }

]
const newarr = ns.map((cvalue)=>
{return(
    <Card
 imgsrc={`${cvalue.imglink}`}
 name={`${cvalue.name}`} />

)
    
})

function NetflixContent ()
{
    return (
        <center>
        <div style = {bodyCss}>
        <div className="header">
        <h1 style ={heading}>Netflix Anime</h1>
        </div>
        {newarr}
        </div>
        </center>
      )
}

export default NetflixContent;