import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogTitle, Divider, IconButton, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({setShow1,id}) => {
    let history = useNavigate();
    

    const HandleClose =()=>{
        setShow1(false)
    }

    const HandleCancel =()=>{
        setShow1(false)
    }

    const HandleOk =async(id)=>{
        axios.delete(`http://localhost:8080/api/products/${id}`).then((resp)=>console.log(resp.data)).catch((err)=>console.log(err))
        history(0);
        setShow1(false)
    }
  return (
    <div>
      <Box>
        <Dialog open={true} maxWidth={'xs'} fullWidth >
          <DialogTitle>
            <Typography variant='h4'>
              <center>Are you Sure</center>
            </Typography>
            <IconButton
              sx={{ position: 'absolute', right: 10, top: 10, }}
              onClick={HandleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          
            <Divider></Divider>
            <DialogActions>
              <Button variant='contained' onClick={HandleCancel}>CANCEL</Button>
              <Button variant='contained' onClick={()=>HandleOk(id)}>OK</Button>
            </DialogActions>
          
        </Dialog>
      </Box>
    </div>
  )
}

export default DeleteModal;
