import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("discoverFashionProducts/get",async ()=>{
      const fetchDiscoverFashionProducts=await fetch("http://localhost:5000/discoverFashionProducts")
      const resp=fetchDiscoverFashionProducts.json()
      return resp
})

const initialState={
      data:[],
      isLoading:false,
      isError:false
}

const discoverFashionProductsSlice=createSlice({
      name:"discoverFashion",
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

export default discoverFashionProductsSlice.reducer