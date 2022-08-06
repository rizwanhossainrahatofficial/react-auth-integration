import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const {user}=useAuth()
    return (
        <div>
        <h3>this is home</h3>
        <h4>user:{user.displayName}</h4>
        </div>
    );
};

export default Home;