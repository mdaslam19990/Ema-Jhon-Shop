import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';
import "./Login.css";

const Login = () => {
    const { signOut } = useContext(authContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signOut(email, password)
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
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <button className='login-btn' type='submit'>Log in</button>
            </form>
            <p className='account-title'>New To Ema-Jhon? <Link to="/signup">Create an Account</Link></p>
        </div>
    );
};

export default Login;