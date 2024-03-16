import { AppBar, Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import {  useSelector } from 'react-redux';


const UserCart = () => {
  const[billing,setBilling]=useState([])
  // const user = useSelector((state)=>state.user.user)
  // const qty = useSelector((state)=>state.user.qty+1)

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/billings`).then((response)=>setBilling(response.data)).catch((err)=>console.log(err))
  },[])

  // const date = billing.map((item)=>{
  //   return item.dateTime.split('-',12)
  // })

  // const DateSplit = date[0][0]+"/"+date[0][1]+"/"+date[0][2].split("T");
  // const updatedDate = DateSplit.split(",");
  // const lastDate = updatedDate[0];

  return (
    <div>
      <center>
        <Box sx={{width:1000}}>
            <Paper elevation={3} sx={{height:550}}>
                <Paper sx={{border:1, height:550, marginTop:2}}>
                  <AppBar position='static'>
                    <Toolbar>
                      <Typography variant='h5' sx={{marginTop:2}}>Billing History</Typography><br/>
                      <TextField size='small' color='success' sx={{ flexGrow: 1,mr:2, ml:60  }}type='date'></TextField>
                    </Toolbar>
                    
                  </AppBar>
                  <br/>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl No</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Time</TableCell>
                          <TableCell>Total Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          billing.map((item)=>{
                            return(
                              <TableRow>
                                  <TableCell>{item.id}</TableCell>
                                  <TableCell>{item.date}</TableCell>
                                  <TableCell>{item.time}</TableCell>
                                  <TableCell>{item.totalPrice}</TableCell>
                                </TableRow>
                            );
                          })
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br/>
                  <Divider></Divider>
                  
                   
                  
                </Paper>
            </Paper>
        </Box>
      </center>
    </div>
  )
}

export default UserCart
