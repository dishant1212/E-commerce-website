import "./cart.css"

import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../../redux/slices/cartSlice"
import {itemIncress,itemDecress} from "../../redux/slices/cartItemIncressDecress"
import { useNavigate } from "react-router-dom"


function Cart() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const cartProducts = useSelector(state => state.cart)
  const signInData=useSelector(state=>state.SignInData)
  console.log(signInData.data)
  const IncressDecressCount=useSelector(state => state.CartItemIncressDecressCount)

  const totalPrice = cartProducts.reduce((acc, cv) => {
    return acc + cv.price
  }, 0)

  const removeItemHandler = (id) => dispatch(removeItem(id))
    
  function proccedToBuyHandler(){
         if(signInData.data){
          console.log("if",signInData.data)
           alert("Congraculation Successfully Buy")
         }else{
          console.log("else",signInData.data)
          alert("Please Sign In")
            navigate("/login")
         
         }
  }

  return (
    <>
      <div className="cart-container">

       <div className="topCartSection" >

         <div className="shoppingCartHeading">Shopping Cart</div>
       </div>


        <div className="mainCartSection">

            <div className="mainCartSection-cart">
              {
                cartProducts.map((item, index) => {


                  return <div className="mainCartSection-item" key={index}>

                    <div className="productImg">
                      <img  src={item.imageUrl} alt="productImage" height={120} width={90} />
                    </div>


                    <div className="productName">
                      <div>
                      {item.name}
                      </div>
                    </div>


                   {/*  <div className="addMinusQuanity">
                      <span className="spanStyle" onClick={()=>dispatch(itemIncress())}>+</span>
                      <input className="minusQuanityInput" readOnly value={IncressDecressCount} />
                      <span className="spanStyle" onClick={()=>dispatch(itemDecress())}>-</span><br />
                    </div>
                      */}
                    <div className="productPrice">
                      <div>&#8377; {item.price}</div>

                    </div>
<div className="removeItem">
<button className="removeItemBtn"  onClick={() => removeItemHandler(item._id)}>Remove</button>
</div>
                  </div>
                })
              }
            </div>
         
        </div>

        <div className="bottomCartSection">
          <div className="cart-container-bottom-text">Total Product: {cartProducts.length} ,&#8377; {totalPrice} /_</div>
          <div>
            <button className="bottomCartSection-btn" onClick={proccedToBuyHandler}>Procced to Buy</button>
          </div>
        </div>



      </div>
    </>
  )
}
export default Cart