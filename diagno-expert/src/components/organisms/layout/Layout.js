import React from 'react';
import MenuNavBar from "../../molecules/menuNavBar";

const Layout = ({ children }) => {
    return (
        <div className='App'>
            <MenuNavBar/>
            {children}
        </div>
    );
};

export default Layout;