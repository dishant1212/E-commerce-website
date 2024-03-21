import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import "./ShopSwiftyPage.css";
import "../Navigation.css"



function ShopSwiftlyPage() {

   
  
 

  return (
    <>
       
      <main>
      <div className="top-panel">
      <div className="top-panel-text1" >
      <p>Welcome, </p>
       <p>Shop Swiftly</p>  
      <p>Where Fashion Meets Convenience!</p>
      <p>Explore, Shop, and Embrace </p>
   <p>Your Unique Style Today!</p> 
      </div>
      <div className="top-panel-text2" >

      Unlock Endless Style Possibilities at Shop Swiftly - Where Every Click Leads to Fashion Bliss! Start Your Style Journey Now !
      </div>
      </div>
      <h2 style={{fontFamily:"Monospace"}}>Shop by Category</h2>
        <div className="shop-section">
           
          <div className=" box">
            <div className="box-content">
              <h2>Clothes</h2>
              <div className="Clothes box-img">
                <div className="shop-section-content">
                  <Link to="/clothes" className="shop-section-link" >See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className=" box">

            <div className="box-content">
              <h2>Health Care</h2>
              <div className="HealthPersonalCare box-img">
                <div className="shop-section-content">
                  <Link to="/Health-Personal-Care" className="shop-section-link" > See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2>Furniture</h2>
              <div className="Furniture box-img" >
                <div className="shop-section-content">
                  <Link to="/Furniture" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>

          </div>
          <div className=" box">
            <div className="box-content">
              <h2>Electronics</h2>
              <div className="Electronics box-img" >
                <div className="shop-section-content">
                  <Link to="/Electronics" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className=" box">
            <div className="box-content">
              <h2>Beauty Picks</h2>
              <div className="BeautyPicks box-img">
                <div className="shop-section-content">
                  <Link to="/Beauty-Picks" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2>Pet Care</h2>
              <div className="PetCare box-img" >
                <div className="shop-section-content">
                  <Link to="/Pet-Care" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2>Fitness</h2>
              <div className="StartYourFitnessJourney box-img" >
                <div className="shop-section-content">
                  <Link to="/Start-your-fitness-journey" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>

          </div>
          <div className="box">
            <div className="box-content">
              <h2>Fashion Trends</h2>
              <div className="DiscoverFashionTrends box-img" >
                <div className="shop-section-content">
                  <Link to="/Discover-Fashion-Trends" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h2>Grocery</h2>
              <div className="Grocery box-img" >
                <div className="shop-section-content">
                  <Link to="/Grocery" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <footer>
        <div class="foot-panel1">
          {/* <button onClick={backToTopHandler}>Back to Top</button>  */}
        </div>
        <div class="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>ShopSwift Science</a>
          </ul>
          <ul>
            <p>Connect with Us</p>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>Sell on ShopSwiftly</a>
            <a>Sell under ShopSwiftly Accelerator</a>
            <a>Protect and Build Your Brand</a>
            <a>ShopSwiftly Global Selling</a>
            <a>Become an Affiliate</a>
            <a>Fulfilment by Amazon</a>
            <a>Advertise Your Products</a>

          </ul>
          <ul>

            <p>Let Us Help You</p>
            <a>COVID-19 and ShopSwiftly</a>
            <a>Your Account</a>
            <a>Returns Centre</a>
            <a>100% Purchase Protection</a>
            <a>ShopSwiftly App Download</a>
            <a>Help</a>
          </ul>
        </div>
        <div class="foot-panel3">

        </div>

        <div class="foot-panel4">
          <div class="pages">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
          </div>
          <div class="copyright">© 1996-2023, ShopSwift.com, Inc. or its affiliates</div>
        </div>
      </footer>

      <Outlet />
    </>

  )
}
export default ShopSwiftlyPage;