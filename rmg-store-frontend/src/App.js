import Header from "./Components/Header";
// import { BrowserRouter,Routes,Route } from "react-router-dom";

import { useState } from "react";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

function App() {
  const [open, setOpen] = useState(false);
  const [Headers,setHeaders]=useState(true);

  const handleClickOpen = () => {
    setOpen(true);
    setHeaders(false);
  };
  const handleClose = () => {
    setOpen(false);
    setHeaders(true);
  };

  const [up,setUp]=useState(false);
  const [sin,setSin]=useState(false);
  
  const HandleClickIn =()=>{
    setOpen(true);
    
  }
  const HandleClickUp =()=>{
    setUp(true);
  }

  
  return (
    <div className="App">
    {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}></Route>
        </Routes>
    </BrowserRouter> */}
    {
      Headers && <Header HandleClickIn={HandleClickIn} HandleClickUp={HandleClickUp}/>
    }
    <div>
      {
       up && <SignUp open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
      }
      {
        sin && <SignIn></SignIn>
      }
    </div>
    </div>
  );
}

export default App;
