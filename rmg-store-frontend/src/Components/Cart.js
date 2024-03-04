import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

const Cart = () => {
  return (
    <div>
      
            <Box fullWidth>
              <Paper elevation={3} sx={{ height: 316, overflow: "hidden", }}>
                <Container sx={{ marginTop: 3 }}>
                  <Typography sx={{ marginBottom: 1.5 }} variant='h5'>Billing</Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>User:- </Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>No of Items:- </Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>Total Price:- </Typography>
                  <Divider></Divider><br />
                  <Button variant='contained'>Proceed</Button>
                </Container>
              </Paper>
            </Box>
          
    </div>
  )
}

export default Cart;
