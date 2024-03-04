import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { GetUserData } from '../redux/UserDataSlice';


const SignIn = () => {
  const [open, setOpen] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();


  const dispatch = useDispatch();

  // const win = window.sessionStorage;

  let history = useNavigate();

  const url = "http://localhost:8080/user/login";

  const HandlePath = (resp, data) => {
    
    if (resp === 200) {

      dispatch(GetUserData(data))
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
    await axios.post(url, { user: data.username, password: data.password }).then((response) => HandlePath(response.status, response.data)).catch((err) => HandlePath(err.response.status, err.response.data))

  }

  return (
    <div>
      <Box>
        <Dialog open={open} maxWidth={'xs'} fullWidth >
          <DialogTitle>
            <Typography variant='h3'>
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
                  {...register("username", { required: "this field is required" })}

                  margin='dense'
                  fullWidth
                >
                </TextField>
                <p>{errors.username?.message}</p>
                <br></br>
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
              <Button variant='contained' type='submit'>SIGN IN</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </div>
  )
}
export default SignIn;