import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "../Shop/Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container">
      <div className="shop-container">
        {products.map((product) => (
          <Product
            Key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
