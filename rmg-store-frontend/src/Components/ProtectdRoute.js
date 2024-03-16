import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Auth =()=>{
    const resp = sessionStorage.getItem('user');
    if(resp != null){
        return true
    }else{
        return false
    }
    
    
}

const ProtectdRoute = () => {
    const auth = Auth();
  return (
    <div>
      {auth?<Outlet/>:<Navigate to="/"/>}
    </div>
  )
}

export default ProtectdRoute;
