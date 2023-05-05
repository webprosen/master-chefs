import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [customHidden, setCustomHidden] = useState(false);

    const profileClick = () => {
        setCustomHidden(false);
    }

    const profileItemClick = () => {
        setCustomHidden(true);
    }

    const handleLogout = () => {
        logOut();
    }

    return (
        <>
            <div id="nav-only-desktop" className='bg-[#0e1628] border-b border-[#ccc] hidden md:block sticky top-0 z-50'>
                <div className='max-w-6xl mx-auto px-8 pt-4 pb-3 md:py-5'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold text-red-600'>
                            <Link to="/">Master Chef's</Link>
                        </h2>
                        <ul className='uppercase'>
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/blog">Blog</ActiveLink>
                            <ActiveLink to="/about">About</ActiveLink>
                        </ul>
                        <div className='flex items-center justify-center'>
                            {user && <div className="w-12 rounded-full overflow-hidden mr-4">
                                <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img className='cursor-pointer rounded-full w-full' src={user.photoURL} />
                                </a>
                                <Tooltip id="my-tooltip" />
                            </div>}

                            {user ? <button onClick={handleLogout} className='text-sm md:text-lg bg-red-600 py-2 px-4 rounded-md text-white font-semibold hover:bg-red-900 transition-colors duration-200'>Logout</button>
                                :
                                <Link to="/login">
                                    <button className='text-sm md:text-lg bg-red-600 py-2 px-4 rounded-md text-white font-semibold hover:bg-red-900 transition-colors duration-200'>Login</button>
                                </Link>}
                        </div>
                    </div>
                </div>
            </div>

            <div id="nav-only-mobile" className='bg-[#0e1628] border-b md:hidden sticky top-0 z-50'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className="flex items-center justify-between py-2">
                        <div className="">
                            <div className="dropdown">
                                <label onClick={profileClick} tabIndex={0} className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul onClick={profileItemClick} tabIndex={0} className={customHidden ? 'hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52' : 'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'}>
                                    <Link to="/">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link to="/blog">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                            Blog
                                        </li>
                                    </Link>
                                    <Link to="/about">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                            About
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <Link className='text-md font-bold text-white' to="/">Master Chef's</Link>
                        </div>
                        <div className="">
                            <div className='flex items-center justify-center'>
                                {user && <div className="w-8 rounded-full overflow-hidden mr-2">
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                        <img className='cursor-pointer rounded-full w-full' src={user.photoURL} />
                                    </a>
                                    <Tooltip id="my-tooltip" />
                                </div>}

                                {user? <button onClick={handleLogout} className='text-sm md:text-lg bg-red-600 py-1 px-2 rounded-md text-white font-semibold hover:bg-red-900 transition-colors duration-200'>Logout</button>
                                    :
                                    <Link to="/login">
                                        <button className='text-sm md:text-lg bg-red-600 py-2 px-4 rounded-md text-white font-semibold hover:bg-red-900 transition-colors duration-200'>Login</button>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;