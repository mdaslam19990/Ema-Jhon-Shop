import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(authContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password.length < 6) {
            setError("password have to be at least six charecter")
            return;
        }
        if(password !== confirm){
            setError("Password doesn't match")
            return;
        }

        setError('')

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(error => console.error(error))


    }
 
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log in</h2>
            <h4 className='error-title'>{error}</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <button className='login-btn' type='submit'>Sign Up</button>
            </form>
            <p className='account-title'>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default SignUp;