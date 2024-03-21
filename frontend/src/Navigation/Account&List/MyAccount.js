import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux';


const MyAccountPage = () => {
  // Simulated user data
  const [accInfo,setAccInfo]=useState(false)
  const accountData=useSelector((state)=>state.SignInData.data)
  console.log("accountData",accountData)




  return (
    <div className='account-container'>
        <div className='account-container-top'>
         <h1>Hello, {accountData ? (<> {accountData.YourName} &#128578;</>):(<span> Login First &#128577;</span>)}</h1>
         {/* <div className='account-socialmedia'>
         <i class="ri-instagram-fill"></i>
         <i class="ri-twitter-fill"></i>
        </div> */}
        </div>
        <div className='account-container-bottom'>
        <div className='account-sidebar'>
      
      <div className='account-list' onClick={()=>setAccInfo(true)}>ACCOUNT INFORMATION</div>
      
      <div className='account-list'>MY ORDERS</div>
      <div className='account-list'>ADDRESS BOOK</div>
      <div className='account-list'>MY WACHLIST</div>
      <div className='account-list'>CHANGE PASSWORD</div>
      {
        accountData ? (<><div className='account-list'>LOGOUT</div></>) :(<><div className='account-list'><Link to="/login" className="account-list-login">LOGIN</Link></div></>)
      }


         </div>
         <div className='account-info'>
{
    accInfo  ? (
    <div className='accInfo-accountDetails'>
     <div  className='accountDetails-list accountDetails-listtop'>
        <h2>ACCOUNT INFORMATION</h2>
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
