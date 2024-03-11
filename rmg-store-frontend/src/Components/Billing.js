import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

const Billing = () => {
  const bill = useSelector((state)=>state.billingdata.billingData)
  const history = useNavigate();

  const[open,setOpen]=useState(true);
  const HandleClose =()=>{
    setOpen(false)
    history("/user/products");
    history(0);
  }

  console.log(bill.map((item)=>item.totalPrice));
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle >
          <Typography variant='h3'>Billing</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant='h6'>
            Total Price :{
              bill.map((item)=>item.totalPrice)
            }
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={HandleClose}>Print</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Billing;
