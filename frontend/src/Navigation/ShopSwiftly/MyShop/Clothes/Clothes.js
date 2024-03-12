import "../my-shop-style/myShop.css"
import "./clothes.css"
import { Outlet,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Images from "./images/images";




function Clothes(){


   
   const [currentImageIndex,setCurrentImageIndex]=useState(0)
   
   useEffect(()=>{
        const interval=setInterval(() => {
           setCurrentImageIndex(preIndex=>(preIndex+1)%Images.length)
        },5000);
        return ()=>clearInterval(interval)
   },[Images.length])


    return(
        <>
        
        <div className="clothes-navbar"  style={{
          backgroundImage:`url(${Images[currentImageIndex]})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          width:"100%",
          height:"100vh"
        }}>
          <div className="clothes-navbar-boxOne"  >
            <div className="clothes-catageries">
               <Link to="/clothes/men-clothes" className="clothes-navbar-link">MEN</Link>
            </div>
            <div className="clothes-catageries">
                <Link to="/clothes/women-clothes"  className="clothes-navbar-link">WOMEN</Link>
            </div>
            <div className="clothes-catageries">
                <Link  to="/clothes/kids-clothes" className="clothes-navbar-link">KIDS</Link>
            </div>
          </div >
          <div className="clothes-navbar-boxTwo">
            
          </div>
        </div>
        <Outlet/>
        
      </>
    )
}
export default Clothes;