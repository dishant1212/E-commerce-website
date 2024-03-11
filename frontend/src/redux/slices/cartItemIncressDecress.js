import {createSlice} from "@reduxjs/toolkit"

const initialState=1

const CartItemIncressDecress=createSlice({
    name:"IncressDecress",
    initialState,
    reducers:{
        itemIncress:(state,action)=>{
            if(state<4){
                
                return state+1
            }
        },
        itemDecress:(state,action)=>{
         if(state>1){
            
              return state-1
           }

        }
    }

})

export const {itemIncress,itemDecress }=CartItemIncressDecress.actions

export  default CartItemIncressDecress.reducer

