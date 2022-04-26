import React, { useState } from 'react'
import { AutBtn } from '../Components/AutBtn'
import { HomeSection } from '../Components/HomeSection'
import { Navbar } from '../Components/Navbar'
import github from '../asset/login.png'
import google from '../asset/search.png'
import bg from '../asset/008-.jpg'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleprovider } from '../config'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export const Home = (props) => {
    const auth = getAuth();
    async function googleLogin() {
        const user = await signInWithPopup(auth, googleprovider)
        localStorage.setItem('user', JSON.stringify(user.user))
        props.setuser(user)
    }

    async function emaillogin(email, password) {
        const user = await signInWithEmailAndPassword(auth, email, password)
        props.setuser(user)
        localStorage.setItem('user', JSON.stringify(user.user))
    }

    async function signup(email, password) {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        props.setuser(user)
        localStorage.setItem('user', JSON.stringify(user.user))

    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        if (!email && !password) return;
        emaillogin(email, password)
        setOpen1(false);
    };
    return (
        <div>
            <Navbar signup={signup}></Navbar>
            <HomeSection></HomeSection>
            <div className="btns" style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', margin: 'auto', marginTop: '45px' }}>
                <AutBtn name="Login via Google" img={google} col="white" textcol="black" onc={googleLogin}></AutBtn>
                <AutBtn name="resume99 Login" img={github} col="rgb(143 138 138)" textcol="white" onc={handleClickOpen1}></AutBtn>
                <Dialog open={open1} onClose={handleClose1}>
                    <DialogTitle>Signin</DialogTitle>
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
                        <Button onClick={handleClose1}>Signin</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="image" style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '650px', margin: 'auto', marginTop: '56px', marginBottom: '29px', borderRadius: '10px' }} src={bg} alt="" />
            </div>
        </div>
    )
}
