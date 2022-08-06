import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/usefirebase';

const Login = () => {
    const {googleSignIn,githubSignIn}=useAuth()
    return (
        <div>
            <h2>Please login </h2>
            <button onClick={googleSignIn}>Google sign in</button>
            <br />
            <button onClick={githubSignIn}>Github Sign in</button>
            <br />
            <Link to='/registration'>New User?</Link>
        </div>
    );
};

export default Login;