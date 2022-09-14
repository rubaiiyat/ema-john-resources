import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../product/Product.css";

const Product = ({ product, handelAddToCart }) => {
  const { img, name, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h1>Name: {name}</h1>
        <p>Price: {price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button className="btn-cart" onClick={() => handelAddToCart(product)}>
        Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
