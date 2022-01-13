import React from 'react'
import '../css/Features.css'
import bgimg from '../images/message.png'
export default function Features() {
    return (
        <div className='features'>
            <div className="ftchild">
                <div className="imagebg">
                    <img src={bgimg} alt="" />
                </div>
                <div className="getstrd">
                    <h2>Stand out with professionally designed resume</h2>
                    <h4>Effortlessly make a job-worthy resume that gets you hired faster</h4>
                    <a href="/"><button className='templateselbtn3'> Learn How to make resume</button></a>
                </div>
            </div>
        </div>
    )
}
