import { Fragment } from "react";
import "./ShopSwiftyPage.css";
import { Link ,Outlet} from "react-router-dom";

function ShopSwiftlyPage() {

  return (
    <>
    <div  className="ShopSwiftly-Container">
      <header>

        <div class="hero-section">
          <div class="hero-msg">
            <p > you are on ShopSwiftly.com ,you can also shop on ShopSwift India for millions of products with fast local delivery </p>
          </div>

        </div>


      </header>

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
              <h2>Health & Personal Care</h2>
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
              <h2>New Arrival in Tours</h2>
              <div className="NewArrivalInTous box-img" >
                <div className="shop-section-content">
                <Link to="/New-Arrival-In-Tours" className="shop-section-link">See more</Link>
                </div>
              </div>

            </div>

          </div>
          <div className="box">
            <div className="box-content">
              <h2>Discover Fashion Trends</h2>
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
          Back to Top
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