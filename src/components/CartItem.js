import React,{useContext} from 'react';
import './cartItem.css';
import {GlobalStateContext} from './GlobalState';

function CartItem({item}) {

   const [{basket},dispatch] = useContext(GlobalStateContext);

   const removeHandler = () =>{
      dispatch({
         type:'REMOVE_FROM_BASKET',
         id: item.id
      })
   }

  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <div className="product-info">
         <p className = 'product-title'>{item.title}</p>
         <p className="product_price">
            <small>$</small>
            <strong>{item.price}</strong>
         </p>
         <p className="product-rating">
            {
               Array(item.rating)
               .fill()
               .map((_) => <p>⭐</p>)
            }
         </p>
         <button className = 'add-to-cart-btn' onClick = {removeHandler}>Remove from Cart</button>
       </div>
    </div>
  )
}

export default CartItem;