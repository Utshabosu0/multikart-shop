import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Home.css'
import HomeProduct from '../HomeProduct/HomeProduct';
import Footer from '../Footer/Footer';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // product to be rendered on the uI
    // API
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

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




    // const handleAddToCart = (product) => {
    //     // console.log(product)
    //     const newCart = [...cart, product];
    //     setCart(newCart);
    //     // console.log(product);
    //     // Save to local storage for now
    //     addToDb(product.key)
    // }

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.key === selectedProduct.key);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.key !== selectedProduct.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.key);
    }

    return (
        <>

            <div className='home-container'>

                <div className='home-product-container'>
                    {
                        products.map(product => <HomeProduct key={product.key} product={product}
                            handleAddToCart={handleAddToCart}></HomeProduct>)
                    }
                </div>



                <div className="home-cart-container">
                    <Cart cart={cart}>
                        <a href="/review">
                            <button className="btn-regular">Review Your Order</button></a>
                    </Cart>
                </div>

            </div>
            <Footer></Footer>
            {/* 
            <div className="pageination">
{
    [...Array(pageCount).keys()].map(number =>
        <button
            className={number === page ? 'selected' : ''}
            key={number}
            onClick={() => setPage(number)}
        >{number + 1}</button>)
}
</div>


const [cart, setCart] = useCarts();
const [page, setPage] = useState(0);
const [pageCount, setPageCount] = useState(0);
const size = 9;
// product to be rendered on the uI
// API
useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data.result);
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        });
}, [page]); */}
        </>
    );
};



export default Home;
// "react-router": "^6.3.0",

