import React from 'react';
import img from '../../images/giphy.png'
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div>
            <img src={img} alt="" />
            <br />
            <a href="/home">
                <button
                    className="btn-payment">Back to home</button></a>
        </div>
    );
};

export default PlaceOrder;