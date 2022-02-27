import React from 'react'
import previmg from '../images/res.jpg'
import '../css/Prevone.css'
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

export default function Previewone() {
    return (
        <div className='Previewone'>
            <div className="headerprevone">
                <h2>Lets <span className='targethd'>create a resume</span> for your dream job</h2>
                <p>A resume is an important tool for your job search because it offers a page or two where you can display your top skills and qualities.</p>
                <div className="startbtn1 mb-3" >
                    <Link to="/select"  style={{textDecoration:'none'}}> <Button style={{height:'49px'}} variant="contained">Create Resume for Free </Button>
                    </Link>
                </div>
            </div>
            <img src={previmg} alt="" />
        </div>
    )
}
