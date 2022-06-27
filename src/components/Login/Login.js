import React from 'react';
import './Login.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                const user = (result.user);
                console.log(user);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Your Eamail' /> <br />
                    <input type="password" name="" id="" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to multikar <a href='/register'>Create Account</a></p>
                <div>---------Or---------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;