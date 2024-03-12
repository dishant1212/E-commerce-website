import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {useSelector} from "react-redux"
import './App.css';


import ShopSwiftlyPage from "./Navigation/ShopSwiftly/ShopSwiftlyPage";
import Clothes from "./Navigation/ShopSwiftly/MyShop/Clothes/Clothes";

import Furniture from "./Navigation/ShopSwiftly/MyShop/Furniture/Furniture";
import Electronics from "./Navigation/ShopSwiftly/MyShop/Electronics/Electronics";
import BeautyPicks from "./Navigation/ShopSwiftly/MyShop/BeautyPicks/BeautyPicks";
import DiscoverFashionTrends from "./Navigation/ShopSwiftly/MyShop/DiscoverFashion/DiscoverFashionTrends";
import StartYourFitnessJourney from "./Navigation/ShopSwiftly/MyShop/StartYourFitnessJourney/StartYourFitnessJourney";
import PetCare from "./Navigation/ShopSwiftly/MyShop/PetCare/PetCare";
import Grocery from "./Navigation/ShopSwiftly/MyShop/Grocery/Grocery";

import Navigation from "./Navigation/Navigation";
import Login from "./Navigation/Account&List/accountAndList";
import Cart from "./Navigation/Cart/cart";
import SearchTo from "./Navigation/SearchTo/SearchTo";
import SignUpPage from "./Navigation/Account&List/SignUpPage";
import AdminPanel from "./AdminPanel/adminPanel";
import AddClothes from "./AdminPanel/addClothes/addClothes";
import AddElectronics from "./AdminPanel/addElectronics/addElectronics";
import HealthPersonalCare from "./Navigation/ShopSwiftly/MyShop/HealthPersonalCare/HealthPersonalCare";
import AddHeathProducts from "./AdminPanel/addHealthProducts/addHealthProducts";
import AddPetCare from "./AdminPanel/addPetCare/addPetCare";
import AddBeautyPicks from "./AdminPanel/addBeautyPicks/addBeautyPicks";
import AddDiscoverFashion from "./AdminPanel/addDiscoverFashion/addDiscoverFashion";
import AddFurniture from "./AdminPanel/addFurniture/addFurniture";
import AddGrocery from "./AdminPanel/addGrocery/addGrocery";
import AddFitnessProducts from "./AdminPanel/addFitnessProducts/addFitnessProdcuts";
import MenClothes from "./Navigation/ShopSwiftly/MyShop/Clothes/men/menClothes";
import WomenClothes from "./Navigation/ShopSwiftly/MyShop/Clothes/women/womenClothes";
import KidsClothes from "./Navigation/ShopSwiftly/MyShop/Clothes/KIds/kidsClothes";
import AddMenClothes from "./AdminPanel/addClothes/addMenClothes";
import AddWomenClothes from "./AdminPanel/addClothes/addWomenClothes";
import MyAccountPage from "./Navigation/Account&List/MyAccount";
import AddKidsClothes from "./AdminPanel/addClothes/addKidsClothes";
import ClothesHomePage from "./Navigation/ShopSwiftly/MyShop/Clothes/clothesHomePage/clothesHomePage";
import AboutUsPage from "./Navigation/AboutUs/AboutUsPage";





function App() {

  const signInData=useSelector(state=>state.SignInData)
  console.log(signInData.data)

  return (

    <>

     

        <BrowserRouter>
        <Routes>
            
        <Route path="/" element={<Navigation/>}>
            <Route path="/" exact element={<ShopSwiftlyPage/>} />
            <Route path="/account" element={<MyAccountPage/>}/>
            <Route path="/Health-Personal-Care" element={<HealthPersonalCare/>}/>
            <Route path="/Furniture" element={<Furniture/>} />
            <Route path="/Beauty-Picks" element={<BeautyPicks/>}/>
            <Route path="/Pet-Care" element={<PetCare/>}/>
            <Route path="/Start-your-fitness-journey" element={<StartYourFitnessJourney/>} />
            <Route path="/Discover-Fashion-Trends" element={<DiscoverFashionTrends/>}/>
            <Route path="Electronics" element={<Electronics/>}/>
            <Route path="/Grocery" element={<Grocery/>}/>
            <Route path="/search" element={<SearchTo/>} />
            <Route path="/login"  element={<Login/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/aboutUs" element={<AboutUsPage/>}/>
            <Route path="/clothes" element={<Clothes/>}>
              <Route path="/clothes" element={<ClothesHomePage/>}/>
               <Route path="/clothes/men-clothes" element={<MenClothes/>}/>
              <Route path="/clothes/women-clothes" element={<WomenClothes/>} />
              <Route path="/clothes/kids-clothes" element={<KidsClothes/>}/>
            </Route>
        </Route> 
        
            

        <Route path="/admin-panel" element={<AdminPanel/>}>
        <Route  path="/admin-panel/add-clothes" element={<AddClothes/>}/>
        <Route path="/admin-panel/add-clothes-men" element={<AddMenClothes/>}/>
        <Route path="/admin-panel/add-clothes-women" element={<AddWomenClothes/>}/>
        <Route path="/admin-panel/add-clothes-kids" element={<AddKidsClothes/>}/>
        <Route path="/admin-panel/add-electronics" element={<AddElectronics/>}/>
        <Route  path="/admin-panel/add-health-products" element={<AddHeathProducts/>}/>
        <Route  path="/admin-panel/add-petcare-products" element={<AddPetCare/>}/> 
        <Route  path="/admin-panel/add-beautypicks-products" element={<AddBeautyPicks/>}/> 
        <Route  path="/admin-panel/add-discoverfashion-products" element={<AddDiscoverFashion/>}/>
        <Route  path="/admin-panel/add-furniture" element={<AddFurniture/>}/>
        <Route  path="/admin-panel/add-grocery-products" element={<AddGrocery/>}/>
        <Route  path="/admin-panel/Start-your-fitness-journey" element={<AddFitnessProducts/>}/>
        </Route>
        
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
