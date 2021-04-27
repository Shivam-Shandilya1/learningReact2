import React from 'react';
import './index.css';
function Card (props)
{
    var Cardcss=
    {
        display:"inline-block",
        textAlign:"center",
        backgroundColor:"white",
        margin:"2rem ",
        boxShadow:"10px 10px #888888",
    }
    var imgCss =
    {
        
        display:"inline-block",
        width:"375px",
        height:"475px",
        margin:"30px",
    }
    var Name =
    {
        fontFamily:"'Orelega One', cursive;",
        fontSize:"2.5rem",
        marginTop:"0px",
    }
    return(
        <>
       
        <div className="CardHover" style={Cardcss}>
        
          <img src={props.imgsrc} style={imgCss}/> 
          <div>
              <h2 style={Name}>{props.name}</h2>
          </div> 
          <button>Watch Now</button>
        </div>
        
        </>
       
    )
}
export default Card;