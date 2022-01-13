import React from 'react'
import previmg from '../images/temp-prev3.jpg'
import '../css/Prevone.css'
export default function Previewone() {
    return (
        <div className='Previewone'>
            <div className="headerprevone">
                <h2>Lets <span className='targethd'>create a resume</span> for your dream job</h2>
                <p>A resume is an important tool for your job search because it offers a page or two where you can display your top skills and qualities.</p>
                <div className="startbtn1 mb-3" >
                <a href="/"><button>Create Resume for Free</button></a>
            </div>
            </div>
            <img src={previmg} alt="" />
        </div>
    )
}
