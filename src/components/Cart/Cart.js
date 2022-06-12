import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(card);


    // const totalReducer = (previous, Product) => previous + Product.price
    // const total = cart.reduce(totalReducer, 0);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        // console.log(product);
        if (!product.quantity) {
            product.quantity = 1;
        }


        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantitys);
        total = total + product.price * product.quantity;

    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5> <br />
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;