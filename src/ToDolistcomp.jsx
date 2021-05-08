import React,{useState} from 'react';
function ToDOlistcomp (props)
{
    return(
        <>
        <><div style={{backgroundColor:"#c9c9c9",marginRight:"30px",borderRadius:"20px",marginBottom:"30px",display:"inline-block",height:"4rem",width:"320px"}}>
                  <p className="todoli" style={{fontSize:"2rem",display:"inline-block",marginTop: "11px",marginBottom:"0px",marginLeft:"30px",marginRight:"30px"}}> {props.cur} </p>
                  </div>
                  <button className="todominusbtn" onClick={()=>
                  {
                      props.taskmintn(props.index)
                  }} type="submit" value={props.index}>x</button>
                  <br></br>
                 </>
        </>
    )
}
export default ToDOlistcomp;