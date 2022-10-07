import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import "./Order.css";

const Orders = () => {
    const {products, initialData} = useLoaderData()
    const [cart, setCart] = useState(initialData)

    const handleDeleteSingleProduct = (id) => {
        const singleProduct = cart.filter(product => product.id !== id)
        setCart(singleProduct)
        removeFromDb(id)
    }


    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="Orders-container">
                {
                    cart.map(product => <ReviewItems 
                        key={product.id} 
                        product={product} 
                        handleDeleteSingleProduct={handleDeleteSingleProduct}
                        />)
                }
                {
                    cart.length === 0 && <h2>Order not found! Go to <Link to="/">Shop</Link> and order your favorite product</h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}/>
            </div>
        </div>
    );
};

export default Orders;