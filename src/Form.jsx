import React,{useState} from 'react';
const stylo={
    backgroundColor:"purple",
    marginTop :"150px"
}
const heading={fontSize:"4.5rem",color:"#d09cff",}
function Form ()
{
    return(
        <>
        <center>
        <div style={stylo}>
        
            <h1 style={heading}>Hi</h1>
            <form>
               <input type="text" placeholder="Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey "}}></input>
                <button type="submit" style={{height:"3.2rem",width:"10rem",marginLeft:"55px"}}>Submit</button>
            </form>
        
        </div></center>
        </>
    )

}
export default Form;