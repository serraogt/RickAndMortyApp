import "./Home.css";
import React, { useState } from "react";
import Planet from '../components/Planet.jsx';
import PlanetPicture from "../components/PlanetPicture.jsx";
import Sun from "../components/Sun.jsx";
import arrow from "../assets/white-down-arrow-png-2.png";
import planetsData from "../data/PlanetsData";
import { Link } from "react-router-dom"; 
import { circularProgressClasses } from "@mui/material";
import { CircleRounded } from "@mui/icons-material";
import emptyData from "../data/EmptyData.jsx";


 function AddNew(){

   const [current, setCurrent] = useState(0);
   const nextPageHandler = () => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % planetsData.length);
    };


    return(  
    <div className="Home">
    <div className="welcome">Add New Planet</div>
    <div className="backGrName">New </div>
    <div>
     <div>  <Link to="/" className="addNewLink">
        Home
      </Link> </div>
      <PlanetPicture planetPicture={emptyData[0].planetPicture}/>
    </div>
    <div>
    <Planet planetData={emptyData[0]}/>
    {/*<Sun>Click me</Sun>*/}
    </div>
   
  </div>)
 }
export default AddNew;
