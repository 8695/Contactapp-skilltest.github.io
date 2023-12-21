import {configureStore} from "@reduxjs/toolkit";
import contactSlice from "./redux/slice/contactSlice";

export const store=configureStore({
    reducer:{
       contactSlice,
    }
});