import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
    <div>   
        <div className="flex">
            <Sidebar />
            <div className="w-full ml-16 md:ml-56">
                <Header/>
                <Outlet/> 
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Layout;