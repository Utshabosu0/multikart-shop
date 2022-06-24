import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(card);


    // const totalReducer = (previous, Product) => previous + Product.price
    // const total = cart.reduce(totalReducer, 0);

    let totalQuantity = 0;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        // console.log(product);


        if (!product.quantity) {
            product.quantity = 1;
        }


        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantitys);
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total price: ${total.toFixed(2)}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};
export default Cart;

// import React from 'react';
// import './Cart.css';

// const Cart = (props) => {
//     const { cart } = props;
//     console.log(props.children);
//     let total = 0;
//     let shipping = 0;
//     let quantity = 0;
//     for (const product of cart) {
//         if (!product.quantity) {
//             product.quantity = 1;
//         }
//         quantity = quantity + product.quantity;
//         total = total + product.price * product.quantity;
//         shipping = shipping + product.shipping;
//     }
//     const tax = parseFloat((total * 0.1).toFixed(2));
//     const grandTotal = total + shipping + tax;
//     return (
//         <div className='cart'>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {quantity}</p>
//             <p>Total price: ${total.toFixed(2)}</p>
//             <p>Total Shipping: ${shipping}</p>
//             <p>Tax: {tax}</p>
//             <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
//             {props.children}
//         </div>
//     );
// };

// export default Cart;