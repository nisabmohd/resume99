import React from 'react'
import '../css/Templates.css'
import tmt1 from '../images/template1.jpg'
import tmt2 from '../images/template2.jpg'
import tmt3 from '../images/template3.jpg'
import { Link } from 'react-router-dom'
export default function Templates() {
    return (
        <div className='templates'>
            <div className="templateheader">
                <h2>Beautiful ready-to-use resume templates</h2>
                <p>Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                <Link to="/edit"><button className='templateselbtn'>Select Template</button></Link>
            </div>
            <div className="temtimgs">
                <img src={tmt1} alt="" />
                <img src={tmt2} alt="" />
                <img src={tmt3} alt="" />
            </div>
        </div>
    )
}
