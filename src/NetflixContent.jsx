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
const favSeries="netflix"
const FavS =() =>
{
if(favSeries === "netflix")
{
   console.log(document.getElementById("filterbtn")); 
return(
    <Card 
    imgsrc={ns[0].imglink}
    name={ns[0].name} />
    
)
}else {
    
}
}



function NetflixContent ()
{
    return (
        <center>
        <div style = {bodyCss}>
        <div className="header">
        <h1 style ={heading}>Netflix Anime</h1>
        </div>
        <form action="./index.js">
            <label for="animes" style={{fontSize:"30px"}}>Filter: </label>
           
            <select id="animes" name="animes" style={{height:"30px",width:"330px",fontSize:"20px",marginLeft:"10px"}}>
                <option value="Watched">Watched</option>
                <option value="Watching">Watching</option>
            </select>
            <input id="filterbtn"type="submit" value="Go" style={{height:"30px",width:"75px",fontSize:"20px",marginLeft:"10px"}}></input>
        </form>
        <FavS/>
        {newarr}
        </div>
        <h3 style={{color:"green"}}>Task4</h3>
        </center>
        
      )
}


export default NetflixContent;