import React,{useState,createContext,useEffect} from "react";
import {Route,Switch,NavLink} from 'react-router-dom';
import Route1 from "./Route1";
import Route2 from "./Route2";
import "./index.css";
const Fname = createContext();
function ClientServer ()
{
    return(
        <>
       <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/"> Route1 </NavLink> 
       <NavLink exact activeClassName="active_class" to="/route2"> Route2 </NavLink>
       </div>
       <Fname.Provider value="Shivam"></Fname.Provider> 
        <Switch>
            <Route exact path='/' component={Route1} />
            <Route exact path='/route2' component={Route2} />
            
        </Switch>
        
        </>
    )
    
} 
export default ClientServer;
export {Fname};