import React, { useState } from 'react'
import '../css/Preview.css'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Stepperc } from '../components/Stepperc';
import '../css/template2.css'
export default function Preview() {
    const [temp, setTemp] = useState(2)
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
    if (temp === 1) {
        return (
            <div className="rsbody" id="bodyContent">
                <div className="salutations">
                    {/* <h2 style={{ marginBottom: '15px',marginTop:'32px' }}>All Done ...</h2> */}
                </div>
                <Box id="hidestepper" sx={{ width: '57%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left', minWidth: '375px' }}>
                    <Stepperc step="2" />
                </Box>
                {
                    (temp === 1)
                }
                <div className="resume" style={{ position: 'relative', backgroundColor: 'white', height: '1208px', width: '900px', margin: 'auto' }}>
                    <div className="header">
                        <h1>{sessionStorage.getItem('fname') + " " + sessionStorage.getItem('lname')}</h1>
                        <div className="smalltextdown">
                            <p>{sessionStorage.getItem('city') + " ," + sessionStorage.getItem('street')}</p>
                            <p>{sessionStorage.getItem('phone')}</p>
                            <p>{sessionStorage.getItem('email')}</p>
                        </div>
                    </div>
                    <img src={sessionStorage.getItem('imageurl')} style={{ width: '130px', position: 'absolute', right: '145px', top: '65px', borderRadius: '50%' }} alt="" />
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
    else if (temp === 2) {
        return (
            <div className="rsbody" id="bodyContent">
                <div className="salutations">
                    {/* <h2 style={{ marginBottom: '15px',marginTop:'32px' }}>All Done ...</h2> */}
                </div>
                <Box id="hidestepper" sx={{ width: '57%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left', minWidth: '375px' }}>
                    <Stepperc step="2" />
                </Box>
                <div className="resume2" style={{ backgroundColor: 'white', height: '1208px', width: '900px', margin: 'auto' }}>

                    <div className="template2">
                        <div className="left2">
                            <div className="image2">
                                <h1 style={{ color: 'rgb(58, 120, 253)', fontSize: '59px' }}>N</h1>
                            </div>
                            <div className="firstname2 tp2 boldtextname">Mohd Nisab</div>
                            <div className="lastname2 tp2 boldtextname">Alam</div>
                            <div className="phno2 tp2">1234567890</div>
                            <div className="email2 tp2">xyxperson@gmail.com</div>
                            <div className="address2 tp2">Hyderabad, India</div>
                            <div className="pincode2 tp2">500009</div>
                        </div>
                        <div className="right2">
                            <h4>SUMMARY</h4>
                            <div className="summary2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quis sed rerum excepturi velit beatae, voluptatum omnis. Vitae pariatur ab voluptatem, atque aut, eveniet fugiat obcaecati blanditiis, excepturi harum saepe ullam ipsam cupiditate consequuntur perspiciatis animi maxime. Harum nemo architecto debitis a rerum amet asperiores dignissimos, expedita dolor ad temporibus vel commodi omnis assumenda voluptate sapiente quis voluptatibus accusantium ab! Maxime, aliquid. Libero, laudantium ex? Voluptates illum tempora consectetur quis? Id et ut dignissimos? Doloremque eaque consequuntur fuga dicta. Voluptas, veniam mollitia. Id adipisci, nam nemo, dolore fuga inventore delectus alias porro saepe magnam, veniam assumenda consequuntur voluptates amet?
                            </div>
                            <h4 className='skillheading2'>SKILLS</h4>
                            <div className="skills2">
                                <li style={{ marginLeft: '6px' }}>Web Development</li>
                                <li style={{ marginLeft: '6px' }}>Java Programming</li>
                                <li style={{ marginLeft: '6px' }}>JavaScript Libraries and Framework</li>
                            </div>
                            <h4 className='edu2head'>EDUCATION AND TRAINING</h4>
                            <div className="edu2">
                                <ol style={{ marginLeft: '6px',fontSize:'14px' }}>B.Tech CMRIT , Hyderabad</ol>
                                <ol style={{ marginLeft: '6px',fontSize:'14px'  }}>Intermediate , Sri Gayathri , Hyderabad</ol>
                            </div>
                            <h4 className='lng2head'>LANGUAGE</h4>
                            <div className="lang2">
                                <li style={{ fontSize: '14px', marginLeft: '6px' }}>Hindi</li>
                                <li style={{ fontSize: '14px', marginLeft: '6px' }}>English</li>
                            </div>
                            <h4 className='port2head'>WEBSITES,PORTFOLIOS, PROFILES</h4>
                            <div className="port2">
                                <li style={{ marginLeft: '6px' }}>www.nisabmohd_portfolio.com</li>
                            </div>
                            <h4 className='proj2head'>PROJECTS</h4>
                            <div className="projects2">
                                <li style={{ marginLeft: '6px' }}>Resume Builder</li>
                                <li style={{ marginLeft: '6px' }}>News Webapp</li>
                                <li style={{ marginLeft: '6px' }}>Jokes API</li>
                            </div>
                        </div>
                    </div>
                    <Box id="tohide" className="boxpr2" sx={{ width: '80%', margin: 'auto', marginTop: '5px', marginBottom: '19px', paddingBottom: '19px' }}>
                        <Button style={{ height: '34px' }} className="btnpr2" onClick={(e) => { e.preventDefault(); print(); }} variant="outlined">Print </Button>
                    </Box>

                </div>
            </div>
        )
    }

}
