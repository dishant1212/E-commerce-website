// import "../../my-shop-style/myShop.css"
// import { useEffect,useState } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { fetchData } from "../../../../../redux/slices/clothesSlice";
// import { addItem } from "../../../../../redux/slices/cartSlice";
// import { useNavigate,Link } from "react-router-dom";


// function ClothesHomePage(){


//     const UseDispatch=useDispatch()
//     const navigate=useNavigate()
//     const clothes=useSelector(state=>state.clothes)
//     const signInData=useSelector(state=>state.SignInData)
//     const [page,setPage]=useState(1)
 
//     const nextPageHandler=()=>{
//       if(page<clothes.data.length/12){
//        setPage(page+1)
//       }
          
      
//     }
//     const previousPageHandler=()=>{
//      if(page > 1){
//       setPage(page-1)
//      }else{
//        console.log("error")
//      }
     
//     }
    
 
//     const addToCart=(item)=>{
//      UseDispatch(addItem(item))
//  }
 
//  function proccedToBuyHandler(){
//    if(signInData.data){
//      alert("Congraculation Successfully Buy")
//    }else{
//      alert("Please Sign in")
//       navigate("/account")
   
//    }
//  }
 
//     useEffect(()=>{
//           UseDispatch(fetchData())
//     },[])
 
   

//     return(
//         < >

//         <div className="container">
//           {clothes.data.slice(page*20-20,page*20).map(item => (
//             <div className="container-card" key={item.id}>
//               <img src={item.imageUrl} alt={item.name} className="cotainer-card-Image" />
//               <div className="container-cart-Details">
//                 <h3 className="container-cart-Details-headding">{`${item.name.slice(1,70)}...`}</h3>
//                 <p  className="container-cart-Details-para">Price:&#8377; {item.price}</p>
                
//               </div>
//               <div className="container-card-btn">
//               <button className="container-addToCart-addBtn" onClick={() => addToCart(item)}>Add to Cart</button>
//               {/* <button className="container-addToCart-buyBtn" onClick={proccedToBuyHandler}>Buy</button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//        { clothes.data.length>0 && <div className="pagination-conatiner">
          
             
          
//           <button  className="pagination-btn" onClick={ previousPageHandler} >Previous</button>
//           <p style={{fontWeight:"800",fontSize:"1.2rem",color:"rgb(236, 111, 66)"}}>
//             {page} of { Math.floor(clothes.data.length / 20)}
//           </p>
//           <button className="pagination-btn" onClick={nextPageHandler}>Next</button>
//         </div>
// }
//         </>
//     )
// }

// export default ClothesHomePage