import { Elements, CardElemet, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarts from '../../hooks/useCarts';
import Cart from '../Cart/Cart';
import CheckoutForm from './CheckoutForm/CheckoutForm';





const stripePromise = loadStripe('pk_test_51Illt0KbMKN6aIlVGyxqnVprR4EKjKfHBwpml3GsuuI1DIVPSPEVe0s5qcbtDtHNhlMk5zXV5FrXHIyLFDEUwoLp00JvMVO5f4')
const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cart, setCart] = useCarts();

    const { orderId } = useParams();
    const [payment, setPayment] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/orders/${orderId}`)
            .then(res => res.json())
            .then(data => { setPayment(data); })
    }, [orderId]);
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div>
                <h2>please pay for:{payment.name}</h2>







            </div>


            <div>
                <Elements stripe={stripePromise}>
                    <form onSubmit={handleSubmit}>
                        <CardElemet
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <button type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </Elements>
            </div>
        </>
    );
};

export default Payment;