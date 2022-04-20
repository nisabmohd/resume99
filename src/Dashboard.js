import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const[name,setName]=React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
        navigate(`/edit/${name}`)
    };
    return (
        <div className='dashboard'>
            <div className='card_create'>
                <Button variant="outlined" onClick={handleClickOpen} style={{height:'370px',width:'fit-content',padding:'0 41px',backgroundColor:'#303030',border:'none'}}>
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
                            onChange={(e)=>{setName(e.target.value)}}
                            style={{width:'500px',marginTop:'19px'}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Create</Button>
                    </DialogActions>
                </Dialog>
                <p style={{marginTop:'5px'}}>Create New Resume</p>
                <p style={{fontSize:'13px',marginTop:'-6px'}}>Start from scratch</p>
            </div>
        </div>
    )
}
