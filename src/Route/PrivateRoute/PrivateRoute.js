import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();

    if(loading) {
        return <h2 className="text-4xl">Loading...</h2>
    }
    if(user) {
        return children
    }
    return <Navigate to='/signin' state={{from: location} } replace></Navigate>
};

export default PrivateRoute;