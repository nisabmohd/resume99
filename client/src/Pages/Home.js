import React, { useState } from 'react'
import { AutBtn } from '../Component/AutBtn'
import { HomeSection } from '../Component/HomeSection'
import { Navbar } from '../Component/Navbar'
import github from '../asset/g2.png'
import google from '../asset/g1.png'
import bg from '../asset/008-.jpg'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleprovider } from '../config'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import toast, { Toaster } from 'react-hot-toast';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Home = (props) => {
    const auth = getAuth();
    async function googleLogin() {
        const user = await signInWithPopup(auth, googleprovider)
        localStorage.setItem('user', JSON.stringify(user.user))
        props.setuser(user)
    }

    async function emaillogin(email, password) {
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            props.setuser(user)
            localStorage.setItem('user', JSON.stringify(user.user))
        }).catch(err => {
            toast.error(err.message.slice(16));
        })
    }

    async function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password).then(user => {
            props.setuser(user)
            localStorage.setItem('user', JSON.stringify(user.user))
        }).catch(err => {
            toast.error(err.message.slice(16));
        })

    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handlelogin = () => {
        if (!email && !password) {
            toast.error('Please enter all the credentials');
            return;
        }
        emaillogin(email, password)
        setOpen1(false);
    }
    const handleClose1 = () => {
        setOpen1(false);
    };
    return (
        <div>
            <Navbar signup={signup}></Navbar>
            <Toaster />
            <HomeSection></HomeSection>
            <div className="btns" style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', margin: 'auto', marginTop: '45px' }}>
                <AutBtn name="Login via Google" img={google} col="white" textcol="black" onc={googleLogin}></AutBtn>
                <AutBtn name="User Login" img={github} col="rgb(0 0 0)" textcol="white" onc={handleClickOpen1}></AutBtn>
                <Dialog open={open1} onClose={handleClose1}>
                    <DialogTitle style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}> <AccountCircleIcon style={{width:'42px',height:"30px"}} /> Sign in</DialogTitle>
                   
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            sx={{ marginBottom: '16px' }}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handlelogin}>Sign in</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="image" style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '650px', margin: 'auto', marginTop: '45px', marginBottom: '29px', borderRadius: '10px' }} src={bg} alt="" />
            </div>
        </div>
    )
}
