import React from 'react';
import Marquee from 'react-fast-marquee';
import Carousel from '../../Carousel/Carousel';
import Footer from '../../Shared/Footer';
import FeaturedItems from './Featured/FeaturedItems';
import Review from './Review';

const HomeLayout = () => {

    return (
        <div className='mt-10 md:mt-40 px-5'>
            <Marquee className='text-3xl md:text-5xl lg:text-9xl font-extrabold italic opacity-30 uppercase'>
                Flat 40% off
            </Marquee>
            <Carousel></Carousel>
            <FeaturedItems></FeaturedItems>
            <div className='mt-20'>
                <h4 className='font-bold text-2xl border-b-2'>Community Reviews</h4>
                <Review></Review>
                <Review></Review>
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;