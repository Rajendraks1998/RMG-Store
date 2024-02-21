import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material'
import axios from 'axios';
// import {Grid,TextField} from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';

const Products = () => {
  // const [datas, setDatas] = useState([]);
  const [products, setProducts] = useState([]);
  // const [noItems, setNoItems] = useState([])
  // const { register, handleSubmit, resetField, formState: { errors } } = useForm();

  // const HandleSubmit = async (data) => {
  //   await axios.post("http://localhost:8000/products", { name: data.name, price: data.price, date: data.date })
  //     .then((resp) => setDatas([...datas, resp.data]))
  //     .catch((err) => console.log(err))
  //   await axios.get("http://localhost:8000/products")
  //     .then((resp) => setProducts(resp.data))
  //     .catch((err) => console.log(err))
  //   resetField("name");
  //   resetField("price");
  //   resetField("date");
  // }

  // const HandleAddItems = async (id) => {
  //   const itemss = await axios.get(`http://localhost:8000/products/${id}`)
  //   // .then((resp)=>setNoItems(resp.data))
  //   // .catch((err)=>console.log(err)
  //   setNoItems([...noItems, itemss.data])
  // }

  // console.log(noItems.length);
  // console.log(noItems)

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {/* <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <Paper elevation={3}>
                <br />
                <Container>
                  <form onSubmit={handleSubmit(HandleSubmit)}>
                    <TextField
                      placeholder='Enter product Name'
                      margin='dense'
                      fullWidth
                      type='text'
                      {...register("name", { required: "this is required" })}
                    />
                    <p>{errors.name?.message}</p>
                    <TextField
                      placeholder='Enter product price'
                      margin='dense'
                      fullWidth
                      type='number'
                      {...register("price", { required: "this is required" })}
                    />
                    <p>{errors.price?.message}</p>
                    <TextField
                      // placeholder='Enter Name confirmPassword'
                      margin='dense'
                      fullWidth
                      type='date'
                      {...register("date", { required: "Please select date" })}

                    />
                    <p>{errors.price?.message}</p>
                    <Button type='submit' fullWidth variant='contained' >Submit</Button>
                  </form>
                  <br />
                </Container>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box fullWidth>
              <Paper elevation={3} sx={{ height: 316, overflow: "hidden", }}>
                <Container sx={{ marginTop: 3 }}>
                  <Typography sx={{ marginBottom: 1.5 }} variant='h5'>Billing</Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>User:- </Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>No of Items:- {noItems.length} </Typography>
                  <Divider></Divider><br />
                  <Typography variant='h6'>Total Price:- {noItems.price}</Typography>
                  <Divider></Divider><br />
                  <Button variant='contained'>Proceed</Button>
                </Container>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>
      <br /> */}
      <div>
        <Box fullWidth>
          <Paper elevation={3} sx={{ height: 350, overflow: "hidden", overflowY: "scroll", }}>
            <Container sx={{ marginTop: 3 }}>
              <Typography sx={{ marginBottom: 1.5 }} variant='h5'>Products</Typography>
              <Divider></Divider>
              <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                {
                  products.map((item, i) => {
                    return (
                      <Box key={i} sx={{ margin: 2, width: 320 }}>
                        <div style={{ backgroundColor: '#0080ff', height: '20px', borderRadius: '4px' }}></div>
                        <Paper elevation={2} fullWidth sx={{ height: 180, borderRadius: 1 }}>
                          <Container>
                            <br />
                            <Typography variant='h5'>Name:- {item.name}</Typography>
                            <Divider></Divider><br />
                            <Typography variant='h5'>Price:- {item.price}</Typography>
                            <Divider></Divider><br />
                            {/* onClick={() => HandleAddItems(item.id)} */}
                            <Button variant='contained'>Add</Button>
                          </Container>
                        </Paper>
                        <div style={{ backgroundColor: '#0080ff', height: '20px', marginBottom: '0px', borderRadius: '4px' }}></div>
                      </Box>
                    );
                  })
                }
              </div>
            </Container>
          </Paper>
        </Box>
      </div>
    </div>
  )
}

export default Products;

