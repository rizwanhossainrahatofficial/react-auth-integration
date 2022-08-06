import userEvent from '@testing-library/user-event';
import React from 'react';
import { Route,Redirect, Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
// const {children,...rest}=props
        const {user}=useAuth()
    return (

            <div>
       {  user.email ?
        children:
        <Navigate to="/login" 
        
        ></Navigate>} 
       
            
            </div>
    );
};

export default PrivateRoute;