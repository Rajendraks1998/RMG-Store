import React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogContentText from '@mui/material/DialogContentText';

import DialogTitle from '@mui/material/DialogTitle';

import { Button, DialogActions, IconButton, Typography } from '@mui/material';

import { Close } from '@mui/icons-material';



const Modal = ({open,setOpen,view}) => {

   

  const HandleClose =()=>{

    setOpen(false)

  }

 return (

  <div>

   {view.map((item)=>{

    return (

      <Dialog open={open} maxWidth={'xs'} onClose={HandleClose} fullWidth>

        <DialogTitle>

          Details of : <span> </span>

          {item.username.toUpperCase()}

        </DialogTitle>

        <IconButton

          aria-label="close"

          onClick={HandleClose}

          sx={{

            position: 'absolute',

            right: 10,

            top: 10,

          }}

        >

          <Close/>

        </IconButton>

        <DialogContent dividers>

          <DialogContentText>

            <Typography variant='h5'>UserName: {item.username}</Typography>

            <Typography variant='h5'>Password: {item.password}</Typography>

            <Typography variant='h5'>Content: {item.content}</Typography>

            <Typography variant='h5'>Date: {item.date}</Typography>

            <Typography variant='h5'>Timings: {item.time}</Typography>

          </DialogContentText>

        </DialogContent>

        <DialogActions dividers>

          <Button onClick={HandleClose} variant='contained'>Close</Button>

        </DialogActions>

      </Dialog>

    )

   })}

  </div>

 )

}



export default Modal