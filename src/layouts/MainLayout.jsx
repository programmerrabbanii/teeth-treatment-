import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Bannar from '../components/Bannar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;