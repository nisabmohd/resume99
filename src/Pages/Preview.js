import React, {  } from 'react'
import '../css/Preview.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Stepperc } from '../components/Stepperc';
export default function Preview() {
    function print() {
        document.getElementById('bodyContent').style.position = "absolute"
        document.getElementById('bodyContent').style.top = "-15px"
        document.getElementById('tohide').style.display = "none"
        document.getElementById('hidestepper').style.display = "none"
        window.print()
    }
    return (
        <div className="rsbody" id="bodyContent">
            <Box id="hidestepper" sx={{ width: '64%', margin: 'auto', marginTop: '19px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
                <Stepperc step="2" />
            </Box>
            <div className="resume" style={{ position: 'relative', backgroundColor: 'white', height: '1208px', width: '900px', margin: 'auto' }}>
                <div className="header">
                    <h1>{localStorage.getItem('fname') + " " + localStorage.getItem('lname')}</h1>
                    <div className="smalltextdown">
                        <p>{localStorage.getItem('city') + " ," + localStorage.getItem('street')}</p>
                        <p>, {localStorage.getItem('phone')}</p>
                        <p>, {localStorage.getItem('email')}</p>
                    </div>
                </div>
                <h2 className="objhead">Objective :</h2>
                <div className="obj">
                    {localStorage.getItem('overview')}
                </div>
                <h2 className="objhead2 objhead">Education :</h2>
                <div className="edu">
                    <li>{localStorage.getItem('edu1')}</li>
                    <li>{localStorage.getItem('edu2')}</li>
                </div>
                <h2 className="objhead3 objhead">Experience  :</h2>
                <div className="exp">
                    <li>{localStorage.getItem('exp1')}</li>
                    <li>{localStorage.getItem('exp2')}</li>
                </div>
                <h2 className="objhead4 objhead">Awards & Acknowledgements  :</h2>
                <div className="award">
                    <li>{localStorage.getItem('aw1')}</li>
                    <li>{localStorage.getItem('aw2')}</li>
                </div>

                <Box id="tohide" className="boxpr" sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px', paddingBottom: '19px' }}>
                    <Button className="btnpr" onClick={(e) => { e.preventDefault(); print(); }} variant="outlined">Print </Button>

                </Box>

            </div>
        </div>
    )
}
