import React, { useState } from 'react';

// Form component'i, ürünleri kategoriye göre filtreleme işlevselliğini içerir.
const Form = ({ categoryItem, filterItems, showAllItems }) => {
  return (
    <div className="category-filter">
      <div className="category-list">
        <ul>
          <p>Filter</p>
          {/* Kategori listesini oluşturma */}
          {categoryItem.map(val => (
            <li key={val.id} className='filter' onClick={() => filterItems(val)}>
              {val}
            </li>
          ))}
          {/* Tüm ürünleri gösterme seçeneği */}
          <li className='filter' onClick={showAllItems}>All</li>
        </ul>
      </div>
    </div>
  );
};

export default Form;

