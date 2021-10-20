import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";


const Login = () => {
    const {setError,setUser, handleLogin, handleEmailChange, handlePasswordChange, signInUsingGoogle, error } = useAuth()

    const history = useHistory();
    const location = useLocation()
    const redirect = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
                const user = result.user;
                console.log(user)
                history.push(redirect)
            })

    }
    
    

    return (
        <div className="mx-5">

            <Form onSubmit={handleLogin}>
                <h2 className="text-center text-primary mt-4">Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>

                <div className="mb-3 text-danger" >{error}</div>
                <Button  variant="primary" type="submit">
                    Login
                </Button>
                <br />


                <Button className="mt-3 mx-auto" onClick={handleGoogleLogin}><i class="fab fa-google"></i>  Google Sign In </Button>
            </Form>

            <p>New to Nazim's Health Cure? <Link className='text-decoration-none' to='/register'>Create Account</Link></p>


        </div>
    );
};

export default Login;