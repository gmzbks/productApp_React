import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";

// Cart component'i, sepeti ve sepet üzerindeki işlevselliği içerir.
const Cart = ({ cartItems, setCart, onShowCart }) => {
  const [itemTotalPrices, setItemTotalPrices] = useState({});

  // Sepet içindeki ürünlerin toplam fiyatlarını güncelleme
  useEffect(() => {
    const updatedItemTotalPrices = {};

    cartItems.forEach((item) => {
      const total = item.quantity * item.price;
      updatedItemTotalPrices[item.id] = total;
    });

    setItemTotalPrices(updatedItemTotalPrices);
  }, [cartItems]);

  // Sepet içindeki bir ürünü azaltma veya silme işlemi
  const handleDelete = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  return (
    <div className='cart-box'>
      <div className='cart-click' onClick={() => onShowCart()}>
        <p>Continue Shopping</p>
        <span><FaArrowRight /></span>
      </div>
      {/* Sepet içindeki her bir ürünün listesi */}
      {cartItems.map((item) => (
        item && (
          <div className='cart' key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price}</p>
            </div>
            <div className='cart-controls'>
              <div className='total-price'>
                {/* Toplam fiyat */}
                <p>Total Price:  {itemTotalPrices[item.id]
                  ? `$${itemTotalPrices[item.id].toFixed(2)}`
                  : 'N/A'}</p>
                {/* Ürünü silme butonu */}
                <button
                  className='delete-button'
                  onClick={() => handleDelete(item.id)}
                  > Delete
                </button>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Cart;

