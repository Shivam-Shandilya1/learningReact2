import React,{useState} from 'react';
const stylo={
    backgroundColor:"purple",
    marginTop :"150px"
}
const heading={fontSize:"4.5rem",color:"white",fontWeight:"700",paddingTop:"100px",}
function Form ()
{
    const [name,Setname] = useState(" ");
    const [finalName,Setfname] =useState();
    const naemvlue = (event)=>
    {
      Setname(event.target.value);
    }

    const clicked =()=>
    {
       Setfname(name);
    }
   
    return(
        <>
        <center>
        <div style={stylo}>
        
            <h1 style={heading} className="head1">Hello {finalName}</h1>
            
               <input type="text" placeholder="Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey "}} onChange={naemvlue} value={name}></input>
                <button  style={{height:"3.2rem",width:"10rem",marginLeft:"55px"}} onClick={clicked}>Submit</button>
          
        
        </div></center>
        </>
    )

}
export default Form;