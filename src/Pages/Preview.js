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
        document.getElementById('bodyContent').style.position = "relative"
        document.getElementById('bodyContent').style.top = "0px"
        document.getElementById('tohide').style.display = "block"
        document.getElementById('hidestepper').style.display = "block"
    }
    return (
        <div className="rsbody" id="bodyContent">
            <Box id="hidestepper" sx={{ width: '64%', margin: 'auto', marginTop: '19px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
                <Stepperc step="2" />
            </Box>
            <div className="resume" style={{ position: 'relative', backgroundColor: 'white', height: '1208px', width: '900px', margin: 'auto' }}>
                <div className="header">
                    <h1>{sessionStorage.getItem('fname') + " " + sessionStorage.getItem('lname')}</h1>
                    <div className="smalltextdown">
                        <p>{sessionStorage.getItem('city') + " ," + sessionStorage.getItem('street')}</p>
                        <p>, {sessionStorage.getItem('phone')}</p>
                        <p>, {sessionStorage.getItem('email')}</p>
                    </div>
                </div>
                <h2 className="objhead">Objective :</h2>
                <div className="obj">
                    {sessionStorage.getItem('overview')}
                </div>
                <h2 className="objhead2 objhead">Education :</h2>
                <div className="edu">
                    <li>{sessionStorage.getItem('edu1')}</li>
                    <li>{sessionStorage.getItem('edu2')}</li>
                </div>
                <h2 className="objhead3 objhead">Experience  :</h2>
                <div className="exp">
                    <li>{sessionStorage.getItem('exp1')}</li>
                    <li>{sessionStorage.getItem('exp2')}</li>
                </div>
                <h2 className="objhead4 objhead">Awards & Acknowledgements  :</h2>
                <div className="award">
                    <li>{sessionStorage.getItem('aw1')}</li>
                    <li>{sessionStorage.getItem('aw2')}</li>
                </div>

                <Box id="tohide" className="boxpr" sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px', paddingBottom: '19px' }}>
                    <Button className="btnpr" onClick={(e) => { e.preventDefault(); print(); }} variant="outlined">Print </Button>

                </Box>

            </div>
        </div>
    )
}
