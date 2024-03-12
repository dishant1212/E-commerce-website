import "../my-shop-style/myShop.css"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/grocerySlice";
import { addItem } from "../../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";



function Grocery(){


   const UseDispatch=useDispatch()
   const navigate=useNavigate()
   const Grocery=useSelector(state=>state.groceryProducts)
   const signInData=useSelector(state=>state.SignInData)
   

   const addToCart=(item)=>{
    UseDispatch(addItem(item))
}

function proccedToBuyHandler(){
  if(signInData.data){
    alert("Congraculation Successfully Buy")
  }else{
    alert("Please Sign in")
     navigate("/login")
  
  }
}

   useEffect(()=>{
         UseDispatch(fetchData())
   },[])

    return(
        <div>
        <h2>Grocery</h2>
        <div className="container">
          {Grocery.data.map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{item.name}</h3>
                <p  className="container-cart-Details-para">Price:&#8377; {item.price}</p>
                
              </div>
              <div className="container-card-btn">
              <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="container-addToCart-buyBtn" onClick={proccedToBuyHandler}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Grocery;