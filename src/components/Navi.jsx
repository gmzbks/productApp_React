import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

// Navi component'i, arama, sepet gösterme ve sepet sayısı bilgisini içerir.
const Navi = ({ onChange, onShowCart, cartCount }) => {
  return (
    <div className='navbar'>
      <nav>
        <div className='search-container'>
          <div className='search-icon'>
            <IoSearch className='icon-search' />
            {/* Arama input'u */}
            <input className='input-search' type="text" placeholder="Search..." onChange={(e) => onChange(e)} />
          </div>
        </div>
        {/* Sepet ikonu */}
        <div className='cart-icon' onClick={() => onShowCart()}>
          {/* Sepet içindeki ürün sayısı */}
          <span>{cartCount}</span>
          <span>
            <FaCartShopping />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navi;

