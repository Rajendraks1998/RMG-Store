import { AppBar, Box, Button, Dialog, DialogActions, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Divider, IconButton, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Close } from '@mui/icons-material';

const Billing = () => {
  const bill = useSelector((state)=>state.billingdata.billingData)
  const history = useNavigate();

  const[open,setOpen]=useState(true);
  const HandleClose =()=>{
    setOpen(false)
    history("/user/products");
    history(0);
  }

  console.log(bill.map((item)=>item.products.map((item) => item.name)));
  // console.log(bill.map((item)=>item.products[0].name));
  // console.log(bill.map((item)=>item.products[0].quantity));
  return (
    <div>
      <Dialog open={open} maxWidth>
        <DialogTitle position='static' >
          {/* <Typography variant='h3'>Billing</Typography> */}
          <IconButton
              sx={{ position: 'absolute', right: 10, top: 10, }}
              onClick={HandleClose}
            >
              <Close />
            </IconButton>
        </DialogTitle>
        <br/>
        <DialogContent>
          <Box sx={{width:1000}} >
              <Paper elevation={3} sx={{height:550}}>
                  <Paper sx={{border:1, height:550, marginTop:2,}}>
                    <AppBar position='static'>
                      <Typography variant='h4' sx={{marginTop:2}}>
                        <center>Billing</center>
                      </Typography><br/>
                    </AppBar>
                    <br/>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650  }} >
                        <TableHead>
                          <TableRow>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Product Price (Rs)</TableCell>
                            <TableCell>Total</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {bill.map((item1)=>{
                            return item1.products.map((item)=>{
                              return (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>
                                      {item.quantity*item.price}
                                    </TableCell>
                                </TableRow>
                              )
                            })
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <br/>
                    <Divider></Divider>
                    
                  
                    
                    
                    <Typography variant='h6' sx={{marginBottom:2}}>
                    Subtotal : {bill.map((item)=>item.totalPrice)}
                    </Typography>
                  </Paper>
                  
              </Paper>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={HandleClose}>Print</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Billing;
