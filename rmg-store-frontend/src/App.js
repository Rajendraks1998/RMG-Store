// import Header from "./Components/Header";
// // import { BrowserRouter,Routes,Route } from "react-router-dom";

// import { useState } from "react";
import { Button } from "@mui/material";
import SignUp from "./Components/SignUp";
import { useState } from "react";
// import SignIn from "./Components/SignIn";

function App() {
  // const [open, setOpen] = useState(false);
  // const [Headers,setHeaders]=useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setHeaders(false);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   setHeaders(true);
  // };

  // const [up,setUp]=useState(false);
  // const [sin,setSin]=useState(false);
  
  // const HandleClickIn =()=>{
  //   setOpen(true);
    
  // }
  // const HandleClickUp =()=>{
  //   setUp(true);
  // }
  const[open,setOpen]=useState(false);
  const[data,setData]=useState([]);

    const handleClickOpen =()=>{
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    console.log(data)
  
  return (

    <div className="App">
      <Button variant="contained" onClick={handleClickOpen}>Open sign up</Button>
      {data.map((item,i)=>{
        return(
          <div key={i}>
            <h1>{item.map((item)=>{
              return (
                <div>
                  <h3>{item.id}</h3>
                <h3>{item.name}</h3>
                </div>
                
              )
            })}</h1>
          </div>
        )
      })}
      <SignUp open={open} handleClose={handleClose} data={data} setData={setData} setOpen={setOpen}/>
    {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}></Route>
        </Routes>
    </BrowserRouter> */}
    {/* {
      Headers && <Header HandleClickIn={HandleClickIn} HandleClickUp={HandleClickUp}/>
    }
    <div>
      {
       up && <SignUp open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
      }
      {
        sin && <SignIn></SignIn>
      }
    </div> */}
    </div>
  );
}

export default App;
