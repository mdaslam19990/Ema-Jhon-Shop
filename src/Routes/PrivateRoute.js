import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
   const {user} = useContext(authContext);
   if(user && user.uid){
    return children;
   }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;