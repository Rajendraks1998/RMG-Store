import { Box, Button, ButtonGroup, Container, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductCard = ({ name, price,HandleAddItems,id , date }) => {
    
    const [btn, setBtn] = useState(true);
    const [btn1, setBtn1] = useState(false);
    const [btnvalue, setBtnValue] = useState(0);

    const userGet = sessionStorage.getItem('user');

  const userObject = JSON.parse(userGet);

    useEffect(()=>{
        axios.put(`http://localhost:8080/api/products/${id}`,{id:id,name:name,price:price,quantity:btnvalue,user:userObject})
    })



    const HandleIncrement = () => {
        setBtnValue(btnvalue => btnvalue + 1);
    }

    const HandleDecrement = () => {
        setBtnValue(btnvalue => btnvalue - 1);
        if (btnvalue <= 1) {
            setBtn(true)
            setBtn1(false)
            setBtnValue(0);
        }
    }

    const HandleButton = (id) => {
        setBtn(false)
        setBtn1(true)
        HandleAddItems(id);
    }
    return (
        <div>


            <Box sx={{ margin: 2, width: 320 }}>
                <div style={{ backgroundColor: '#0080ff', height: '20px', borderRadius: '4px' }}></div>
                <Paper elevation={2} fullWidth sx={{ height: 180, borderRadius: 1 }}>
                    <Container>
                        <br />
                        <Typography variant='h5'>Name:- {name}</Typography>
                        <Divider></Divider><br />
                        <Typography variant='h5'>Price:- {price}</Typography>
                        <Divider></Divider><br />
                        {/* onClick={() => HandleAddItems(item.id)} */}
                        {
                            btn && <Button variant='contained' onClick={() => HandleButton(id)}>Add</Button>
                        }
                        {
                            btn1 && <ButtonGroup>
                                <Button variant='outlined' onClick={()=>HandleDecrement(id)}>-</Button>
                                <Button variant='outlined'>{btnvalue}</Button>
                                <Button variant='outlined' onClick={()=>HandleIncrement(id)}>+</Button>
                            </ButtonGroup>
                        }
                    </Container>
                </Paper>
                <div style={{ backgroundColor: '#0080ff', height: '20px', marginBottom: '0px', borderRadius: '4px' }}></div>
            </Box>

        </div>
    )
}

export default ProductCard;
