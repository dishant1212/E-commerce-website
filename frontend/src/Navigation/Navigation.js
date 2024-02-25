import { Link, Outlet } from "react-router-dom";
import "./Navigation.css"
function Navigation() {



    return (
        <>
            <div className="navigation">
                <div className="navigation-shopswiftly border" >
                    <Link className="navigation-link" to="/">ShopSwiftly</Link>

                </div>

                <div className="navigation-search">
                    <Link className="navigation-link" to="/search">
                        <div className="nav-search">
                            <select className="search-select">
                                <option>All</option>
                            </select  >
                            <input placeholder="Search Amazon" className="search-input" />
                            <div className="seacrh-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="navigation-account-cart">
                    <div className="navigation-account border">
                        <Link className="navigation-link" to="/account-list">
                                <p><span>Hello, sign in</span></p>
                                <p className="nav-second">Account & Lists</p>
                           
                        </Link>
                    </div>
                    <div className="navigation-cart border" >
                        <Link className="navigation-link" to="/cart">Cart</Link>
                    </div>
                </div>

            </div>
            <Outlet />
        </>
    )



}

export default Navigation;