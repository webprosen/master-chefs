import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => isActive ? "text-red-600 text-lg font-semibold px-2 md:px-4 hover:text-red-900 transition-colors" : "text-white text-lg font-semibold px-2 md:px-4 hover:text-red-900 transition-colors"
        }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;