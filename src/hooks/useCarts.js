import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCarts = products => {
    const [cart, setCart] = useState([]);
    // product to be rendered on the uI


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
                    // set quantity
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
    return [cart, setCart];
};

export default useCarts;