import "./accountAndList.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


 
 //sign-in Page
 function SignInPage(){
   const [state,setState] = useState({
    Email:"",
    Password:""
   })

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
    if(resp){
      console.log(resp)
      alert(resp.data.msg)
      setState({
        Email:"",
        Password:""
       })

    }else{
      // console.log(resp)
       alert(resp.msg)
       setState({
        Email:"",
        Password:""
       })
    } 
    setState({
    Email:"",
    Password:""
   })
   }
   
    return(
        <>
        
        <div className="signInbox">
        <h2 className="signIn-headdingStyle">Already have an account?</h2>
         <p className="signIn-paraStyle">Sign In with your email and password</p>
            <from action="signIn"  >
             <lable className="SigninLabel" >Email</lable><br/>
             <input className="signInboxInput" type="text" name="Email" onChange={inputHandler} /><br/>
             <lable className="SigninLabel" >Password</lable><br/>
             <input className="signInboxInput" type="password" name="Password" onChange={inputHandler}/><br/>
             <button className="signInboxBtn" onClick={(e)=>ContinueFunc(e)}>Continue</button>

             </from>
           <h5 className="SigninHaddingh5">By continuing, you agree to ShopSwiftly Conditions of Use and Privacy Notice.</h5>
        </div>
        
          <div className="createAccountbtnbox">
      <Link to="/sign-up">Create your ShopSwiftly account</Link>

          </div>
        </>
    )
 }
 export default SignInPage;