import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("petcare/get",async ()=>{
      const fetchPetCareProducts=await fetch("http://localhost:5000/petCareProducts")
      const resp=fetchPetCareProducts.json()
      return resp
})

const initialState={
      data:[],
      isLoading:false,
      isError:false
}

const petCareProductsSlice=createSlice({
      name:"petCareProduct",
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

export default petCareProductsSlice.reducer