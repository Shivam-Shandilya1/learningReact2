import React,{useState} from 'react';
const stylo={
    backgroundColor:"#a852a8",
    marginTop :"150px"
}
const heading={fontSize:"4.5rem",color:"white",fontWeight:"700",paddingTop:"100px",textShadow:"6px 6px black"}
function Form ()
{
    const [namevalue,SetName]=useState(
    {
        fname: "",
        lname: "",
    }); 
    const addname= (event)=>
    {
       SetName((prev)=>
       {
           if(event.target.name ==="fname")
           {
               return{
                   fname: event.target.value ,
                   lname: prev.lname,}
           }else{
            return{
                lname: event.target.value ,
                fname: prev.fname,}
           }
       })
    };
    
    const clicked= (event) =>
    {
        event.preventDefault();
        console.log(event);
    }
    return(
        <>
        <center>
        <div style={stylo}>
        
            <h1 style={heading} className="head1">Hello {namevalue.fname} {namevalue.lname}</h1>
            <form onSubmit={clicked}>
               <input name="fname" type="text" placeholder="First Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.fname} ></input>
               <input name="lname" type="text" placeholder="Last Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.lname}></input>
                <button type="submit" style={{height:"3.2rem",width:"10rem",marginLeft:"55px"}} >Submit</button>
                </form>
        
        </div></center>
        </>
    )

}
export default Form;