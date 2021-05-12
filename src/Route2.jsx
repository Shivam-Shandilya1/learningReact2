import React,{useState,useContext,useEffect} from "react";
import "./index.css";
import {Route,Switch} from 'react-router-dom';
import Route1 from "./Route1"; 
function Router2 ()
{
    return(<>
  <Route1 fname="Shivam" />
    <h1>Hello </h1>
     <h1>This is Route 2</h1>;
    </>)
     
} 
export default Router2;