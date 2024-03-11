import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export  const fetchData=createAsyncThunk("fitnessProduct/get", async ()=>{
      const clothes=await fetch("http://localhost:5000/fitnessProducts")
      const resp=clothes.json()
      return resp
})


const initialState={
   data:[],
   isLoading:false,
   isError:false
}

const fitnessProductsSlice=createSlice({
   name:"fitnessProducts",
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

export default fitnessProductsSlice.reducer

