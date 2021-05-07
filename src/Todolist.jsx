import rect,{useState} from 'react';
const todobody ={
    backgroundColor:"#373746" 
    
} 
const content ={
    backgroundColor:"white"   ,
    
    marginLeft:"29%",
    marginRight:"29%",
    borderRadius:"20px" ,
    boxShadow:"10px 10px 20px 20px black" ,
    marginTop:"40px",
    paddingTop:"10px",
    paddingBottom:"20px",
}
const heading ={
    backgroundColor:"#2d2d2d"   ,
   fontWeight:"700",
   fontSize:"2.8rem",
   color:"white",
   
   
    marginTop:"20px",
    
}

const Todolist = () =>
{
   
   
    const [task,Settask]=useState("");
    const [list,Setlist] =useState([]);
    const addtask = (event)=>
    {
        Settask(event.target.value);
    }
    const taskaddtn =()=>
    {
        Setlist((prev)=>
        {
            return [...prev,task];
        
        });
        Settask("");
    }
     const taskmintn = (id)=>
     {   
        
        
         Setlist((prev)=>
         {
             return prev.filter((list,index)=>
             {
                 return index !==id;
             })
         })
         
        
     }
    
    return(
        <>
<div style={todobody}>
<center style={{paddingTop:"9px",paddingBottom:"60px", backgroundColor:"#373746" ,}}>
    <div style={content}>
<h1 style={heading}>ToDo List</h1>
<div>

<input type="text" name="task" placeholder="Add task" onChange={addtask} value={task} style={
            {
                height:"2.5rem",
                width:"20rem",
                borderWidth:"0px 0px 2px 0px",
                fontSize:"2rem",
                fontWeight:"500",
                color:"grey",}}>
        </input>
        <button className="todoplusbtn" onClick={taskaddtn} type="submit">+</button>

        
    </div>
    <div style={{marginTop:"30px"}}>
    <ul>
      {
          list.map((cur,index)=>
          {
              return (<><div style={{backgroundColor:"#c9c9c9",marginRight:"30px",borderRadius:"20px",marginBottom:"30px",display:"inline-block",height:"4rem",width:"320px"}}>
                  <p className="todoli" style={{fontSize:"2rem",display:"inline-block",marginTop: "11px",marginBottom:"0px",marginLeft:"30px",marginRight:"30px"}}> {cur} </p>
                  </div>
                  <button className="todominusbtn" onClick={taskmintn} type="submit" value={index}>x</button>
                  <br></br>
                 </> )
                
          })
      } 
      </ul>
        
    </div>
    </div>
    
    </center>
</div>
</>  
)
}
export default Todolist;