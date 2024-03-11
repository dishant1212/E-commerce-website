import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData=createAsyncThunk("MenClothes/get",async ()=>{
    const fecthMenClothes=await fetch("http://localhost:5000/cloth-men")
    const resp=await fecthMenClothes.json()
    return resp

})


const initialState={
    data:[],
    isLoading:false,
    isError:false
}

const menClothesSlice=createSlice({
    name:"MenCloth",
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

export default menClothesSlice.reducer 