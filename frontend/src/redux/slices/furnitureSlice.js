import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("furniture/get",async ()=>{
      const fetchFurniture=await fetch("http://localhost:5000/furniture")
      const response=await fetchFurniture.json()
      return response
})

const initialState={
    data:[],
    isLoading:false,
    isError:false
}

const    furnitureSlice=createSlice({
    name:"Furniture",
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

export default furnitureSlice.reducer;