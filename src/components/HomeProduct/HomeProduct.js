import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Rating from 'react-rating';
import './HomeProduct.css';

const HomeProduct = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, stock, star } = props.product;


    return (
        <div className='homeProduct'>
            <img src={img} alt=""></img>
            <div className='home-product-info'>
                <p className='home-product-name' title={name}>
                    {name.length > 20 ? name.slice(0, 20) + '...' : name}
                </p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p> <small>only {stock} left in stock - order soon</small> </p>
                <Rating
                    initialRating={star}
                    emptySymbol="fa-regular fa-star"
                    fullSymbol="fa-solid fa-star"
                    readonly
                ></Rating>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default HomeProduct;