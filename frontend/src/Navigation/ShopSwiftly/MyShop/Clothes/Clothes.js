import "../my-shop-style/myShop.css"
import "./clothes.css"
import { Outlet,Link,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Images from "./images/images";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../../../../redux/slices/clothesSlice";
import { addItem } from "../../../../redux/slices/cartSlice";
import Footer from "../../../Footer/footer";




function Clothes(){


   
   const [currentImageIndex,setCurrentImageIndex]=useState(0)
   const clothes=useSelector(state=>state.clothes)
   const signInData=useSelector(state=>state.SignInData)
   const [page,setPage]=useState(1)

   const UseDispatch=useDispatch()
   const navigate=useNavigate()

   const nextPageHandler=()=>{
     if(page<clothes.data.length/20){
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
     navigate("/account")
  
  }
}

useEffect(()=>{
  const interval=setInterval(() => {
     setCurrentImageIndex(preIndex=>(preIndex+1)%Images.length)
  },5000);
  return ()=>clearInterval(interval)
},[Images.length])

   useEffect(()=>{
         UseDispatch(fetchData())
   },[])

    return(
        <>
        
        <div className="h-auto w-full flex justify-center items-center" >
          <div className="h-[90%] w-[100%]">

      

          <div className="h-screen w-full">
            <img className="h-full w-full" src={Images[currentImageIndex]}/>
          </div>
          



          <div className="h-[90%] w-[100%] flex flex-wrap bg-[#fff]">
          {clothes.data.slice(page*20-20,page*20).map(item => (
            <div className="container-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
              <div className="container-cart-Details">
                <h3 className="container-cart-Details-headding">{`${item.name.slice(1,70)}...`}</h3>
                <p  className="container-cart-Details-para">Price:&#8377; {item.price}</p>
                
              </div>
              <div className="container-card-btn">
              <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
              {/* <button className="container-addToCart-buyBtn" onClick={proccedToBuyHandler}>Buy</button> */}
              </div>
            </div>
          ))}
        </div>
       { clothes.data.length>0 && <div className="pagination-conatiner">
          
             
          
          <button  className="pagination-btn" onClick={ previousPageHandler} >Previous</button>
          <p style={{fontWeight:"700",fontSize:"1rem",color:"rgb(236, 111, 66)"}}>
            {page} of { Math.floor(clothes.data.length / 20)}
          </p>
          <button className="pagination-btn" onClick={nextPageHandler}>Next</button>
        </div>
      }






          </div>

        </div>
          
        <Footer/>
        
      </>
    )
}
export default Clothes;