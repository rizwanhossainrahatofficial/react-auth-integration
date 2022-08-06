import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                    <input type="email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Register" />
            </form>
            <Link to='/login'>Are you already Registered?</Link>
        </div>
    );
};

export default Registration;