import React from 'react';
// import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>Andrew Kim</h1>
            <div className="nav">
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/my-react-portfolio/">About Me</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/portfolio">Portfolio</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/contact">Contact</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/resume">Resume</NavLink>
            </div>
        </div>
    )
}

export default Header