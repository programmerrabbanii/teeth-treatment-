import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Bannar from '../components/Bannar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default MainLayout;