import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import image from "../Images/logo.jpeg";
// import { useDispatch } from 'react-redux';
// import { GetUserData } from '../redux/UserDataSlice';


const SignIn = () => {
  const [open, setOpen] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();


  // const dispatch = useDispatch();

  // const win = window.sessionStorage;

  let history = useNavigate();

  const url = "http://localhost:8080/auth/login";

  const HandlePath = (resp, data) => {
    
    if (resp === 200) {
      sessionStorage.setItem("userId", data.id);
      // dispatch(GetUserData(data))
      sessionStorage.setItem('user',JSON.stringify(data))
      alert("User Logged in Successfully")
      return history("/user/profile")
    } else {
      alert("Please Check your credentials")
      return history("/")
    }
  }

  const HandleClose = () => {
    setOpen(false)
    history("/")
  }
  const HandleSubmit = async (data) => {
    await axios.post(url, { name: data.name, password: data.password }).then((response) => HandlePath(response.status, response.data)).catch((error) => HandlePath(error.response.status, error.response.data))

  }

  return (
    <div>
      <div>
        <img src={image} alt='' width="100%" height={700} ></img>
      </div>
      <Box>
        <Dialog open={open} maxWidth={'xs'} fullWidth >
          <DialogTitle>
            <Typography variant='h4'>
              <center>SIGN IN</center>
            </Typography>
            <IconButton
              sx={{ position: 'absolute', right: 10, top: 10, }}
              onClick={HandleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <form autoComplete='off' onSubmit={handleSubmit(HandleSubmit)}>
            <DialogContent>
              <DialogContentText>
                <TextField
                  type='text'
                  label="UserName"
                  {...register("name", { required: "this field is required" })}

                  margin='dense'
                  fullWidth
                >
                </TextField>
                <p>{errors.username?.message}</p>
                
                <TextField
                  type='password'
                  label="Password"
                  {...register("password", { required: "this field is required" })}
                  margin='dense'
                  fullWidth
                >
                </TextField>
                <p>{errors.password?.message}</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link style={{marginRight:210,cursor:'pointer'}}>Forgot password</Link>
              <Button variant='contained' type='submit'>SIGN IN</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </div>
  )
}
export default SignIn;