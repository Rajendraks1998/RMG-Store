import { AppBar, Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import {  useSelector } from 'react-redux';


const UserCart = () => {
  const user = useSelector((state)=>state.user.user)
  const qty = useSelector((state)=>state.user.qty+1)
  
  return (
    <div>
      <center>
        <Box sx={{width:1000}}>
            <Paper elevation={3} sx={{height:550}}>
                <Paper sx={{border:1, height:550, marginTop:2}}>
                  <AppBar position='static'>
                    <Typography variant='h4' sx={{marginTop:2}}>User Cart</Typography><br/>
                  </AppBar>
                  <br/>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl No</TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Qty</TableCell>
                          <TableCell>Product Price (Rs)</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                          {user.map((item)=>{
                            return (
                                <TableRow>
                                  <TableCell>{item.id}</TableCell>
                                  <TableCell>{item.name}</TableCell>
                                  <TableCell>{qty+1}</TableCell>
                                  <TableCell>{item.price*qty}</TableCell>
                                  <TableCell>
                                    <Button variant='outlined' color='secondary'>X</Button>
                                  </TableCell>
                                </TableRow>
                            );
                          })}
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
