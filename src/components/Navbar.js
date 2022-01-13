import React from 'react'
import '../css/Navbar.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/"><h2>Resumebuilder</h2></a>
            </div>
            <div className="tagsnav">
                <a href="/">Home</a>
                <a href="/">Templates</a>
                <a href="/">How it Works ?</a>
                <a href="/">About</a>
            </div>
            <div className="startbtn">
                <a href="/"><button>Start</button></a>
            </div>
        </div>
    )
}
