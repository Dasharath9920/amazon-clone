import React, {useContext} from 'react';
import './product.css';
import {GlobalStateContext} from './GlobalState';

function Product({id,title,price,rating,image}) {

   const [{basket},dispatch] = useContext(GlobalStateContext);

   const addToBasket = () =>{
      dispatch({
         type: 'ADD_TO_BASKET',
         item:{
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image
         }    
      })
   }

  return (
    <div className = 'product'>
       <div className="product-info">
          <p>{title}</p>
         <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
         </p>
         <p className="product-rating">
            {
               Array(rating)
               .fill()
               .map((_) => <p>⭐</p>)
            }
         </p>
       </div>
       <img src={image} alt="" />
       <button className = 'add-to-cart-btn' onClick = {addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product;