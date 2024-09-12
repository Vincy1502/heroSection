import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Blog'>Blog</Link></li>
                <li><Link to='/Contact'>Contact us</Link></li>
                <li><Link to='/Feature'>Features</Link></li>
                <li><Link to='/project'>Projects</Link></li>
                <li><Link to='/Product'>Products</Link></li>
                <li><Link to='/Service'>Services</Link></li>
                <li><Link to='/Support'>Support</Link></li>
                <li><Link to='/Help'>Help</Link></li>
            </ul>
            </nav>
    )
}
export default Nav