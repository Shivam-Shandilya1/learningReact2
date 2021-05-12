import React,{useState,useContext,useEffect} from "react";
import Route2 from "./Route2";
import "./index.css";
import {Route,Switch} from 'react-router-dom';
function Route1 (props)
{
    return (<><h1>My name is {props.fname}</h1></>);
} 
export default Route1;