import React from 'react'
import { useAuth } from '../context/Auth.Context'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    const {currentUser } = useAuth();
    if(currentUser) {
        return children;
    }
    
    return <Navigate to="/login" replace/>
    
  
}

export default PrivateRoute