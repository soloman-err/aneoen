import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Review = () => {
    return (
        <div className='flex gap-5 bg-yellow-50 p-5 mt-10 items-start w-[70%] lg:w-[50%] mx-auto'>
            <img className='w-[60px] h-[60px] rounded-full' src="https://github.com/soloman-err/imagination/blob/main/luna.jpg?raw=true" alt="" />
            <div className='text-slate-700'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur animi cumque nulla suscipit voluptas similique!</p>

                <div className='flex items-center justify-between mt-3 pe-10'>
                    <Rating
                        className='text-xs text-yellow-400'
                        readonly
                        placeholderRating={4.5}
                        placeholderSymbol={
                            <FaStar />
                        }
                        emptySymbol={
                            <FaStarHalf />
                        }
                    />

                    <p className='text-end'>
                        <small className='text-slate-500'>-Luna Armeni</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;