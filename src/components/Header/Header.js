import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    const {user} = useContext(authContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/invantory">Manage Invantory</Link>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign Up</Link>
                <p>{user?.email}</p>
            </div>
        </nav>
    );
};

export default Header;