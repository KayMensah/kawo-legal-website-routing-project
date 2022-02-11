import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: "grey"}}>
        <a className="navbar-brand" href="/#">
            <img src="images/rich.png" width="150" height="90" className="img-fluid" alt="logo" />
            KAWO LEGAL
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto style">
                <li className="nav-item">

                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/StartUp">Start Up</NavLink>
                </li>
                <li className="nav-item">
                   
                    <NavLink className="nav-link" to="/Register">Register</NavLink>
                </li>
                <li className="nav-item">
                
                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default  Navbar;

