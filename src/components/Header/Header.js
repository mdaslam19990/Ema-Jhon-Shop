import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <a href="/order">Order</a>
                <a href="/order_review">Order Review</a>
                <a href="/manage">Manage Invantory</a>
                <a href="/login">Log in</a>
            </div>
        </nav>
    );
};

export default Header;