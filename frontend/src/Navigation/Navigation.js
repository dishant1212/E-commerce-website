import { Link, Outlet } from "react-router-dom";
import "./Navigation.css"
import { useSelector } from "react-redux"
import { useState } from "react";


function Navigation() {

    const cartProducts = useSelector(state => state.cart)

    return (
        <>
            <div className="navbar">
                <div className="navbar-top">
                    <div>
                   <span><i class="ri-phone-fill"></i>423-943-2772 /</span>  
                   <span><i class="ri-mail-fill"></i> ShopSwiftly@gmail.com</span>
                   
                    </div>

                    <div className="navbar-accountdetails">
                        <Link className="navbar-top-link" to="/"><i class="ri-home-fill"></i>  HOME</Link>

                        <Link className="navbar-top-link" to="/account"><i class="ri-account-circle-fill"></i> MY ACCOUNT</Link>

                        <Link to="/aboutUs" className="navbar-top-link"><i class="ri-file-info-fill"></i> ABOUT US</Link>
                        <Link className="navbar-top-link" to="/login"><i class="ri-login-box-fill"></i> LOGIN</Link>
                    </div>


                </div>
                {/* <div className="navbar-center">
                      YOU  ARE  $100.00  AWAY  FROM  DELIVERY
                </div> */}

                <div className="navbar-bottom">

                    {/* <div className="navbar-search">
                            <input  type="search" placeholder="Search shopSwiftly" className="search-input" />
                        </div> */}

                    <div className="navbar-logo" >
                        {/* <img src="" height="90" width="120"/> */}
                        <Link className="navbar-logo-link" to="/"><i>ShopSwiftly</i></Link>
                    </div>


                    <Link className="navbar-bottom-link" to="/cart">
                        <span className="cartCount">{cartProducts.length}</span>
                        <i class="ri-shopping-cart-line cartIcon" ></i>
                        Cart</Link>



                </div>


            </div>
            <Outlet />
        </>
    )
}

export default Navigation;