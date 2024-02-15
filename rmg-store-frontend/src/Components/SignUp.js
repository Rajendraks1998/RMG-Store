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

const SignUp = ({open,handleClose,}) => {
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");

    const handleSubmit =async()=>{
        //await axios.post("http://localhost:8080/user/login",{username:user,password:password}).then((resp)=>console.log(resp.data)).catch((err)=>console.log(err))
        // const message = await axios.get("http://localhost:8080/user/login").then((resp)=>console.log(resp.data));

        console.log(user,password,confirm)
        setUser("");
        setPassword("");
        setConfirm("");
    }
    
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
