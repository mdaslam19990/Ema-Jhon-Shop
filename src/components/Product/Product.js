import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = ({ handleToCart, product }) => {
    const { category, name, seller, price, stock, img, ratings } = product;
    return (
        <div className='product'>
            <img src={img ?  img  : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleToCart(product)} className='btn-cart'>
                <p className='add-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Product;