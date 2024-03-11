import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("beautyPicks/get",async ()=>{
      const fetchBeautyPicks=await fetch("http://localhost:5000/beautyPickProducts")
      const resp=fetchBeautyPicks.json()
      return resp
})

const initialState={
      data:[],
      isLoading:false,
      isError:false
}

const beautypicksSlice=createSlice({
      name:"beautyPicks",
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

export default beautypicksSlice.reducer