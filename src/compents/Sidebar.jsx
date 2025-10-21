import React, { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import {LuBox, LuUser, LuBotMessageSquare, LuCalendar} from "react-icons/lu";
import { FaUserMd } from "react-icons/fa";
//Icons over

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    }
    const SIDEBAR_LINKS = [
        {id:1, Path:"/", name:"Home", icon:<LuBox size={20}/>},
        {id:2, Path:"/members", name:"Members", icon:<LuUser size={20}/>},
        {id:3, Path:"/patients", name:"Patients", icon:<FaUserMd size={20}/>},
    ]
    return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 border-r h-screen pt-8 px-4 bg-white">
        {/* Logo */}
        <div className="mb-8">
            <img src="" alt="Logo" className="w-28 hidden md:flex"/>
            <img src="" alt="Logo" className="w-8 flex md:hidden"/>
        </div>
        {/* Logo */}
        {/* Navigation Links */}
        <ul className="mt-6 space-y-6">
            {
            SIDEBAR_LINKS.map((link,index) => (
                <li key={index} className={'font-medium rounded-md py-2 px-3 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : "" }'}>
                    <Link to={link.Path} className="flex justify-center md:justify md:justify-start items-centre md:space-x-5 onclick={() => handleLinkClick(index)}>">
                    <span>{link.icon}</span>
                    <span className="text-sm text-gray-500 hidden md:flex">{link.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
        {/* Navigation Links */}
        <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
            <p className="flex items-center space-x2 text-xs text-white py-2 px-5 rounded-full bg-gradient-to-r from bg-indigo-500 to-violet-600">
                {" "}
                <span>?</span><span className="hidden md:flex">Need Help?</span>
            </p>
        </div>
    </div>
    );
};

export default Sidebar;