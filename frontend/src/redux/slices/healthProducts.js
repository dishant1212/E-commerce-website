import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("helthProducts/get",async ()=>{
        const fecthHealthProducts=await fetch("http://localhost:5000/healthProducts")
        const resp=await fecthHealthProducts.json()
        return resp

})

const initialState={
    data:[],
    isLoading:false,
    isError:false

}

const healthProductsSlice=createSlice({
    name:"healthProducts",
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

export default healthProductsSlice.reducer;