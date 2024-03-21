import "./accountAndList.css"
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
 import { signInData } from "../../redux/slices/signInDataSlice";



 
 //sign-in Page
 function SignInPage(){

   const [state,setState] = useState({
    Email:"",
    Password:""
   })
   const {Email,Password}=state
   const [Data,setSignInData]=useState()
   const navigate=useNavigate()
   const dispatch=useDispatch()

   const inputHandler=(e)=>{
       const {value,name}=e.target
       setState({...state,[name]:value})
   }

  async function ContinueFunc(e){
     const {Email,Password}=state
    e.preventDefault()
   const fecthData=await fetch("http://localhost:5000/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Email, Password
    })
  })
    const resp=await fecthData.json(fecthData)
    console.log(resp)
      if(resp){
        if(resp.msg=="Password didn't match"  || resp.msg=="Invalid Credentials" ){
          alert(resp.msg)
          setState({
            Email:"",
            Password:""
           })
        }else{
          
         alert( resp.data.msg)
         setSignInData(resp.data.checkUser)
         setState({
          Email:"",
          Password:""
         })

        }
         
      }else{
        alert("something went wrong !")
        setState({
          Email:"",
          Password:""
         })
      }

   }

   useEffect(()=>{
       dispatch(signInData(Data))
   },[Data])
   
    return(
        <>
        
        <div className="signInbox">
        <h2 className="signIn-headdingStyle">Already have an account?</h2>
         <p className="signIn-paraStyle">Sign In with your email and password</p>
            <from action="signIn"  >
             <lable className="SigninLabel" >Email</lable><br/>
             <input className="signInboxInput" type="text" name="Email" onChange={inputHandler} value={Email} /><br/>
             <lable className="SigninLabel" >Password</lable><br/>
             <input className="signInboxInput" type="password" name="Password" onChange={inputHandler} value={Password}/><br/>
             <button className="signInboxBtn" onClick={(e)=>ContinueFunc(e)}>Continue</button>

             </from>
           <h5 className="SigninHaddingh5">By continuing, you agree to ShopSwiftly Conditions of Use and Privacy Notice.</h5>
        </div>
        
          <div className="createAccountbtnbox">
          <span className="createAccountbtnbox-text">Create your ShopSwiftly account ?  </span>
             <Link to="/sign-up" className="createAccountbtnbox-link" >Sign up</Link>

          </div>
        </>
    )
 }
 export default SignInPage;