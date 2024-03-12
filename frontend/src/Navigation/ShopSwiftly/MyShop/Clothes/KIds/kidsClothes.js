
import '../clothes.css'
import { useEffect } from 'react'
import { useNavigate,Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from "../../../../../redux/slices/kidsClothesSlice";
import { addItem } from "../../../../../redux/slices/cartSlice"



function KidsClothes(){

     const dispatch=useDispatch(fetchData) 
     const navigate=useNavigate()   
 
  const signInData=useSelector(state=>state.SignInData)
 const kidsCloth=useSelector(state=>state.KidsClothes)
 
  


function proccedToBuyHandler(){
  if(signInData.data){
    alert("Congraculation Successfully Buy")
  }else{
    alert("Please Sign in")
     navigate("/login")
  
  }
}
    const addToCart=(item)=>{
    dispatch(addItem(item))
}
     useEffect(()=>{
         dispatch(fetchData())
     },[])

return(
    <>
  
    <div className="container">
       
          {kidsCloth.data.map(item => (
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
       {/* { clothes.data.length>0 && <div className="pagination-conatiner">
          
             
          
          <button className="pagination-btn" onClick={ previousPageHandler}>Previous</button>
          <p>
            {page} of { (clothes.data.length / 12)}
          </p>
          <button className="pagination-btn" onClick={nextPageHandler}>Next</button>
       } */}

    </>
)
}

export default KidsClothes