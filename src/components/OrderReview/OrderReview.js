import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCarts from './../../hooks/useCarts';
import Cart from '../Cart/Cart';
import './OrderReview.css'
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [Products, setProducts] = useProducts();
    const [cart, setCart] = useCarts(Products);
    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(Product => Product.key !== key);
        setCart(newCart);
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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;