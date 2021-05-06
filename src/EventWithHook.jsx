import React,{useState} from 'react';
const btnc={
    height:"108px",
    width:"350px",
    boxShadow:"10px 10px 20px 20px #2a2a1f",
    marginTop:"105px",
    marginBottom:"74px",
}

function Clicking ()
{
   let namec="Change background";
   let bgc= "purple";
    const [bg,Setbg] = useState(bgc);
    const [name,Setname] = useState(namec);
    const bgchange= () =>
    {
        Setbg("blue");
        Setname("background changed 🎉 ")
    }
    const bgNormal = ()=>
    {
        Setbg("purple");
        Setname("Change Background");
    }
    return(
        <>
         <center style={{height:"273px"}}>
        <div style={{backgroundColor:bg}}>
        <h3 style={{color:"green",margin:"0px"}}>Task 5</h3>
        <button onClick={bgchange} onDoubleClick={bgNormal} style={btnc}>{name}</button>
        </div>
        </center> 
        </>
    )
   
}
export default Clicking;