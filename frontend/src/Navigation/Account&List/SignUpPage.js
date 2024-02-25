import { useState } from "react";
import "./accountAndList.css"
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function SignUpPage() {
  const [state, setState] = useState({
    YourName: "",
    MobileNumber: "",
    Email: "",
    Password: "",
    ReEnterPassword: ""


  })
  const navigate = useNavigate()

  const inputHandler = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }


  const submitFunc = async (e) => {
    e.preventDefault();
    const { YourName, MobileNumber, Email, Password, ReEnterPassword } = state;

    if (!YourName || !MobileNumber || !Email || !Password || !ReEnterPassword) {
      alert("All fields are required");
      return;
    }

    if (Password !== ReEnterPassword) {
      alert("Passwords do not match");
      return;
    }
    const fetchData = await fetch("http://localhost:5000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        YourName, MobileNumber, Email, Password, ReEnterPassword
      })
    })
    const resp = await fetchData.json();

    if (resp) {
      
      alert(resp.msg);
      setState({
        YourName: "",
        MobileNumber: "",
        Email: "",
        Password: "",
        ReEnterPassword: ""
      });
    } else {
      alert(resp.msg);
      setState({
        YourName: "",
        MobileNumber: "",
        Email: "",
        Password: "",
        ReEnterPassword: ""
      });
    }



  };

  const backToLoginHandler=() => {
    navigate("/account-list")
  }

  return (
    <>
      

        <div className="createAccountbox">
       
          <h4 className="createAccountboxHadding">Create Account </h4>
          <form onSubmit={submitFunc}>
            <lable className="createAccountbox2Label" >Your name</lable><br />
            <input className="createAccountboxInput" type="text" placeholder="First and last name" name="YourName" value={state.YourName} onChange={(e) => inputHandler(e)} required /><br /><br />
            <lable className="createAccountbox2Label">Mobile number</lable><br />
            <input className="createAccountboxInput" type="text" placeholder="Mobile number" name="MobileNumber" value={state.MobileNumber} onChange={(e) => inputHandler(e)} required /><br /><br />
            <lable className="createAccountbox2Label">Email</lable><br />
            <input className="createAccountboxInput" type="text" placeholder="Email" name="Email" value={state.Email} onChange={(e) => inputHandler(e)} required /><br /><br />
            <lable className="createAccountbox2Label">Password</lable><br />
            <input className="createAccountboxInput" type="password" placeholder="Password" name="Password" value={state.Password} onChange={(e) => inputHandler(e)} required /><br /><br />
            <lable className="createAccountbox2Label">Re-EnterPassword</lable><br />
            <input className="createAccountboxInput" type="password" placeholder="Password" name="ReEnterPassword" value={state.ReEnterPassword} onChange={(e) => inputHandler(e)} required /><br /><br />

            {/* <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p> */}

            <button className="createAccountbox2Btn" type="submit">Submit</button>
          </form>
          <p className="createAccountboxPra" >Already have an account? <button className="createAccountboxPraBtn" onClick={backToLoginHandler}>Sign in</button></p>



        </div>
  
    </>
  )
}
export default SignUpPage;