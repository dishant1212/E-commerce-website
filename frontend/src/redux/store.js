
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice"
import clothesSlice from "./slices/clothesSlice";
import electronicsSlice from "./slices/electronicsSlice";
import healthProductsSlice from "./slices/healthProducts";
import beautypicksSlice from "./slices/beautyPicksSlice";
import furnitureSlice from "./slices/furnitureSlice";
import groceryProductsSlice from "./slices/grocerySlice";
import petCareProductsSlice from  "./slices/petCareSlice";
import discoverFashionProductsSlice from "./slices/discoverFashionslice";
import fitnessProductsSlice from "./slices/fitnessSlice";
import SignInDataSlice from "./slices/signInDataSlice";
import CartItemIncressDecress from "./slices/cartItemIncressDecress";
import menClothesSlice from "./slices/menClothesSlice";
import  WomenClothesSlice from './slices/womenClotheSlice'


const store=configureStore({
     reducer:{
        cart:cartSlice,
        clothes:clothesSlice,
        electronics:electronicsSlice,
        healthProducts:healthProductsSlice,
        beautyPicksProducts:beautypicksSlice,
        furniture:furnitureSlice,
        groceryProducts:groceryProductsSlice,
        petCareProducts:petCareProductsSlice,
        discoverFashionProducts:discoverFashionProductsSlice,
        fitnessProducts:fitnessProductsSlice,
        SignInData:SignInDataSlice,
        CartItemIncressDecressCount:CartItemIncressDecress,
        MenClothes:menClothesSlice,
        WomenClothes: WomenClothesSlice
     }
})

export default store;

