import React, { useEffect, useState } from "react";
import './styles/app.scss'
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import Cart from "./components/Cart";

function App() {
  // State'lerin tanımlanması
  const [productList, setProductList] = useState([]);
  const [originalProductList, setOriginalProductList] = useState([]);
  const [search, setSearch] = useState(productList);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  /***************************************************************************************************************** */

  // Veri çekme işlemi
  useEffect(() => {

    const fecthData = async () => {
      const response = await fetch('/product-list.json'); // product-list.json'dan veri çekme
      const data = await response.json() // product-list.json'dan veri çekme

      setProductList(data);
      setOriginalProductList(data);

    }

    fecthData()
  }, []);


  /******************************************************************************************************************* */


  const categoryItem = [...new Set(productList.map((val) => val.category))]
  // Kategorilere göre filtreleme
  const filterItems = (cat) => {
    const newItems = productList.filter((newVal) => newVal.category === cat)
    setProductList(newItems)

  };
  // Tüm ürünleri gösterme

  const showAllItems = () => {
    setProductList(originalProductList);

  };
  /******************************************************************************************************************* */

  // Arama terimi değişikliği
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filteredItems = originalProductList.filter((product) => {
      const hasTitle = product.title && product.title.toLowerCase().includes(value);
      return hasTitle
    }
    );
    setProductList(filteredItems);
  };

  /*********************************************************************************************************************** */
  // Sepete ürün ekleme
  const handleAddToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.id === existingCartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {

      setCart([...cart, { ...product, id: cart.length + 1, quantity: 1 }]);
    }
  };

  // Sepet içindeki ürün sayısı
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Sepeti göster/gizle
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  /***************************************************************************************************************** */

  return (
    <div className="app">
      <div className="navi">
        <Navi
          onChange={handleSearchChange}

          onShowCart={handleShowCart}

          cartCount={cartCount} />

      </div>

      <div className="form">
        {/* Filtreleme formu ve ürün listesi/sepettekilerin gösterildiği alan */}
        <div className="category-filter-container">
          <Form
            categoryItem={categoryItem}
            filterItems={filterItems}
            showAllItems={showAllItems}
          />
        </div>

        <div className="cardlist-cart-show">
          {/* Sepet mi, ürün listesi mi gösterilecek kontrolü */}
          {showCart ? (
            <Cart cartItems={cart} setCart={setCart} showCart={showCart} onShowCart={handleShowCart} />
          ) : (
            <CardList product={productList} onAddToCart={handleAddToCart} />
          )}
        </div>
      </div>
    </div>


  );
}


export default App;
