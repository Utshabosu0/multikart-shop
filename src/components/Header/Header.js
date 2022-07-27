import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">order Review</Link>
                {
                    user.email && <Link to="/orders">Order </Link>

                }
                {
                    user.email ?
                        <button className='header-btn' onClick={logOut}>Log Out</button>
                        :
                        <a href="/login">Log In</a>
                }

                <span style={{ color: 'goldenrod', }}> {user.displayName}</span>
                <img src={user.photoURL} alt="" />
                {/* <span style={{ color: 'goldenrod' }}> {user.email}</span> */}
            </nav>

        </div>

    );
};

export default Header;