
import { Box, Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import MediaCard from '../components/MediaCard'
import { Stepperc } from '../components/Stepperc'
import '../css/Select.css'
import temp1 from '../images/Template1.jpg'
import temp2 from '../images/Template2.png'
import { useNavigate } from 'react-router-dom';

// import temp3 from '../images/Template3.png'
export default function Select() {
    const navigate = useNavigate();
    const [temp, setTemp] = useState(null)
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState("0")
    function routeEdit() {
        setLoading(true)
        setStep("1")
        setTimeout(() => {
            navigate("/edit?template=1")
          }, 900)
    }
    return (
        <div className='selectpage'>

            <div className="salutations">
                {/* <h2 style={{ marginBottom: '15px',marginTop:'32px' }}>Choose a Template</h2> */}
            </div>
            <Box sx={{ width: '57%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left', minWidth: '375px' }}>
                <Stepperc step={step} />
            </Box>
            {
                loading ? (<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '79px', flexDirection: 'column' }}>
                    <CircularProgress size={65} sx={{ margin: '29px auto' }} />
                    <span style={{ color: 'black', fontFamily: 'Roboto', fontSize: '15px', fontWeight: '500' }}>Hang on ! Redirecting you ...</span>
                </Box>) :
                    <> <div className="resumetemplates">
                            <button id="btn1" style={{ width: 'fit-content', background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', margin: '22px 19px', borderRadius: '11px', padding: '0' }} onClick={() => { document.getElementById('btn1').style.border = "3px solid rgb(166,192,219)"; setTemp(1) }}><MediaCard image={temp1}></MediaCard></button>
                            <button style={{ width: 'fit-content', background: 'transparent', border: 'none', outline: 'none', cursor: 'not-allowed' }} onClick={() => { }}><MediaCard image={temp2}></MediaCard></button>
                            {/* <button style={{ width: 'fit-content', background: 'transparent', border: 'none', outline: 'none', cursor: 'not-allowed' }} onClick={() => { alert('clicked2') }}><MediaCard image={temp3}></MediaCard></button> */}
                        </div>
                        <Box sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px' }}>
                            {
                                temp ? <Button onClick={(e) => { e.preventDefault(); routeEdit() }} variant="outlined">Next </Button> : <Button disabled variant="outlined">Next </Button>
                            }

                        </Box>
                    </>
            }
        </div>
    )
}
