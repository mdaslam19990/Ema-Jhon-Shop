import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, storedData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] =  useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const dataStored = storedData();
        let storedNewData = [];
        for(const id in dataStored){
            const findData = products.find(product => product.id === id);
            if(findData){
                const quantity = dataStored[id];
                findData.quantity = quantity;
                storedNewData.push(findData)
            }
        }
        setCart(storedNewData)
    },[products])

    const handleToCart = (selectedProducdt) => {
        const exists = cart.find(product => product.id === selectedProducdt.id);
        let newCart = [];
        // console.log(exists, selectedProducdt)
        if(!exists){
            selectedProducdt.quantity = 1;
            newCart = [...cart, selectedProducdt]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProducdt.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart)
        addToDb(selectedProducdt.id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="porduct-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleToCart={handleToCart}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    clearCart={clearCart}>
                    <Link to="/orders">
                        <button className='reviewBtn'>Order Review</button>
                    </Link>
                </Cart> 
                

            </div>
        </div>
    );
};

export default Shop;