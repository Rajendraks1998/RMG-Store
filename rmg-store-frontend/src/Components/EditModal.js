import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const EditModal = ({setShow,EditData,id}) => {
    const[name,setName]=useState(EditData.name)
    const[price,setPrice]=useState(EditData.price)

    const userGet = sessionStorage.getItem('user');

    const userObject = JSON.parse(userGet);

    const HandleClose =()=>{
        setShow(false)
    }

    const HandleSubmit =async(id)=>{
        await axios.put(`http://localhost:8080/api/products/${id}`,{id:id,name:name,price:price,quantity:0,user:userObject})
    }
    
  return (
    <div>
      <Box>
        <Dialog open={true} maxWidth={'xs'} fullWidth >
          <DialogTitle>
            <Typography variant='h4'>
              <center>Edit Product</center>
            </Typography>
            <IconButton
              sx={{ position: 'absolute', right: 10, top: 10, }}
              onClick={HandleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <form autoComplete='off' onSubmit={()=>HandleSubmit(id)}>
            <DialogContent>
              <DialogContentText>
                <TextField
                  type='text'
                  label="ProductName"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  margin='dense'
                  fullWidth
                >
                </TextField>
                
                <TextField
                  type='number'
                  label="Price"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                  margin='dense'
                  fullWidth
                >
                </TextField>
                
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='contained' type='submit'>UPDATE</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </div>
  )
}

export default EditModal;
