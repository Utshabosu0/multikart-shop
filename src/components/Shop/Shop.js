import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // API
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                // console.log(key);
                // console.log(products);
                const addedProduct = products.find(product => product.key === key);
                // console.log(addedProduct);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    // console.log(quantity);
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
                // console.log(key, addedProduct);

            }
            setCart(storedCart);
        }
    }, [products])




    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);
        // Save to local storage for now
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        console.log(searchText);
    }
    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    name="" id="" placeholder='Search Products' />
            </div>
            <div className='shop-container'>
                <div className="product-container">

                    {
                        products.map(product => <Product key={product.key} product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;