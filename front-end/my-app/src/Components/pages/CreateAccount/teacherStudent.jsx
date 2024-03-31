import React, { useState } from 'react';
import './teacherStudent.css';
import Google from './Google.png';
import Student from './student.png';
import Teacher from './teacher.png';
import { Link } from 'react-router-dom';

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
                <button className='role-image' onClick={() => handleRoleSelection('teacher') }>
                    <img src={Teacher} alt="Teacher" className='role-image' />
                </button>
                <button className='role-image' onClick={() => handleRoleSelection('student')}>
                    <img src={Student} alt="Student" className='role-image' />
                </button>
            </div>
            <div className='right-side'>
                <h2>Create Account</h2>
                <form onSubmit={handleFormSubmit} className='form'>
                    <input type="text" placeholder="First Name" id="fillIn" />
                    <input type="text" placeholder="Last Name" id="fillIn" />
                    <input type="email" placeholder="Email Address" id="fillIn" />
                    <input type="password" placeholder="Create Password" id="fillIn" />
                    <div className='checkbox-label'>   
                        <input type="checkbox" id="terms" />
                        <label for="terms" >I agree to the terms and conditions</label>
                    </div>
                    <Link to='/login'>
                    <button type="submit" id="submit">Create Account</button>
                    </Link>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <p>Or</p>
                    <p>Continue with </p>
                    <div className='social-media-create'>
                        <img src={Google} alt="Google" className='socials' />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;