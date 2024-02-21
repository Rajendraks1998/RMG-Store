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



const SignUp = ({open,setData,data,setOpen}) => {

    const url = "http://localhost:8080/user/add";



   const[inputs,setInputs]=useState({
    name:"",
    store:"",
    address:"",
    emailId:"",
    contact:0,
    password:""
   })


   const HandleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs((prev)=>{
            return {...prev,[name]:value}
        });
        
   }

  

    const handleSubmit =async()=>{

        await axios.post(url,{name:inputs.name,store:inputs.store,address:inputs.address,emailId:inputs.emailId,contact:inputs.contact,password:inputs.password})
        .then((resp)=>console.log(resp.data)).catch((err)=>console.log(err))
        setInputs({
            name:"",
            store:"",
            address:"",
            emailId:"",
            contact:"",
            password:"", 
            // cnfPassword:" "
        })
        console.log(inputs)
        setOpen(false);
        
    }
    

    const handleClose =()=>{
        setOpen(false)
        
    
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
                    <NavLink to={"/"}>
                        <CloseIcon />
                    </NavLink>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
            <Typography gutterBottom>
               <TextField
                    fullWidth
                    name='name'  
                    autoComplete='off'
                    type='text' 
                    label="Enter Username"
                    margin='dense'
                    onChange={HandleChange}
                    >
                </TextField>
            </Typography>
            <Typography gutterBottom>
                <TextField 
                    fullWidth 
                    name='store'
                    autoComplete='off'
                    type='text' 
                    variant='outlined' 
                    label="Enter Store Name"
                    margin='dense' 
                    onChange={HandleChange}
                    value={inputs.store}>
                </TextField>
            </Typography>
            <Typography gutterBottom>
                <TextField 
                    fullWidth 
                    name='address'
                    autoComplete='off'
                    type='text' 
                    variant='outlined' 
                    label="Enter Store Address"
                    margin='dense' 
                    onChange={HandleChange}
                    value={inputs.address}>
                </TextField>
            </Typography>
            <Typography gutterBottom>
                <TextField 
                    fullWidth 
                    name='emailId'
                    autoComplete='off'
                    type='email' 
                    variant='outlined' 
                    label="Enter E-mail ID"
                    margin='dense' 
                    onChange={HandleChange}
                    value={inputs.emailId}>
                </TextField>
            </Typography>
            <Typography gutterBottom>
                <TextField 
                    fullWidth 
                    name='contact'
                    autoComplete='off'
                    type='number' 
                    variant='outlined' 
                    label="Enter Contact Number"
                    margin='dense' 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={HandleChange}
                    value={inputs.contact}>
                </TextField>
            </Typography>
            <Typography gutterBottom>
                <TextField 
                    fullWidth 
                    name='password'
                    autoComplete='off'
                    type='password'
                    variant='outlined' 
                    label="Enter password" 
                    margin='dense'
                    onChange={HandleChange}
                    value={inputs.password}>
                </TextField>
            </Typography>
            {/* <Typography gutterBottom>
                <TextField
                    fullWidth 
                    name='cnfpassword'
                    autoComplete='off'
                    type='password' 
                    variant='outlined' 
                    label="Re-Enter password"
                    margin='dense' 
                    onChange={HandleChange}
                    value={inputs.cnfPassword}>
                </TextField>
            </Typography> */}
            </DialogContent>
            <DialogActions>
                <NavLink to={"/"}>
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

export default SignUp
