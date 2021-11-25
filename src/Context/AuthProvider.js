import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const allAuthContext = useFirebase()
    return (
        <authContext.Provider value={allAuthContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;