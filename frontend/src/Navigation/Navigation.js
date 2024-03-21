import { Link, Outlet } from "react-router-dom";
import "./Navigation.css"
import { useSelector } from "react-redux"
import { useState } from "react";


function Navigation() {



    const loginData = useSelector((state) => state.SignInData.data)
    const cartProducts = useSelector(state => state.cart)

    return (
        <>
            <div className="navbar">
              <div className="navbar-top"> 
                <div className="social-media-details">
                    <span><i class="ri-phone-line"></i> 423-943-2772 </span>
                    <span><i class="ri-mail-line"></i> shopswiftly@gmail.com</span>

                </div>

                <div className="navbar-accountdetails">
                    <Link className="navbar-top-link" to="/"><i class="ri-home-line"></i>  HOME</Link>

                    <Link className="navbar-top-link" to="/account"><i class="ri-account-circle-line"></i> MY ACCOUNT</Link>

                    <Link to="/aboutUs" className="navbar-top-link"><i class="ri-file-info-line"></i> ABOUT US</Link>

                    {
                        loginData ? (
                        <>
                            <Link className="navbar-top-link"><i class="ri-login-box-line"></i> LOGOUT</Link>
                        </>
                            )
                            :
                            (

                            <>
                                <Link className="navbar-top-link" to="/login"><i class="ri-login-box-line"></i> LOGIN</Link>
                            </>
                            )
                    }

                </div>
                   
            </div>

            <div class="navbar-bottom">
        
          <div className="name-cart-navbar">
            {/* <div className="logo"></div> */}
              <Link className="logo-link" to="/"><span className="shopStyle">SHOP</span><span className="swiftlyStyle"> SWIFTLY</span> </Link>
           

            <Link className="cart-link" to="/cart">
              {/* <span className="cartCount">{cartProducts.length}</span> */}
              <i class="ri-shopping-cart-line cartIcon" ></i>
              <span className="cartCount">{cartProducts.length}</span>Cart </Link>
              </div>

        

          
        </div>
            </div>

            <Outlet />
        </>
    )
}

export default Navigation;