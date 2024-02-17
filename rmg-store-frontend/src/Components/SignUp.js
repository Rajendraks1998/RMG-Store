import { Box, TextField} from '@mui/material'
import React, { useState } from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const SignUp = ({open,handleClose,setData,data,setOpen}) => {
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");

    
    var[message,setMessage]=useState([])

    const handleSubmit =async()=>{
        // await axios.post("http://localhost:8080/user/login",{name:user,password:password})
        // .then((resp)=>setMessage((resp)))
        // .catch(err=>setMessage([err]))
        await axios.get("http://localhost:8080/user/findall").then((resp)=>setData([resp.data])).catch((err)=>setData([err]))
        setUser("");
        setPassword("");
        setConfirm("");
        setOpen(false);
    }
    // console.log(data);
    
  return (
    <div>
      <Box>
        <Dialog open={open}>
            <DialogTitle>
                <Typography variant='h3'>
                    <center> SIGN UP</center>
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                    >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
               <TextField type='text' variant='outlined' label="username" value={user} onChange={(e)=>setUser(e.target.value)}></TextField>
            </Typography>
            <Typography gutterBottom>
            <TextField type='text' variant='outlined' label="password" value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
            </Typography>
            <Typography gutterBottom>
            <TextField type='text' variant='outlined' label="confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}></TextField>
            </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
      </Box>
    </div>
  )
}

export default SignUp
