import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                    <input type="email" />
                    <input type="password" />
                    <br />
                    <input type="submit" value="" />
            </form>
            <Link to='/login'>Are you already Registered?</Link>
        </div>
    );
};

export default Register;