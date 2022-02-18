import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const Edit = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [overview, setOver] = useState('')
  const [edu1, setEdu1] = useState('')
  const [edu2, setEdu2] = useState('')
  const [exp1, setExp1] = useState('')
  const [exp2, setExp2] = useState('')
  const [aw1, setAw1] = useState('')
  const [aw2, setAw2] = useState('')
  function handleSubmit() {
    if (fname === '' || lname === '' || phone === '' || email === '' || city === '' || street === '' || overview === '' || edu1 === '' || exp1 === '' || exp2 === '' || edu2 === '' || aw1 === '' || aw2 === '') {
      alert("Fill all credintials")
      return
    }
    else{
      localStorage.setItem('fname',fname)
      localStorage.setItem('lname',lname)
      localStorage.setItem('phone',phone)
      localStorage.setItem('email',email)
      localStorage.setItem('city',city)
      localStorage.setItem('street',street)
      localStorage.setItem('overview',overview)
      localStorage.setItem('edu1',edu1)
      localStorage.setItem('edu2',edu2)
      localStorage.setItem('exp1',exp1)
      localStorage.setItem('exp2',exp2)
      localStorage.setItem('aw1',aw1)
      localStorage.setItem('aw2',aw2)
      navigate("/prev")
    }
  }
  return <div className='editpage'>

    <div className="salutations">
      <p style={{ fontWeight: 'bold' }}>Welcome 👋</p>
      <h2 style={{ marginBottom: '35px' }}>Start building your new resume</h2>

      <Box sx={{ width: '44%', margin: 'auto', marginTop: '19px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Personal Details :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">First Name </InputLabel>
          <Input value={fname} onChange={(e) => { setFname(e.target.value) }} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Last Name </InputLabel>
          <Input value={lname} onChange={(e) => { setLname(e.target.value) }} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Phone No.</InputLabel>
          <Input value={phone} onChange={(e) => { setPhone(e.target.value) }} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Email Address</InputLabel>
          <Input value={email} onChange={(e) => { setEmail(e.target.value) }} id="component-simple" />
        </FormControl>
      </Box>


      <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Contact Address :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">City/Town</InputLabel>
          <Input value={city} onChange={(e) => setCity(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Street/House No.</InputLabel>
          <Input value={street} onChange={(e) => setStreet(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>


      <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Overview :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          {/* <InputLabel htmlFor="component-simple">Street/House No.</InputLabel> */}
          <textarea value={overview} onChange={(e) => setOver(e.target.value)} style={{ backgroundColor: 'transparent', fontSize: '16px', fontFamily: 'Roboto', padding: '9px 6px', outline: 'none', border: '1.25px solid #a4a4a4' }} placeholder="About Yourself .." rows="14" cols="50" />
        </FormControl>
      </Box>


      <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Education :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">School Name</InputLabel>
          <Input value={edu1} onChange={(e) => setEdu1(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Degree/Majors</InputLabel>
          <Input value={edu2} onChange={(e) => setEdu2(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>


      <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Experience :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">Job Title</InputLabel>
          <Input value={exp1} onChange={(e) => setExp1(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">....</InputLabel>
          <Input value={exp2} onChange={(e) => setExp2(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>


      <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
        <h3>Awards/Acknowledgements :</h3>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">List The Acknowledgments</InputLabel>
          <Input value={aw1} onChange={(e) => setAw1(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>
      <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
        <FormControl sx={{ width: '55%', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
          <InputLabel htmlFor="component-simple">....</InputLabel>
          <Input value={aw2} onChange={(e) => setAw2(e.target.value)} id="component-simple" />
        </FormControl>
      </Box>


      <Box sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px' }}>
        <Button onClick={(e) => { e.preventDefault(); handleSubmit() }} variant="outlined">Preview </Button>
      </Box>


    </div>
  </div>;
};
