import React from "react";
import './NavBar.css'
import {Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom";


function NavBar(){
    return<nav className="nav">
    <Link to="/home" className="home"></Link>
    <li>
    <CustomLink to="/add-new" className="add">Add new?!</CustomLink>
    </li>
    </nav>

}
export default NavBar;

function CustomLink({to,children, ...props}){
   // window.location.pathname 
    const resolvedPath=useResolvedPath(to);
    const isActive=useMatch({path: resolvedPath.pathname, end:true});
    return(
        <li className={isActive?"active":""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}