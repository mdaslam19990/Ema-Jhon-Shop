import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/Firebase.config"
import { useState } from 'react';

const auth = getAuth(app)

export const authContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOut = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, createUser, signOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;