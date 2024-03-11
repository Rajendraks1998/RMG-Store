import { AppBar, Button, Toolbar } from '@mui/material'
import axios from 'axios';
import { Grid, TextField } from '@mui/material';
import React, {useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductCard from './ProductCard';
import { Box, Container,  Paper, Typography } from '@mui/material';
import Cart from './Cart';
// import {useSelector } from 'react-redux';
import BillButton from './BillButton';
import { Outlet } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { GetBilling } from '../redux/BillingSlice';





const Products = () => {

  // const user = useSelector((state)=>state.user.user)
  // const userData = useSelector((state)=>state.userdata.userData);

  const [datas, setDatas] = useState([]);
  const [products, setProducts] = useState([]);
  const[adding,setAdding]=useState([])
  const[updated,setUpadated]=useState([]);
  const userGet = sessionStorage.getItem('user');
  

  const dispatch = useDispatch();

  const userObject = JSON.parse(userGet);

  
  

  useEffect(()=>{
    axios.get("http://localhost:8080/api/products")
      .then((resp) => {
        const products = resp.data;
        setProducts(products);
      })
      .catch((err) => console.log(err))
  },[])


  const HandleAddItems = async (id) => {
   await axios.get(`http://localhost:8080/api/products/${id}`)
      .then((resp) => setAdding([...adding,resp.data]) )
      .catch((err) => console.log(err))
   
  }

  const RenderProductCard = products.map((item, i) => {
    return <ProductCard key={i} name={item.name} price={item.price} id={item.id} HandleAddItems={HandleAddItems} date={item.date} />
  })


  const { register, handleSubmit, resetField, formState: { errors } } = useForm();

  const HandleSubmit = async (data) => {
    console.log(sessionStorage.getItem('user'))
    await axios.post("http://localhost:8080/api/products", { name: data.name, price: Number(data.price),quantity: 0,user:userObject})
      .then((resp) => setDatas([...datas, resp.data]))
      .catch((err) => console.log(err))
    await axios.get("http://localhost:8080/api/products")
      .then((resp) => {
        const products = resp.data;
        setProducts(products);
      })
      .catch((err) => console.log(err))
    resetField("name");
    resetField("price");
  }

  const HandleAddingItem =()=>{
  
   axios.get(`http://localhost:8080/api/products`).then((resp)=> {
    const products = resp.data;
    axios.post('http://localhost:8080/api/billings',{products:products, dateTime:'',totalPrice:0}).then((response) => dispatch(GetBilling(response.data))).catch(error => console.error(error));
  })
  
  //  axios.post('http://localhost:8080/api/billings',{products:products, dateTime:'',totalPrice:0}).then((Response) => console.log(Response.data)).catch(error => console.error(error));
  // console.log(products)
  
  }

  
  console.log(updated.filter((item)=>item.quantity > 0 ).map(({name,price,quantity})=>({name,price,quantity})))

  const disabling =()=>{
    if(updated.length = 0 ){
      return true
    }else{
      return false
    }
  }

  return (
    <div>
      <div>
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
                      {...register("name", { required: "Please Enter Product Name" })}
                    />
                    <p style={{color:'red'}}>{errors.name?.message}</p>
                    <TextField
                      placeholder='Enter product price'
                      margin='dense'
                      fullWidth
                      type='number'
                      {...register("price", { required: "Please Enter Product Price" })}
                    />
                    <p style={{color:'red'}}>{errors.price?.message}</p>
                    {/* <TextField
                      // placeholder='Enter Name confirmPassword'
                      margin='dense'
                      fullWidth
                      type='date'
                      {...register("date", { required: "Please select date" })}

                    />
                    <p style={{color:'red'}}>{errors.date?.message}</p> */}
                    <Button type='submit' fullWidth variant='contained'>Submit</Button>
                  </form>
                  <br />
                </Container>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Cart />
          </Grid>

        </Grid>
      </div>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1,mr:2 }}>Products</Typography>
            <BillButton disabling={disabling} HandleAddingItem={HandleAddingItem} adding={adding}/>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Box fullWidth>
          <Paper elevation={3} sx={{ height: 350, overflow: "hidden", overflowY: "scroll", }}>
            <Container sx={{ marginTop: 3 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                {RenderProductCard}
              </div>
            </Container>
          </Paper>
        </Box>
      </div>
      
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Products;

