import React,{useState} from 'react';
import ToDolistcomp from './ToDolistcomp';
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
     const taskmintn = (index)=>
     {   
        
        
         Setlist((prev)=>
         {
             return prev.filter((arrElem,id)=>
             {
                 return id !==index;
             })
         })
         
        
     }
    
    return(
        <>
<div style={todobody}>
<center style={{paddingTop:"9px",paddingBottom:"60px", backgroundColor:"#373746" ,}}>
    <div style={content}>
    <h2 style={{color:"green"}}>Task 7</h2>
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
              return (<ToDolistcomp 
                  cur= {cur}
                  taskmintn={taskmintn}
                  index={index}
              />)
                
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