import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const AddKidsCloth=createAsyncThunk("kidsCloths/add",async (user)=>{
    const {imageUrl,name,price}=user
     const addKidsClothes=await fetch("http://localhost:5000/cloth-kids",{
        method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body:JSON.stringify({imageUrl,name,price})
   })
     const resp=await addKidsClothes.json()
    return resp
})
export const fetchData=createAsyncThunk("KidsClothes/get",async ()=>{
     const fetchKidsClothes=await fetch("http://localhost:5000/cloth-kids")
     const resp=await fetchKidsClothes.json()
     return resp
})

const initialState={
    data:[],
    isLoading:false,
    isError:false,
    isSuccess:null
}

const KidsClothSlice=createSlice({
    name:"KidsCloth",
    initialState,
    extraReducers:(builder)=>{
      builder.addCase(AddKidsCloth.pending,(state,action)=>{
         state.isLoading=true
         
      })
      builder.addCase(AddKidsCloth.fulfilled,(state,action)=>{
        state.isLoading=false
        state.data=[]
        state.isSuccess=action.payload
      })
      builder.addCase(AddKidsCloth.rejected,(state,action)=>{

        state.isError=true
      })
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


export default KidsClothSlice.reducer
