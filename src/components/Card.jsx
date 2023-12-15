import React from 'react'

// Card component'i, bir ürünü temsil eden bir kartı içerir.
const Card = ({ itemid, image, category, price, title, onAddToCart, product }) => {

  return (
    <div className='carditem' id={itemid}>

      <img src={image} />
      <div className='card-details'>
        <h4>{title}</h4>
        <h4>{category}</h4>
        <div className="line"></div>
        <h3>${price}</h3>
      </div>
      <div className="add-button">
        {/* Sepete ekle butonu */}
        <button onClick={() => onAddToCart(product)} >Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
