import { Link, Outlet } from "react-router-dom";
import "./Navigation.css"
import { useSelector } from "react-redux"
import { useState } from "react";


function Navigation() {
   const [menueBtn,setMenuBtn]=useState(false)
    const cartProducts = useSelector(state => state.cart)

    return (
        <>
            <div className="navbar">
                <div className="navbar-top">
                         <div>
                         <i class="ri-phone-line"></i> 423-943-2772 / <i class="ri-mail-line"></i> ShopSwiftly@gmail.com
                         </div>
                         
                         <div className="navbar-accountdetails">
                         <Link  className="navbar-top-link" to="/">HOME</Link>
                            
                        <Link className="navbar-top-link" to="/account-list"> MY ACCOUNT</Link>
                    
                            <div>ABOUT US</div>
                            <div>LOGIN</div>
                         </div>
                         
                         
                </div>
                {/* <div className="navbar-center">
                      YOU  ARE  $100.00  AWAY  FROM  DELIVERY
                </div> */}

                <div className="navbar-bottom">

                         {/* <div className="navbar-search">
                            <input  type="search" placeholder="Search shopSwiftly" className="search-input" />
                        </div> */}
                         <i class="ri-menu-2-line menuebtn" onClick={()=>setMenuBtn(true)}></i>
                          {
                            menueBtn && (<>

                              <div className="modal-navbar">
                         <div>
                         <i class="ri-phone-line"></i> 423-943-2772 / <i class="ri-mail-line"></i> ShopSwiftly@gmail.com
                         </div>
                         
                         <div className="navbar-accountdetails">
                         <Link  className="navbar-top-link" to="/">HOME</Link>
                            
                        <Link className="navbar-top-link" to="/account-list"> MY ACCOUNT</Link>
                    
                            <div>ABOUT US</div>
                            <div>LOGIN</div>
                            <button onClick={()=>setMenuBtn(false)}>
                                <i class="ri-close-fill"></i>
                                </button>
                         </div>
                         
                         
               

                              </div>
                            </>)
                          }
                         <div className="navbar-logo" >
                           Shop Swiftly
                        </div>
                        
                       
                        <Link className="navbar-bottom-link" to="/cart">
                            {/* <span className="cartCount">{cartProducts.length}</span> */}
                        <i class="ri-shopping-cart-line" ></i>
                        Cart</Link>

                        
                           
                         </div>
               

            </div>
            <Outlet />
        </>
    )
}

export default Navigation;