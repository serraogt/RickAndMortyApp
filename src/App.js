import "./App.css";
import React, { useState } from "react";
import {Route, Routes, Link} from "react-router-dom";

import AddNew from "./pages/AddNew";
import Home from "./pages/Home";

const App = () => {
 // switch(window.location.pathname)

  return (
    <div>
    <nav>
      <ul>
        <li><Link to ="/"></Link></li>
        <li><Link to ="/add-new"></Link></li>
  
      </ul>
    </nav>
    <div className="container">
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/add-new"  element={<AddNew/>}/>
     </Routes>  
    </div> 
    </div>
  );
};

export default App;