import React from 'react';
import Home from '../Pages/Home';
import Header from '../Shared/Header';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default RootLayout;