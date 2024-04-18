import { Link, Outlet,useNavigate } from "react-router-dom";
import "./Navigation.css"
import { useSelector } from "react-redux"
import { useState } from "react";


function Navigation() {

   const [show,setShow]=useState(false)
   const token=localStorage.getItem("ShopSwiftlyToken")

    const loginData = useSelector((state) => state.SignInData.data)
    const cartProducts = useSelector(state => state.cart)
    const navigate=useNavigate()

    const logOutFunc=()=>{
        localStorage.removeItem("ShopSwiftlyToken")
         navigate("/")
    }

    return (
        <>

            <div className="navbar-wrapper">
                <div className="navbar" >
                    <div className="box1">
                        
                        <Link className="link" to="/"><span style={{fontSize:"2.3rem",color:"rgb(236, 111, 66)",fontFamily:"Courier, monospace"}}>Shop</span><span style={{fontSize:"2.3rem",color:"rgb(54, 53, 53)",fontFamily:"Courier, monospace"}}>Swiftly</span> </Link>
                    </div>



                    <div className={show ? "sidebar":"topbar"}>
                        <div className={!show ?"closeIconHide" :"closeIconshow"}>
                        <i class="ri-close-fill" onClick={()=>setShow(false)}></i>
                        </div>

                        <div style={show ? {fontSize:"1.5rem",margin:"10px"}:{fontSize:"1rem"}}>
                            <Link className="link" to="/"><i class="ri-home-line"></i>  HOME</Link>
                        </div>
                        <div style={show ? {fontSize:"1.5rem",margin:"10px"}:{fontSize:"1rem"}}>
                            <Link className="link" to="/account"><i class="ri-account-circle-line"></i> MY ACCOUNT</Link>
                        </div>
                        <div style={show ? {fontSize:"1.5rem",margin:"10px"}:{fontSize:"1rem"}}>
                            <Link to="/aboutUs" className="link"><i class="ri-file-info-line"></i> ABOUT US</Link>
                        </div>
                        <div style={show ? {fontSize:"1.5rem",margin:"10px"}:{fontSize:"1rem"}}>
                            <Link className="link" to="/cart">
                                <i class="ri-shopping-cart-line cartIcon" >CART</i>
                               
                            </Link>
                        </div>
                        <div style={{height:"40px",display:"flex",fontWeight:"600",borderRadius:"20px",justifyContent:"center",alignItems:"center", width:"130px",backgroundColor:"rgb(236, 111, 66)"}}>
                            {
                           token ?   <Link className="link" to="/login" style={{color:"white"}} onClick={logOutFunc} ><i class="ri-login-box-line"/>LogOut</Link>:
                            <Link className="link" to="/login" style={{color:"white"}}><i class="ri-login-box-line"></i> LogIn</Link>
                          
                            }
                       
      
                        </div>
                       

                    </div>
                     
                     
                        <div className="menuIcon">
                        <i class="ri-menu-line" onClick={()=>setShow(true)}></i>
                        </div>
                        
                       

                </div>
            </div>
            <Outlet />

        </>
    )
}

export default Navigation;