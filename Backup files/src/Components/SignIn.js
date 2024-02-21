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
import { NavLink} from 'react-router-dom';
import axios from 'axios';

const SignIn = ({open,setOpen,setBtns,setBtnout,setImg}) => {

  const url = "http://localhost:8080/user/login";

  const[user,setUser]=useState("");
  const[password,setPassword]=useState("");


 

  const handleSubmit =async()=>{
    await axios.post(url,{user:user,password:password}).then((resp)=>alert(resp.data)).catch((err)=>console.log(err))
    setUser("");
    setPassword("");
    setOpen(false);
    setBtns(false);
    setBtnout(true);
    setImg(false);

        
    }

  const handleClose =()=>{
    setOpen(false)
    setImg(true)
  }
  return (
    <div>
      <Box>
        <Dialog open={open}>
          <DialogTitle>
            <Typography variant='h3'>
              <center> SIGN IN</center>
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
              <NavLink to={"/"}>
                <CloseIcon />
              </NavLink>
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <TextField type='text' variant='outlined' label="username" value={user} onChange={(e) => setUser(e.target.value)}></TextField>
            </Typography>
            <Typography gutterBottom>
              <TextField type='text' variant='outlined' label="password" value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
            </Typography>
          </DialogContent>
          <DialogActions>
            <NavLink to={"/user"}>
              <Button variant='contained' autoFocus onClick={handleSubmit}>
                Submit
              </Button>
            </NavLink>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  )
}

export default SignIn

