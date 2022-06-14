import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p> <small>by:{seller}</small> </p>
                <p>Price: {price}</p>
                <p> <small>only {stock} left in stock - order soon</small> </p>
                <Rating
                    initialRating={star}
                    emptySymbol="fa-regular fa-star"
                    fullSymbol="fa-solid fa-star"
                    readonly
                ></Rating> <br /> <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'>{cartIcon}  Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;