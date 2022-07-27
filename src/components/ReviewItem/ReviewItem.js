import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, price, quantity, key } = props.product;
    const { handleRemove, handleDecrement, handleIecrement } = props;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        Name: {name.length > 20 ? name.slice(0, 80) + '...' : name}
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>

                    <p>
                        <small>Quantity: {quantity}</small> <br />
                        <span ><button
                            className='dec-btn'
                            onClick={() => handleDecrement(key)}
                        >
                            -</button>
                            <button
                                onClick={() => handleIecrement(key)}
                                className='inc-btn'>
                                +</button></span>
                    </p>

                </div>
                <div
                    className="delete-container">
                    <button
                        onClick={() => handleRemove(key)}
                        className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;
