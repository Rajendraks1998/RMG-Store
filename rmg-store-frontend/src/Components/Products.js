import { AppBar, Badge, Button, Toolbar } from '@mui/material'
import axios from 'axios';
import { Grid, TextField } from '@mui/material';
import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductCard from './ProductCard';
import { Box, Container,  Paper, Typography } from '@mui/material';
import Cart from './Cart';
import { useDispatch , useSelector } from 'react-redux';
import { GetData } from '../redux/UserSlice';



const Products = () => {

  const user = useSelector((state)=>state.user.user)
  const userData = useSelector((state)=>state.userdata.userData);

  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const [products, setProducts] = useState([]);
  const [noItems, setNoItems] = useState([]);


  const HandleAddItems = async (id) => {
    const itemss = await axios.get(`http://localhost:8000/products/${id}`)
      .then((resp) => dispatch(GetData(resp.data)))
      .catch((err) => console.log(err))
    setNoItems([...noItems, itemss.data])
  }

  const RenderProductCard = products.map((item, i) => {
    return <ProductCard key={i} name={item.name} price={item.price} id={item.id} HandleAddItems={HandleAddItems} date={item.date} />
  })


  const { register, handleSubmit, resetField, formState: { errors } } = useForm();

  const HandleSubmit = async (data) => {
    await axios.post("http://localhost:8080/product/create", { name: data.name, price: Number(data.price), user: userData[0]})
      .then((resp) => setDatas([...datas, resp.data]))
      .catch((err) => console.log(err))
    await axios.get("http://localhost:8080/product/findall")
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err))
    resetField("name");
    resetField("price");
    console.log(typeof(userData[0].id))
  }

  let sum = 0;

  products.map((item) => console.log(sum = sum + item.price))

  console.log(noItems)


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
                    {/* <TextField
                      // placeholder='Enter Name confirmPassword'
                      margin='dense'
                      fullWidth
                      type='date'
                      {...register("date", { required: "Please select date" })}

                    />
                    <p>{errors.price?.message}</p> */}
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
          <Badge badgeContent={user.length} color='secondary' >
            <Button color='inherit' variant='outlined' size='large' onClick={()=>alert("hi")}>
              Generate Bill
            </Button>
          </Badge>
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

    </div>
  )
}

export default Products;

