import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../../Carousel/Carousel';
import FeaturedItems from './Featured/FeaturedItems';

const HomeLayout = () => {

    return (
        <div className='mt-5'>
            <Marquee className='text-3xl md:text-5xl lg:text-9xl font-extrabold italic opacity-30 uppercase'>
                Flat 40% off
            </Marquee>
            <Carousel></Carousel>
            <FeaturedItems></FeaturedItems>
        </div>
    );
};

export default HomeLayout;