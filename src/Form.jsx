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
        email:"",
        contact:"",
    }); 
    const addname= (event)=>
    {
        const {name,value}=event.target;
       SetName((prev)=>
       {
           return{
               ...prev,
               [name]:value,

           }
    //        if(event.target.name ==="fname")
    //        {
    //            return{
    //                fname: event.target.value ,
    //                lname: prev.lname,
    //                email:prev.email,
    //                contact:prev.contact,
    //             }
    //        }else if(event.target.name === "lname"){
    //         return{
    //             lname: event.target.value ,
    //             fname: prev.fname,
    //             email:prev.email,
    //             contact:prev.contact,}
    //        }
    //    else if(event.target.name === "email"){
    //     return{
    //         email: event.target.value ,
    //         fname: prev.fname,
    //         lname:prev.lname,
    //         contact:prev.contact,
    //     }
    //    }else{
    //     return{
    //         email: prev.email ,
    //         fname: prev.fname,
    //         lname:prev.lname,
    //         contact:event.target.value,
    //     }
       
    }

    )};
    
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
            <h2>{namevalue.email}</h2>
            <h2>{namevalue.contact}</h2>
            <form onSubmit={clicked}>
               <input name="fname" type="text" placeholder="First Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.fname} ></input>
               <input name="lname" type="text" placeholder="Last Name" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.lname}></input>
               <input name="email" type="email" placeholder="Email" style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.email}></input>
               <input name="contact" type="text" placeholder="contact no." style={{height:"3rem",width:"40rem",fontSize:"2rem",color:"grey",display:"block",margin:"20px"}} onChange={addname} value={namevalue.contact}></input>
                <button type="submit" style={{height:"3.2rem",width:"10rem",marginLeft:"55px"}} >Submit</button>
                </form>
        
        </div></center>
        </>
    )

}
export default Form;