import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCarts from './../../hooks/useCarts';
import Cart from '../Cart/Cart';
import './OrderReview.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [Products] = useProducts();
    const [cart, setCart] = useCarts(Products);
    const history = useHistory();
    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(Product => Product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        history.push('/shipping');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className='review-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}></ReviewItem>)
                }

            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <button
                        onClick={handlePlaceOrder}
                        className="btn-regular">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;


// import React from 'react';
// import useProducts from '../../hooks/useProducts';
// import Cart from '../Cart/Cart';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
// import { useHistory } from 'react-router-dom';
// import useCarts from './../../hooks/useCarts';

// const OrderReview = () => {
//     const [products] = useProducts();
//     const [cart, setCart] = useCarts(products);
//     const history = useHistory();

//     const handleRemove = key => {
//         const newCart = cart.filter(product => product.key !== key);
//         setCart(newCart);
//         removeFromDb(key);
//     }

//     const handlePlaceOrder = () => {
//         setCart([]);
//         clearTheCart();
//         history.push('/placeorder');
//     }

//     return (
//         <div className="shop-container">
//             <div className="product-container">
//                 {
//                     cart.map(product => <ReviewItem
//                         key={product.key}
//                         product={product}
//                         handleRemove={handleRemove}
//                     ></ReviewItem>)
//                 }
//             </div>
//             <div className="cart-container">
//                 <Cart cart={cart}>
//                     <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>
//                 </Cart>
//             </div>
//         </div>
//     );
// };

// export default OrderReview;