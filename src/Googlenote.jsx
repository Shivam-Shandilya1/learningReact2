import React,{ useState } from "react";
import Button from "@material-ui/core/Button"; 

import  DeleteOutlineIcon  from "@material-ui/icons/DeleteOutline";
function Googlenote (props)
{
    const deleteNote=() =>
    {
        props.deleteItem(props.id);
    }
    return (
        <>
        <div className ="note" style={{ borderRadius:"10px",
                boxShadow:"5px 5px black",
                backgroundColor:"white",
                marginTop:"50px",}}>
          <h1>{props.title}</h1>
          <br></br>
          <p>{props.content}</p>
          <Button onClick={deleteNote} style={{backgroundColor:"red",borderRadius:"100%",height:"50px",width:"50px",marginLeft:"90%"}}>
          <DeleteOutlineIcon className="deleteIcon" />
        </Button>
        </div>
        </>
    )
}
export default Googlenote;