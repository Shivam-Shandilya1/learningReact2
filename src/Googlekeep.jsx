import React,{useState} from "react";
import Googlekeepheader from "./Googlekeepheader";
import Googlekeepnotecreate from "./Googlekeepnotecreate";
import Googlenote from "./Googlenote";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Googlekeep() {
    const [AddItem,setAddItem] = useState([]);
    const addNote=(note)=>
    {
        setAddItem((prevData)=>
        {
           return [...prevData,note];
           
        })

    }
    const onDelete=(id)=>
    {
setAddItem((prev)=>
{return prev.filter((curr,index)=>
    {

        return index !==id;
    })
})
    }
    return(
        <>
        <h3 style={{color:"green",textAlign:"center"}}>Task 9</h3>
        <div style={{backgroundColor:"#c2c2c2",paddingBottom:"90px"}}>
        <Googlekeepheader />
        <Googlekeepnotecreate passNote={addNote}/>
        
        {
            AddItem.map((val,index)=>
            {
                return <Googlenote
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem= {onDelete}/>  
                })
        }
        </div>
           </>
    )
    
}
export default Googlekeep;