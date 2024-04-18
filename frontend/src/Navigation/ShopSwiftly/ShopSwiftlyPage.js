import { Link, Outlet } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import "./ShopSwiftyPage.css";
import "../Navigation.css"
import Footer from "../Footer/footer";



function ShopSwiftlyPage() {

   
  
 

  return (
    <>
       
      <main>
      <div className="top-panel">
      <div className="top-panel-leftbox" >
    <div className="top-panel-leftbox-wrapper">
     <p style={{fontSize:"2rem",color:"white",fontWeight:"700",textShadow:"1px 1px rgb(20, 40, 23)"}}>Welcome,
     ShopSwiftly
      Where Fashion Meets Convenience!
      Explore, Shop, and Embrace
   Your Unique Style Today!
   </p>
   <p style={{fontSize:"1.3rem",color:"white",textShadow:"1px 1px rgb(20, 40, 23)"}}>
   Unlock Endless Style Possibilities at Shop Swiftly - Where Every Click Leads to Fashion Bliss! Start Your Style Journey Now !
   </p>
   <p style={{width:"140px" ,padding:"8px",fontWeight:"600",backgroundColor:"rgb(54, 53, 53)",borderRadius:"5px", fontSize:"1.2rem"}}>
    Start Shoping
   </p>
   </div>
      </div>
       <div className="top-panel-rightbox">
        <img style={{height:"100%",width:"100%"}} src="https://assets.justinmind.com/wp-content/uploads/2019/08/ecommerce-website-design.png"/>
       </div>


      </div>


      <h2 style={{fontSize:"2rem",fontWeight:"700",color:"rgb(236, 111, 66)",textShadow:"0.5px 0.5px rgb(20, 40, 23)"}}>
         {/* Unlock Endless Style Possibilities at ShopSwiftly - Where Every Click Leads to Fashion Bliss! Start Your Style Journey Now ! */}
         </h2>
        <div className="shop-section">
           
          <div className=" box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Clothes</h2>
              <div className="Clothes box-img">
                <div className="shop-section-content">
                  <Link to="/clothes" className="shop-section-link" >See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className=" box">

            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Health Care</h2>
              <div className="HealthPersonalCare box-img">
                <div className="shop-section-content">
                  <Link to="/Health-Personal-Care" className="shop-section-link" > See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Furniture</h2>
              <div className="Furniture box-img" >
                <div className="shop-section-content">
                  <Link to="/Furniture" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>

          </div>
          <div className=" box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Electronics</h2>
              <div className="Electronics box-img" >
                <div className="shop-section-content">
                  <Link to="/Electronics" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className=" box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Beauty Picks</h2>
              <div className="BeautyPicks box-img">
                <div className="shop-section-content">
                  <Link to="/Beauty-Picks" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Pet Care</h2>
              <div className="PetCare box-img" >
                <div className="shop-section-content">
                  <Link to="/Pet-Care" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Fitness</h2>
              <div className="StartYourFitnessJourney box-img" >
                <div className="shop-section-content">
                  <Link to="/Start-your-fitness-journey" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>

          </div>
          <div className="box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Fashion Trends</h2>
              <div className="DiscoverFashionTrends box-img" >
                <div className="shop-section-content">
                  <Link to="/Discover-Fashion-Trends" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2 style={{fontWeight:"700"}}>Grocery</h2>
              <div className="Grocery box-img" >
                <div className="shop-section-content">
                  <Link to="/Grocery" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      

      {/* footer section */}
     <Footer/>
     
      <Outlet />
    </>

  )
}
export default ShopSwiftlyPage;