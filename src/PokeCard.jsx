import React,{useEffect, useState} from 'react';
import axios from 'axios';
function PokeCard ()
{
    const [num,Setnum] =useState();
    useEffect(async function getData()
    {
const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
Setname(res.data.name)  ;
Setmove(res.data.moves.length) 
})
    const [name,Setname]=useState();
    const [move,Setmove]=useState();
   
    return(
        <>
        <h1>You have choosed card no. {num}</h1>
        <h1>I am {name} </h1>
        <h1>I have {move} moves</h1>
        <select  onChange={(event)=>
        {
            Setnum(event.target.value)
        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        </>)
}
export default PokeCard;