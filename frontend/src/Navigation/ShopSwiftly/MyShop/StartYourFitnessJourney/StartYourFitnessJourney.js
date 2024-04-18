import "../my-shop-style/myShop.css"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/fitnessSlice";
import { addItem } from "../../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";



function StartYourFitnessJourney(){


   const UseDispatch=useDispatch()
   const navigate=useNavigate()
   const StartYourFitnessJourney=useSelector(state=>state.fitnessProducts)
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
        <h2>StartYourFitnessJourney</h2>
        <div className="container">
          {StartYourFitnessJourney.data.map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{`${item.name.slice(1,70)}...`}</h3>
                <p  className="container-cart-Details-para">Price: ${item.price}</p>
               
              </div>
              <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
             
            </div>
          ))}
        </div>
      </div>
    )
}
export default StartYourFitnessJourney;