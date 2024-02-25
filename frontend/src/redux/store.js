
import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./slices/clothesSlice";
import electronicsSlice from "./slices/electronicsSlice";


const store=configureStore({
     reducer:{
        clothes:clothesSlice,
        electronics:electronicsSlice
     }
})

export default store;

