import "../my-shop-style/myShop.css"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/clothesSlice";



function Clothes(){


   const UseDispatch=useDispatch()
   const clothes=useSelector(state=>state.clothes)
   console.log(clothes)

   const addToCart=(id)=>{
     
   }

   useEffect(()=>{
         UseDispatch(fetchData())
   },[])

    return(
        <div>
        <h2>Clothes</h2>
        <div className="container">
          {clothes.data.map(item => (
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
      </div>
    )
}
export default Clothes;