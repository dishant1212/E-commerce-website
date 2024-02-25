import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData=createAsyncThunk("electronics/get",async ()=>{
        const fecthElectronics=await fetch("http://localhost:5000/add-electronics")
        const resp=await fecthElectronics.json()
        return resp

})

const initialState={
    data:[],
    isLoading:false,
    isError:false

}

const electronicsSlice=createSlice({
    name:"electronics",
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

export default electronicsSlice.reducer;