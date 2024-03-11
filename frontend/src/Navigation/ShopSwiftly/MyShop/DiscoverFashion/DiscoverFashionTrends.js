import "../my-shop-style/myShop.css"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/discoverFashionslice";
import { addItem } from "../../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";



function DiscoverFashion(){


   const UseDispatch=useDispatch()
   const navigate=useNavigate()
   const DiscoverFashion=useSelector(state=>state.discoverFashionProducts)
   const signInData=useSelector(state=>state.SignInData)


   const addToCart=(item)=>{
    UseDispatch(addItem(item))
}

function proccedToBuyHandler(){
  if(signInData.data){
    alert("Congraculation Successfully Buy")
  }else{
    alert("Please Sign in")
     navigate("/account-list")
  
  }
}

   useEffect(()=>{
         UseDispatch(fetchData())
   },[])

    return(
        <div>
        <h2>DiscoverFashion</h2>
        <div className="container">
          {DiscoverFashion.data.map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{item.name}</h3>
                <p  className="container-cart-Details-para">Price:&#8377; {item.price}</p>
                
              </div>
              <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="container-addToCart-buyBtn" onClick={proccedToBuyHandler}>Buy</button>
            </div>
          ))}
        </div>
      </div>
    )
}
export default DiscoverFashion;