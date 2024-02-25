import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/electronicsSlice";



function Electronics(){
   
   const dispatch=useDispatch()
   const electronics=useSelector(state=>state.electronics)

   const addToCart=()=>{

   }

   useEffect(()=>{
   dispatch(fetchData())
   },[])
  
    return(
        <>
       <h2>Electronics Products</h2>
       <div className="container">
          {electronics.data.map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{item.name}</h3>
                <p  className="container-cart-Details-para">Price: ${item.price}</p>
                <button className="container-addToCart-Btn" onClick={() => addToCart(item.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        </>
    )
}
export default Electronics;