import { Close } from '@mui/icons-material';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';

import axios from 'axios';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';






const SignOut = () => {
  const [open, setOpen] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useNavigate();

const url = "http://localhost:8080/api/users"


  const HandleClose =()=>{

    setOpen(false)
    history("/")

  }
  const HandlePath = (data) => {
    
      alert(data)
      history("/")
    
  }
  const HandleSubmit=async(data)=> {
    await axios.post(url, {name:data.name, store: data.store, address: data.address, email: data.email, contact: data.contact, password: data.password})
    .then((resp)=> HandlePath(resp.data)).catch((err)=> HandlePath(err.response.data))
    history("/")
  }
 return (

  <div>

   <Box>

    <Dialog open={open} maxWidth={'xs'} fullWidth >

      <DialogTitle>

        <Typography variant='h3'>

          <center>SIGN Up</center>

        </Typography>

        <IconButton 

          sx={{ position: 'absolute',right: 10,top: 10,}}

          onClick={HandleClose}

        >

          <Close/>

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

            <p>{errors.name?.message}</p>

            <br/>

            <TextField 

              type='text'

              label="Store Name"

              {...register("store", { required: "this field is required" })}

            
              margin='dense'

              fullWidth

            >

            </TextField>

            <p>{errors.store?.message}</p>

            <br/>
            <TextField 

              type='email'

              label="emailId"

              {...register("email", { required: "this field is required" })}

            
              margin='dense'

              fullWidth

            >

            </TextField>

            <p>{errors.emailId?.message}</p>

            <br/><TextField 

              type='number'

              label="contact"

              {...register("contact", { required: "this field is required" })}

            
              margin='dense'

              fullWidth

            >

            </TextField>

            <p>{errors.contact?.message}</p>

            <br/>
            <TextField 

              type='text'

              label="address"

              {...register("address", { required: "this field is required" })}

            
              margin='dense'

              fullWidth

            >

            </TextField>

            <p>{errors.address?.message}</p>

            <br/>
            <TextField 

              type='password'

              label="Password"

              {...register("password", { required: "this field is required" })}

            
              margin='dense'

              fullWidth

            >

            </TextField>

            <p>{errors.password?.message}</p>

            <br/>
          

            {/* <TextField 

              type='text'

              label="Confirm Password"

              {...register("cnfpassword", { required: "this field is required" })}


              margin='dense'

              fullWidth

            >

            </TextField> */}

           {/* <p>{errors.cnfpassword?.message}</p> */}

          </DialogContentText>

        </DialogContent>

        <DialogActions>

          <Button variant='contained' type='submit'>SIGN UP</Button>

        </DialogActions>

      </form>

    </Dialog>

   </Box>

  </div>

 )

}



export default SignOut;