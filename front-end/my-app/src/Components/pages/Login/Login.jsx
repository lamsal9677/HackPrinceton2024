import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <img src="logo.png" alt="Logo" className='logo' />
            <form className='form'>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </form>
            <p>Continue with </p>
            <div className='social-media'>
                <button>Google</button>
                <button>Facebook</button>
            </div>
        </div>
    );
};

export default Login;