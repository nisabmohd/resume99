import React from 'react'
import '../css/Navbar.css'
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><h2>Resumebuilder</h2></Link>
            </div>
            <div className="tagsnav">
              
            </div>
            <div className="startbtn">
                <Link to="/edit" style={{textDecoration:'none'}}><Button variant="contained">Start</Button></Link>
                
            </div>
        </div>
    )
}
