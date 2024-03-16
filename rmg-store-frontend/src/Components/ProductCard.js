import { Box, Button, ButtonGroup, Container, Divider, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ name, price,HandleAddItems,id }) => {
    
    const [btn, setBtn] = useState(true);
    const [btn1, setBtn1] = useState(false);
    const [btnvalue, setBtnValue] = useState(0);
    const [color,setColor]=useState("white");

    

    let history = useNavigate();
    

    const userGet = sessionStorage.getItem('user');

  const userObject = JSON.parse(userGet);

    useEffect(()=>{
        axios.put(`http://localhost:8080/api/products/${id}`,{id:id,name:name,price:price,quantity:btnvalue,user:userObject})
    })

    const HandleMouseIn =()=>{
        setColor("red")
    }

    const HandleMouseOut =()=>{
        setColor("white")
    }


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

    const HandleDelete =async(id)=>{
       await axios.delete(`http://localhost:8080/api/products/${id}`).then((resp)=>console.log(resp.data)).catch((err)=>console.log(err))
        history(0);
    }

    
    
    return (
        <div>


            <Box sx={{ margin: 2, width: 320 }}>
                <div style={{ backgroundColor: '#0080ff', height: '52px', borderRadius: '3px' }}>
                <IconButton
                    sx={{ marginLeft:28,marginTop:1 }}
                    onClick={()=>HandleDelete(id)}
                    onMouseOver={HandleMouseIn}
                    onMouseOut={HandleMouseOut}
                >
                    <Tooltip title="Delete">
                        <Delete style={{color:`${color}`}} />
                    </Tooltip>
                </IconButton>
                <IconButton
                    sx={{ marginLeft:1,marginTop:1 }}
                    onClick={()=>alert("Hi")}
                    // onMouseOver={HandleMouseIn}
                    // onMouseOut={HandleMouseOut}
                >
                    <Tooltip title="Edit">
                        <Edit style={{color:`white`}} />
                    </Tooltip>
                </IconButton>
                </div>
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
                {/* <div style={{ backgroundColor: '#0080ff', height: '20px', marginBottom: '0px', borderRadius: '3px' }}></div> */}
            </Box>

        </div>
    )
}

export default ProductCard;
