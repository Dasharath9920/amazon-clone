import React,{useContext} from 'react'
import {GlobalStateContext} from './GlobalState';
import CartItem from './CartItem';
import './cart.css';

function Cart() {

  const [{basket},dispatch] = useContext(GlobalStateContext);
  let total_amount = basket.reduce((sum,item) => sum+item.price,0);

  return (
    <div className="cart">
      <div className="cart-header">
        <img className = 'cart-add-image' src="https://m.media-amazon.com/images/I/61i014HA6xL._SX3000_.jpg" alt="" />
        <div className="price-details">
          <p>Subtotal ({basket.length} items): <span>${total_amount.toFixed(2)}</span></p>
          <small>
            <input type="checkbox" /> This order contains a gift
          </small>
          <button className = 'add-to-cart-btn'>Proceed to Buy</button>
        </div>
      </div>
      <div className="basket-items">
        {basket.length === 0? (
        <div>
            <h2>Your Amazon Cart is Empty</h2>
            <p style={{width:'900px'}}>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
  Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List.</p>
          </div>
        ):(
          <div>
            <h2 className = "brand">Shopping Cart</h2>
            {
              basket.map((item) => {
                return <CartItem item = {item}/>
              })
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;