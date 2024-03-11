import { useNavigate } from "react-router-dom";
import "./ShopSwiftyPage.css";
import { Link ,Outlet} from "react-router-dom";


function ShopSwiftlyPage() {
  
 
  

  return (
    <>
    <div  className="ShopSwiftly-Container">
      

        <div class="top-section">
          <div class="hero-msg">
            <p > you are on ShopSwiftly.com ,you can also shop on ShopSwift India for millions of products with fast local delivery </p>
          </div>

        </div>

      <main>


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
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>ShopSwift Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>ShopSwift Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>ShopSwift Science</a>
          </ul>
        </div>
        <div class="foot-panel3">
          <div class="logo"></div>
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
      
    </div>
    <Outlet/>
    </>
    
  )
}
export default ShopSwiftlyPage;