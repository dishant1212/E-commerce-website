import {Link,useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { ImMenu3 } from "react-icons/im";
import { IoClose } from "react-icons/io5";



const MyAccountPage = () => {
  
  const [show,setShow]=useState(false)
  const [accInfo,setAccInfo]=useState(false)
  const token=localStorage.getItem("ShopSwiftlyToken")
  const accountData=useSelector((state)=>state.SignInData.data)
  console.log(accountData)

  const navigate=useNavigate()

  
  const logOutFunc=()=>{
    localStorage.removeItem("ShopSwiftlyToken")
     navigate("/")
}
    


  return (
    <div className='account-container'>
        <div className='account-container-top'>
          <span className="flex md:hidden"><ImMenu3 onClick={()=>setShow(true)} /></span>
          <span>Hello, {token ? (<> {accountData.YourName} &#128578;</>):(<span> Login First &#128577;</span>)}</span>
        
        </div>
        <div className='account-container-bottom'>
        <div className= {!show ? "account-sidebar":"account-mobile-sidebar"}>
      
      <div className='account-list' onClick={()=>setAccInfo(true)}>ACCOUNT INFORMATION</div>
      
      <div className='account-list'>MY ORDERS</div>
      <div className='account-list'>ADDRESS BOOK</div>
      <div className='account-list'>MY WACHLIST</div>
      <div className='account-list'>CHANGE PASSWORD</div>
      {
        token ? (<><div className='account-list' onClick={logOutFunc}>LOGOUT</div></>) :(<><div className='account-list'><Link to="/login" className="account-list">LOGIN</Link></div></>)
      }

       <div className="flex justify-center items-center mt-10" >
       <IoClose  className={show ? "flex text-6xl text-black":"hidden"} onClick={()=>setShow(false)}/>
       </div>
         </div>
         <div className='account-info'>
{
    accInfo  ? (
    <div className='accInfo-accountDetails'>
     <div  className='accountDetails-list accountDetails-listtop'>
        <h2 className="accountDetails-list-headding">ACCOUNT INFORMATION</h2>
     </div>
     <div className='accountDetails-list'>
     <h3>YOUR NAME : </h3> {accountData ? accountData.YourName :""}
     </div>
     <div className='accountDetails-list'>
       <h3>EMAIL ADDRESS :</h3>  {accountData ?accountData.Email:"" }
     </div>
     <div className='accountDetails-list'>
       <h3>MOBILE NUMBER :</h3> {accountData ? accountData.MobileNumber:""}
     </div>
    </div>
    ):""
}
         </div>
    </div>
    </div>
    
  );
};

export default MyAccountPage;
