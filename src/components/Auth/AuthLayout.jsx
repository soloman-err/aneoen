import React from 'react';
import Header from '../Shared/Header';
import Login from './Login';

const AuthLayout = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
        </div>
    );
};

export default AuthLayout;