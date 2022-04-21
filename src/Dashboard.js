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
import formatfile from './format.txt'
import { onSnapshot, query } from 'firebase/firestore';
import add from './asset/add.png'
import edit from './asset/edit.png'


export const Dashboard = () => {
    const [getall, setgetall] = React.useState(null)
    const qr = query(collection(db, "resumes"), where("userid", "==", JSON.parse(localStorage.getItem('user')).uid));
    React.useEffect(
        () => {
            onSnapshot(qr, (snapshot) => setgetall(snapshot.docs.map((doc) => ({ ...{ id: doc.id }, ...doc.data() }))))
        }, []);
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
                resumename: name,
                resumedata: sendtemp
            });
            navigate(`/edit/${docRef.id}`)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const handleCancelClose = () => {
        setOpen(false);
    };
    function handleResumeclick(e){
        navigate(`/edit/${e}`)
    }

    return (
        <div className='dashboard' style={{ height: '89vh', width: 'inherit', overflowY: 'scroll', display: 'flex', flexDirection: 'row', gap: '30px', flexWrap: 'wrap', alignContent: 'flex-start',marginLeft:'29px' }}>
            <Toaster />
            <div className='card_create'>
                <Button variant="outlined" onClick={handleClickOpen} style={{ height: '370px', padding: '0 41px', backgroundColor: '#303030', border: 'none', margin: 'auto',width: '260px', }}>
                    <img style={{width:'65px'}} src={add} alt="" />
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
            {
                getall?.map(item => {
                    return (
                        <div key={item.resumename} className='card_create'>
                            <Button id={item.id} variant="outlined" onClick={(e)=>handleResumeclick(e.target.id)} style={{ height: '370px', width: '260px', padding: '0 41px', backgroundColor: '#303030', border: 'none', color: 'white', fontWeight: 'bold', margin: 'auto' }}>
                              <img src={edit} alt="" />
                            </Button>
                            <p style={{ marginTop: '5px' }}>{item.resumename}</p>
                            <p style={{ fontSize: '13px', marginTop: '-6px' }}>Edit this resume</p>
                        </div>)
                })
            }
        </div>
    )
}
