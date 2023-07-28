import "./App.css";
import React, { useState } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";

const App = () => {
 // switch(window.location.pathname)

 const navigate = useNavigate(); 
  navigate('/home');

  return (
    <div>
    <NavBar/>
    <div className="container">
      <Routes>
        <Route path="/"  element={Home}/>
        <Route path="/add-new"  element={AddNew}/>
     </Routes>  
    </div> 
    </div>
  );
};

export default App;