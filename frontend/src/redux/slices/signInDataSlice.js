
import {createSlice} from "@reduxjs/toolkit"

const initialState={
    data:null
}

const SignInDataSlice=createSlice({
    name:"signInData",
    initialState,
    reducers:{
      signInData:(state,action)=>{
        
        state.data=action.payload
    }
}
})
export const {signInData}=SignInDataSlice.actions
export default SignInDataSlice.reducer

