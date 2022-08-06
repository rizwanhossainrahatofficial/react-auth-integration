import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/usefirebase';
import './Header.css'

const Header = () => {
    const {user,logout}=useAuth()
    console.log(user)
    return (
        <div className='header'>
            
               <Link to='/home'>Home</Link>
               <Link to='/shipping'>Shipping</Link>
               <Link to='/placeorder'>place order</Link>
           <Link to='/login'>Login</Link>
           <Link to='/registration'>Registration</Link>
           <span>  {user.displayName}   </span>
         {user?.email && <button onClick={logout}>Log Out</button>}
        </div>
    );
};

export default Header;<h3>this is header</h3>