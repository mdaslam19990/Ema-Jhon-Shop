import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  storedData,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, size]);

  useEffect(() => {
    const dataStored = storedData();
    let storedNewData = [];
    for (const id in dataStored) {
      const findData = products.find((product) => product._id === id);
      if (findData) {
        const quantity = dataStored[id];
        findData.quantity = quantity;
        storedNewData.push(findData);
      }
    }
    setCart(storedNewData);
  }, [products]);

  const handleToCart = (selectedProducdt) => {
    const exists = cart.find((product) => product._id === selectedProducdt._id);
    let newCart = [];
    // console.log(exists, selectedProducdt)
    if (!exists) {
      selectedProducdt.quantity = 1;
      newCart = [...cart, selectedProducdt];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProducdt._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProducdt._id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="porduct-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleToCart={handleToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            <button className="reviewBtn">Order Review</button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <h2>
          Currently selected page {page} and Size {size}
        </h2>
        {[...Array(pages).keys()].map((number) => (
          <button
            className={page == number && "selected"}
            key={number}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
