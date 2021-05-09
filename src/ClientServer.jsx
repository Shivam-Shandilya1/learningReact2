import React,{useState,useContext,useEffect} from "react";
import {Route,Switch,NavLink} from 'react-router-dom';
import Route1 from "./Route1";
import Route2 from "./Route2";
function ClientServer ()
{
    return(
        <>
       <NavLink exact to="/" className="active_class"> Route1 </NavLink> 
       <NavLink exact to="/route2" className="active_class"> Route2 </NavLink>
        </>
    )
    
} 
export default ClientServer;