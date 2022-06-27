import React from 'react';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register:Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Eamail' /> <br />
                    <input type="password" name="" id="" placeholder='Your Password' /> <br />
                    <input type="password" name="" id="" placeholder='Re-Enter Password' /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
                <div>---------Or---------</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;