import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if (loading) {
        return <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;