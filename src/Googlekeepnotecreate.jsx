import React,{ useState } from "react";
import './index.css';

import Button from "@material-ui/core/Button"; 
import AddIcon from "@material-ui/icons/Add"; 

function Googlekeepnotecreate (props)
{
    const [hideTitle,sethideTitle]=useState(false);
    const [note,setNote]=useState(
        {
            title:"",
            content:"",
        }
    );
     const InputEvent =(event)=>
     {
         const {value,name}=event.target;
         setNote ((prevData) =>
         {
             return{
                 ...prevData,
                 [name]:value,
             }
         })
     }
     const addEvent=()=>
     {
         props.passNote(note);
         setNote(
             {
                 title:"",
                 content:"",
             }
         );
     };
     const titledisplay = ()=>
     {
         sethideTitle(true)
     }
    return (
        <>
        <div className =" main_note">
            <form  style={
            {
                borderRadius:"10px",
                boxShadow:"5px 5px black",
                backgroundColor:"white",
                marginTop:"50px",
                marginLeft:"20%",
                marginRight:"20%",
               
            }
        }>
       
                 {(hideTitle)?(<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete
                ="off" style={{display:"block",width:"100%",padding:"10px 10px",borderWidth:"0px",borderRadius:"10px",fontSize:"1.5rem",fontWeight:"600"}} />):null}
                <textarea name="content" value={note.content} onClick={titledisplay} onChange={InputEvent} rows="" column="" placeholder="Write a note ..." style={{width:"100%",padding:"10px 10px",borderWidth:"0px",borderRadius:"10px",height:"8rem",fontWeight:"400"}}></textarea>
                {(hideTitle)?(<Button onClick={addEvent}style={{backgroundColor:"#3ac03a",borderRadius:"100%",height:"50px",width:"50px",marginLeft:"90%"}}>
               <AddIcon style={{color:"black",fontSize:"2rem"}}/>
           </Button>):null}
            </form>
        </div>
        </>
    )
}
export default Googlekeepnotecreate;