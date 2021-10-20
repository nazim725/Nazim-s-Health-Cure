import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const {user,handleRegistration,handleEmailChange,handlePasswordChange,handleGoogleSignIn,error}=useAuth()
    const [isLoad,setIslOad]=useState(true)
    return (
       
            <div className="mx-5">
                <Form onSubmit={handleRegistration}>
                    <h2 className="text-center text-primary mt-4"> Create Account</h2>
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
                {
                    user.email &&  <div className="mb-3 text-warning" >A verification email has been sent to your email </div>
                    
                }
                <Button variant="primary" type="submit">
                   Create Account
                </Button>
                <br />
              

                <Button className="mt-3 mx-auto" onClick={handleGoogleSignIn}><i class="fab fa-google"></i>   Google Sign In </Button>
                </Form>

                <p>Already Have an Account?  <Link className='text-decoration-none' to='/login'>Please Login</Link></p>

            
        </div>
    );
};

export default Register;