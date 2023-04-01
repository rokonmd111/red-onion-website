import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userContex } from '../../App';

const PrivetRoute = () => {
    const location = useLocation();

    const [isLogin, setIsLogin] = useContext(userContex);
    

    return isLogin ? <Outlet />
    : <Navigate to="/login" replace state={{from: location}}/>;
};

export default PrivetRoute;