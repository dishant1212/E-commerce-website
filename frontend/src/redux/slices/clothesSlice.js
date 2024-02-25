import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export  const fetchData=createAsyncThunk("cloth/get", async ()=>{
      const clothes=await fetch("http://localhost:5000/add-clothes")
      const resp=clothes.json()
      return resp
})


const initialState={
   data:[],
   isLoading:false,
   isError:false
}

const clothesSlice=createSlice({
   name:"cloth",
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

export default clothesSlice.reducer

