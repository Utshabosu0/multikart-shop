import React from 'react';
import useCarts from './../../hooks/useCarts';
import Cart from '../Cart/Cart';
import './OrderReview.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { addToDb, decrement, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from 'react-router-dom';

const OrderReview = () => {

    const [cart, setCart] = useCarts();
    const history = useHistory();
    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(Product => Product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        // console.log(setCart([]))
        history.push('/shipping');
        setCart([]);
        // clearTheCart();
    }
    const handleDecrement = (key) => {
        setCart(cart =>
            cart.map((Product) => key === Product.key ? { ...Product, quantity: Product.quantity - (Product.quantity > 1 ? 1 : 0) } : Product));
        decrement(key)

    }
    const handleIecrement = (key) => {
        setCart(cart =>
            cart.map((Product) => key === Product.key ? { ...Product, quantity: Product.quantity + (Product.quantity < 100 ? 1 : 0) } : Product));
        addToDb(key)

    }
    return (
        <div className='review-container'>
            <div >
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                        handleDecrement={handleDecrement}
                        handleIecrement={handleIecrement}>

                    </ReviewItem>)
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