import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    // Display loading after user refresh the protected page
    if (loading) { return <CircularProgress /> }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;