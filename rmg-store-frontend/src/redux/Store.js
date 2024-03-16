import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
// import ButtonSlice from "./ButtonSlice";
// import UserDataSlice from "./UserDataSlice";
import BillingSlice from "./BillingSlice";
import EditDataSlice from "./EditDataSlice";

const Store = configureStore({
  reducer:{
    user:UserSlice,
    // button:ButtonSlice
    // userdata:UserDataSlice,
    billingdata:BillingSlice,
    editdata:EditDataSlice
  }
}) 

export default Store;