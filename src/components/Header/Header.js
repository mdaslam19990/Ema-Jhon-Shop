import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/invantory">Manage Invantory</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;