import React from 'react';
import './Login.css';
import Google from '../../pages/CreateAccount/Google.png';
import { Link } from 'react-router-dom';


const Login = () => {
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return (
        <div className='container'>
            <img src="logo.png" alt="Logo" className='logo' />
            <form onSubmit={handleLoginSubmit} className='form'>
                <input type="email" placeholder="Email" id="fillIn" />
                <input type="password" placeholder="Password" id="fillIn"  />
            </form>
            <Link to='/Summary'>
            <button type="submit" id="submit">Login</button>
            </Link>
            <p>Continue with </p>
            <div className='social-media'>
                <img src={Google} alt="Google" className='socials' />
            </div>
        </div>
    );
};

export default Login;