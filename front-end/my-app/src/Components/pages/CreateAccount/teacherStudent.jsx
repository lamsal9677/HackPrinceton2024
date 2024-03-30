import React, { useState } from 'react';
import './teacherStudent.css';
import Google from './Google.png';

const CreateAccount = () => {
    const [role, setRole] = useState('');

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='container-create-account'>
            <div className='left-side'>
                <h2>Select your role:</h2>
                <button onClick={() => handleRoleSelection('teacher')}>Teacher</button>
                <button onClick={() => handleRoleSelection('student')}>Student</button>
            </div>
            <div className='right-side'>
                <h2>Create Account</h2>
                <form onSubmit={handleFormSubmit} className='form'>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Create Password" />
                    <div className='checkbox-label'>   
                        <input type="checkbox" id="terms" />
                        <label for="terms" >I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Create Account</button>
                    <p>Already have an account? <a href='/login'>Login</a></p>
                    <p>Continue with </p>
                    <div className='social-media'>
                        <button><img src={Google} alt="Google" /></button>
                        <button>Facebook</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;