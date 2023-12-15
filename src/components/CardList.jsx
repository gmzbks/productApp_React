import React from 'react';
import Card from './Card';

// CardList component'i, ürünleri listeleyen bir kart koleksiyonunu içerir.
const CardList = ({ product, onAddToCart }) => {
  return (
    <div className='product-list'>
      {/* Her bir ürün için bir Card component'i oluşturma */}
      {product.map((product) => (
        <Card
          key={product.id}
          itemid={product.id}
          image={product.image}
          price={product.price}
          title={product.title}
          onAddToCart={onAddToCart}
          product={product}
        />
      ))}
    </div>
  );
}

export default CardList;

