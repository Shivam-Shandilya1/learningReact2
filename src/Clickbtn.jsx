import React,{useState} from "react";

const btn =
{
    height:"50px",
    backgroundColor:"#4ec0d7",
    display:"inline-block",
    margin:"10px 20px",
    width:"40%",
    color:"white",
    borderRadius:"20px",
    boxShadow:"2px 2px 0.4px 0.4px black"
}
function Clickbtn ()
{
    const [num,Setnum] = useState(0);
    const increment = () => 
    {
         Setnum(num+1);
    }
    const decrement = () => 
    {
         Setnum(num-1);
         if(num<=0)
         {
             Setnum(0);
         }
    }
    return (
        <>
        <div style={{backgroundColor:"olive",height:"450px",paddingTop:"100px",paddingBottom:"100px"}}>
        <div style={{marginRight:"30%",marginLeft:"30%",height:"300px",backgroundColor:"white",boxShadow:"10px 10px 10px 10px black",borderRadius:"20px",paddingTop:"120px"}}>
         <div style={{backgroundColor:"navy",fontWeight:"700",fontSize:"2.5rem",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",color:"white"}}>
             {num}
         </div>
         <div>
         <center style={{marginTop:"40px",}}>
         <button style={btn} onClick={increment}>Increm</button>
         <button style={btn} onClick={decrement}>Decrem</button>
         </center>
         </div>
    
        
        </div>
        </div>
      </>
    )
}
export default Clickbtn;