import React from 'react';
import Header from '../Shared/Header/Header';
import Home from '../Pages/HomePage/Home';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default RootLayout;