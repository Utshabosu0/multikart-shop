import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;