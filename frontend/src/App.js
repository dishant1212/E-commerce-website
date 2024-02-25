import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css';


import ShopSwiftlyPage from "./Navigation/ShopSwiftly/ShopSwiftlyPage";
import Clothes from "./Navigation/ShopSwiftly/MyShop/Clothes/Clothes";
import HealthPersonalCare from "./Navigation/ShopSwiftly/MyShop/HealthPersonalCare";
import Furniture from "./Navigation/ShopSwiftly/MyShop/Furniture";
import Electronics from "./Navigation/ShopSwiftly/MyShop/Electronics/Electronics";
import BeautyPicks from "./Navigation/ShopSwiftly/MyShop/BeautyPicks";
import DiscoverFashionTrends from "./Navigation/ShopSwiftly/MyShop/DiscoverFashionTrends";
import NewArrivalInTours from "./Navigation/ShopSwiftly/MyShop/NewArrivalInTours";
import PetCare from "./Navigation/ShopSwiftly/MyShop/PetCare";
import Grocery from "./Navigation/ShopSwiftly/MyShop/Grocery";

import Navigation from "./Navigation/Navigation";
import AccountAndList from "./Navigation/Account&List/accountAndList";
import Cart from "./Navigation/Cart/cart";
import SearchTo from "./Navigation/SearchTo/SearchTo";
import SignUpPage from "./Navigation/Account&List/SignUpPage";
import AdminPanel from "./AdminPanel/adminPanel";
import AddClothes from "./AdminPanel/addClothes/addClothes";
import AddElectronics from "./AdminPanel/addElectronics/addElectronics";


function App() {
  return (
    <div className="App">

     

        <BrowserRouter>
        <Routes>
            
        <Route path="/" element={<Navigation/>}>
            <Route path="/" exact element={<ShopSwiftlyPage/>} />
            <Route path="/clothes" element={<Clothes/>}/>
            <Route path="/Health-Personal-Care" element={<HealthPersonalCare/>}/>
            <Route path="/Furniture" element={<Furniture/>} />
            <Route path="/Electronics" element={<Electronics/>}/>
            <Route path="/Beauty-Picks" element={<BeautyPicks/>}/>
            <Route path="/Pet-Care" element={<PetCare/>}/>
            <Route path="/New-Arrival-In-Tours" element={<NewArrivalInTours/>} />
            <Route path="/Discover-Fashion-Trends" element={<DiscoverFashionTrends/>}/>
            <Route path="/Grocery" element={<Grocery/>}/>
            <Route path="/search" element={<SearchTo/>} />
            <Route path="/account-list"  element={<AccountAndList/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
            <Route path="/cart" element={<Cart/>} />
            
        </Route> 
            

        <Route path="/admin-panel" element={<AdminPanel/>}>
          
        </Route>
        <Route  path="/add-clothes" element={<AddClothes/>}/>
        <Route path="/add-electronics" element={<AddElectronics/>}/>
        
    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
