import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const navLinkStyle = {
    style: 'border border-1 border-slate-700 hover:border-3 hover:border-slate-300 p-3 m-1 rounded-lg text-slate-500 hover:text-slate-100 font-normal hover:duration-800 hover:bg-slate-800',
} ;

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className='fixed w-full bg-slate-900'>
            <ul className='flex space-x-10 justify-center'>
                {location.pathname !== '/' && <NavLink to='/' className={navLinkStyle.style}> Home page</NavLink>}
                {location.pathname !== '/converter' && <NavLink to='/converter' className={navLinkStyle.style}>Converter</NavLink>}
                {location.pathname !== '/currency' && <NavLink to='/currency' className={navLinkStyle.style}> Fresh Currencies</NavLink>}
            </ul>  
        </nav>
    );
};

export {NavBar};