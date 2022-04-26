import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import loginpageimg from '../asset/1.png'
import templatepage from '../asset/2.png'
import editpage from '../asset/3.png'
import editpage1 from '../asset/31.png'
import editpage2 from '../asset/32.png'
import toast, { Toaster } from 'react-hot-toast';



export const Navbar = (props) => {

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleSignup = () => {
    if (!email) {
      toast.error('Please enter email');
      return;
    }
    if (!password) {
      toast.error('Please enter password');
      return;
    }

    props.signup(email, password)
    setOpen(false);
  }



  return (
    <div className='navbar' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0 2vw', marginTop: '-18px' }}>
      <div className="logo">
        <p style={{ fontWeight: '700', fontSize: '30px', color: 'white' }}>resume<span style={{ color: 'rgb(103,118,237)' }}>99</span></p>
      </div>
      <Toaster />
      <div className="tags">
        <Link to="/" style={{ fontFamily:'PT Sans',fontSize: '15px', fontWeight: '700', textDecoration: 'none', margin: '0 10px', color: 'white' }}>Home</Link>
        <button style={{ fontFamily:'PT Sans',fontSize: '15px', fontWeight: '600', textDecoration: 'none', margin: '0 10px', color: 'white', backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}} onClick={handleClickOpen1}>About</button>
        <Dialog maxWidth="xl" open={open1} onClose={handleClose1}>
          <DialogTitle>About</DialogTitle>
          <DialogContent style={{ textAlign: 'left' }}>
            <p><span style={{ fontWeight: 'bold' }}>resume99</span> is open source resume builder developed bt <span style={{ fontWeight: 'bold' }}><a style={{ color: 'white', textDecoration: 'none' }} href="https://github.com/nisabmohd" target="_blank" rel="noreferrer">Mohd Nisab</a></span></p>
            <h5>Features : </h5>
            <li style={{ fontSize: '13px' }}> Save To PDF , Save to JSON , User Friendly , Free forever , No Advertising , No User Tracking , Straight Forward</li>
            <h5>How to use ?</h5>
            <li style={{ fontSize: '13px' }}>First Login or signup</li>
            <img style={{ width: '900px', marginTop: '12px', marginBottom: '12px', borderRadius: '10px' }} src={loginpageimg} alt="" />
            <li style={{ fontSize: '13px' }}>Select a template or create new</li>
            <img style={{ width: '900px', marginTop: '12px', marginBottom: '12px', borderRadius: '10px' }} src={templatepage} alt="" />
            <li style={{ fontSize: '13px' }}>Edit your details</li>
            <img style={{ width: '900px', marginTop: '12px', marginBottom: '12px', borderRadius: '10px' }} src={editpage} alt="" />
            <li style={{ fontSize: '13px' }}>Preview your details</li>
            <img style={{ width: '900px', marginTop: '12px', marginBottom: '12px', borderRadius: '10px' }} src={editpage1} alt="" />
            <li style={{ fontSize: '13px' }}>Save your resume or change template</li>
            <img style={{ width: '900px', marginTop: '12px', marginBottom: '12px', borderRadius: '10px' }} src={editpage2} alt="" />
          </DialogContent>
        </Dialog>
        <button style={{ fontFamily:'PT Sans',fontSize: '15px', fontWeight: '600', textDecoration: 'none', margin: '0 10px', color: 'white', backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer' }} onClick={handleClickOpen} >Sign up</button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Signup</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              sx={{ marginBottom: '16px' }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password atleast 6 digits"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSignup}>Signup</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}
