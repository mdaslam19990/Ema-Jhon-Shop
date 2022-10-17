import React from 'react';
import { createContext } from 'react';

const authContext = createContext();

const UserContext = ({children}) => {

    const authInfo = {}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;