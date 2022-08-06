import React, { createContext } from 'react';
import useFirebase from '../Hooks/usefirebase';

 export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const allContext=useFirebase()
    // const {children}=props
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;