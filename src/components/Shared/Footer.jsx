import React from 'react';
import { FaAmilia, FaAngleRight, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-950 text-white px-10 md:px-20 lg:px-40 pt-5 mt-20'>
            <div className='flex flex-col md:flex-row items-start justify-between pt-10 gap-5'>
                <div>
                    <Link to='/' className='flex items-center'>
                        <FaAmilia size={20} />
                        <h2 className='text-3xl font-bold lowercase'>Neoen</h2>
                    </Link>

                    <div className='flex gap-2 text-cyan-600 mt-2'>
                        <Link>
                            <FaFacebook />
                        </Link>
                        <Link>
                            <FaInstagram />
                        </Link>
                        <Link>
                            <FaTwitter />
                        </Link>
                    </div>
                </div>

                <div className='text-sm opacity-80'>
                    <p>About</p>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='text-sm opacity-80'>
                    <p>Shop</p>
                    <p>Sitemap</p>
                    <p>Contact</p>
                </div>
                <div className='text-sm opacity-80'>
                    <p>Shop</p>
                    <p>Sitemap</p>
                    <p>Contact</p>
                </div>

                <div className='text-sm opacity-80 gap-1'>
                    <p>Subscribe to the newsletter</p>
                    <div className='flex flex-row gap-1 items-center'>
                        <input className='bg-transparent border-b opacity-50 outline-none' type="email" name="email" placeholder="Enter email" />
                        <button className='border rounded-full p-1'>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className='py-10 flex flex-co items-center opacity-50'>
                <small>&copy;aneoen 2023</small>
                <div className='border-b opacity-40 w-[60%] mx-auto'></div>
                <small>Created By Solo</small>
            </div>
        </div>
    );
};

export default Footer;