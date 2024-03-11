import "../my-shop-style/myShop.css"
import "./clothes.css"
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/clothesSlice";
import { addItem } from "../../../../redux/slices/cartSlice";
import { useNavigate,Link } from "react-router-dom";
import Images from "./images/images";



function Clothes(){


   const UseDispatch=useDispatch()
   const navigate=useNavigate()
   const clothes=useSelector(state=>state.clothes)
   const signInData=useSelector(state=>state.SignInData)
   const [currentImageIndex,setCurrentImageIndex]=useState(0)
   const [page,setPage]=useState(1)

   const nextPageHandler=()=>{
     if(page<clothes.data.length/12){
      setPage(page+1)
     }
         
     
   }
   const previousPageHandler=()=>{
    if(page > 1){
     setPage(page-1)
    }else{
      console.log("error")
    }
    
   }
   

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

   useEffect(()=>{
        const interval=setInterval(() => {
           setCurrentImageIndex(preIndex=>(preIndex+1)%Images.length)
        },5000);
        return ()=>clearInterval(interval)
   },[Images.length])


    return(
        <>
        
        <div className="clothes-navbar"  style={{
          backgroundImage:`url(${Images[currentImageIndex]})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          width:"100%",
          height:"100vh"
        }}>
          <div className="clothes-navbar-boxOne" >
            <div className="clothes-catageries">
               <Link to="/men-clothes" className="clothes-navbar-link">MEN</Link>
            </div>
            <div className="clothes-catageries">
                <Link to="/women-clothes"  className="clothes-navbar-link">WOMEN</Link>
            </div>
            <div className="clothes-catageries">
                <Link  to="/kids-clothes" className="clothes-navbar-link">KIDS</Link>
            </div>
          </div >
          <div className="clothes-navbar-boxTwo">
            
          </div>
        </div>
        <div className="container">
          {clothes.data.slice(page*12-12,page*12).map(item => (
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
       { clothes.data.length>0 && <div className="pagination-conatiner">
          
             
          
          <button  className="pagination-btn" onClick={ previousPageHandler} >Previous</button>
          <p>
            {page} of { (clothes.data.length / 12)}
          </p>
          <button className="pagination-btn" onClick={nextPageHandler}>Next</button>
        </div>
}
      </>
    )
}
export default Clothes;