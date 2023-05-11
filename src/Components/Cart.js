import React from "react";
import CartItem from "./CartItem";
import { currencyFormatter } from "../Util";

function Cart({ cart, setCart }) {


const subTotal= cart.reduce(function(accumulator, currentval){
  return accumulator+currentval.price*currentval.count;
 },0);

 //console.log(subTotal)

 //clearCart Handler
 const clearCartHandler=()=>{
    setCart([])
 }

 //alertMsg Handler

const alertHandler=()=>{
return alert('You are redirected to payment page')
}

      
        return cart.length 

        ?
         (   <div className="cart">
        <h3>Cart</h3>

        <div className="cartList">
            {cart.map((cartProduct) => {
                return <CartItem {...cartProduct} setCart={setCart} />;
            })}
        </div>

        <div className="cartTotal">Total:{currencyFormatter(subTotal)} </div>
        <div className="cartFooter">
            <button onClick={clearCartHandler} className="clear">Clear Cart</button>
            <button onClick={alertHandler}className="checkout">Checkout</button>
        </div>
    </div>)
       :
      (
      <div className="cart">
      <h3>Cart</h3>
      <p>Please add products to the cart</p>
      </div>
      )
      
    }
export default Cart;
