import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {GlobalStateContext} from './GlobalState';

function Header() {

  const [{basket},dispatch] = useContext(GlobalStateContext);

  return (
     <div className="nav-bar">
        <Link to='/'>
            <img className = 'margin-lr' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="search-bar margin-lr">
            <input type="text" className="search" />
            <button className="search-btn"><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></button>
        </div>
        <div className="header-links margin-lr">

          <Link to='/' className='header_link margin-lr'>
            <div className="header_option">
              <span>Hello, Dasharath</span>
              <span>Sign In</span>
            </div>
          </Link>

          <Link to='/' className='header_link margin-lr'>
            <div className="header_option">
              <span>Returns</span>
              <span>& Orders</span>
            </div>
          </Link>

          <Link to='/' className='header_link margin-lr'>
            <div className="header_option">
              <span>Your</span>
              <span>Prime</span>
            </div>
          </Link>

          <Link to='/Cart' className='header_link margin-lr'>
            <div className="header_option basket">
              <ShoppingCartIcon />
              <p className = 'basket_count'>{basket.length}</p>
            </div>
          </Link>

        </div>
     </div>
  );
}

export default Header;