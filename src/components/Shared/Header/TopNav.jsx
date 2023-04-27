import React from 'react';
import { FaAmilia, FaBars, FaSearch, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className='px-5 md:px-0 flex items-center justify-between py-2 border-b-2 border-black'>
            <Link to='/' className='flex items-center'>
                <FaAmilia size={40} />
                <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold lowercase'>Neoen</h2>
            </Link>
            <div className='flex gap-3'>
                <div className='hidden md:static md:flex items-center gap-2'>
                    <input className='hidde border-4 border-black  outline-none rounded-full px-3 py-1 bg-black text-white' type="search" name='search' placeholder='search' />
                    <FaSearch size={20} />
                </div>
                <FaBars className='md:hidden' size={25} />
                <div className='hidden md:static md:flex gap-3 items-center'>
                    <FaShoppingCart />
                    <div className='flex gap-1'>
                        <Link className='border border-black px-2 py-1 font-extrabold' to='register'>
                            Sign up
                        </Link>
                        <Link className='bg-black md:px-3 border border-black text-white py-1 font-extrabold' to='login'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;