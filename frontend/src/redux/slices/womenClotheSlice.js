import {createSlice,createAsyncThunk,} from "@reduxjs/toolkit"

export const postWomenClothes=createAsyncThunk("womenClothes/add",async (values)=>{
    const {imageUrl,name,price}=values
       const fetchdata=await  fetch("http://localhost:5000/cloth-women",{
                 method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({imageUrl,name,price})
            })
    const resp=await fetchdata.json()
    return resp
})

export const fetchData=createAsyncThunk("womenClothes/get",async ()=>{
    const fetchWomenClothes=await fetch("http://localhost:5000/cloth-women")
    const resp=fetchWomenClothes.json()
    return resp
})

const initialState={
    data:[],
    isLoadding:false,
    isError:false,
    isSuccess:null
}

const WomenClothesSlice=createSlice({
    name:"womenclothes",
    initialState,
    extraReducers:(builder)=>{
        //AddWomenClothes case
              builder.addCase(postWomenClothes.pending,(state,action)=>{
                   state.isLoadding=true
              })
              builder.addCase(postWomenClothes.fulfilled,(state,action)=>{
                state.isLoadding=false
                state.data=[]
                state.isSuccess=action.payload
              })
              builder.addCase(postWomenClothes.rejected,(state,action)=>{
                state.isError=false
              })
        //getWomenClothes case
            builder.addCase(fetchData.pending,(state,action)=>{
                state.isLoadding=true
           })
           builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoadding=false
             state.data=action.payload
           })
           builder.addCase(fetchData.rejected,(state,action)=>{
             state.isError=false
           })
    }
})

export default WomenClothesSlice.reducer