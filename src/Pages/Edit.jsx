import React from 'react'
import Certifications from '../Inputs/Certifications'
import Education from '../Inputs/Education'
import Personal from '../Inputs/Personal'
import Projects from '../Inputs/Projects'
import Skills from '../Inputs/Skills'
import Summary from '../Inputs/Summary'
import Work from '../Inputs/Work'

export default function Edit() {
    return (
        <div className='editpage'>
            <div className="greetingedit">
                <h2>Welcome 👋
Start building your new resume</h2>
            </div>
            <div className="getinputs">
                <Personal></Personal>
                <Work></Work>
                <Skills></Skills>
                <Education></Education>
                <Projects></Projects>
                <Certifications></Certifications>
                <Summary></Summary>
            </div>
        </div>
    )
}
