import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { addDoc, collection, where } from "firebase/firestore";
import { db } from './config';
import { v4 as uuidv4 } from 'uuid';
import formatfile from './format.txt'
import {onSnapshot,query } from 'firebase/firestore';

export const Dashboard = () => {
    const [getall, setgetall] = React.useState(null)
    const qr =query(collection(db, "resumes"), where("userid", "==", JSON.parse(localStorage.getItem('user')).uid));
    React.useEffect(
        () => {
            onSnapshot(qr, (snapshot) => setgetall(snapshot.docs.map((doc) => doc.data())))
        }
        , []);
        console.log(getall);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        if (name === "") {
            toast.error('Please enter a valid resume name');
            return
        }
        setOpen(false);
        const tempformat = await fetch(formatfile)
        const newtempformat = await tempformat.text()
        const sendtemp = JSON.stringify(JSON.parse(newtempformat));
        try {
            const docRef = await addDoc(collection(db, "resumes"), {
                userid: JSON.parse(localStorage.getItem('user')).uid,
                resumename: uuidv4(),
                resumedata: sendtemp
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        navigate(`/edit/${name}`)
    };
    const handleCancelClose = () => {
        setOpen(false);
    };


    return (
        <div className='dashboard'>
            <Toaster />
            <div className='card_create'>
                <Button variant="outlined" onClick={handleClickOpen} style={{ height: '370px', width: 'fit-content', padding: '0 41px', backgroundColor: '#303030', border: 'none' }}>
                    Create a new resume
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <DialogContentText>
                            Enter a name for your resume
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            required
                            onChange={(e) => { setName(e.target.value) }}
                            style={{ width: '500px', marginTop: '19px' }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancelClose}>Cancel</Button>
                        <Button onClick={handleClose}>Create</Button>
                    </DialogActions>
                </Dialog>
                <p style={{ marginTop: '5px' }}>Create New Resume</p>
                <p style={{ fontSize: '13px', marginTop: '-6px' }}>Start from scratch</p>
            </div>
        </div>
    )
}
