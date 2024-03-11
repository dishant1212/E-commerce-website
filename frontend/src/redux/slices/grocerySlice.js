import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("GroceryProducts/get",async ()=>{
        const fecthGroceryProducts=await fetch("http://localhost:5000/GroceryProducts")
        const resp=await fecthGroceryProducts.json()
        return resp

})

const initialState={
    data:[],
    isLoading:false,
    isError:false

}

const groceryProductsSlice=createSlice({
    name:"groceryProducts",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
           state.isLoading=true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
               state.isLoading=false
               state.data=action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
             state.isError=true
        })
    }
})

export default groceryProductsSlice.reducer;