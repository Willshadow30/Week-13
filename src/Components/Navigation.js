import React from "react";

const Navigation = () =>{
    return(
        <nav className="navbar"> {/* code for nav bar using class*/}
            <ul className="nav-list">
                <li className="nav-item"><a href="Apple">Home</a></li> {/* list for all the fake url links for nav bar */} 
                <li className="nav-item"><a href="Orange">About</a></li>
                <li className="nav-item"><a href="Grape">Services</a></li>
                <li className="nav-item"><a href="Lemon">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;