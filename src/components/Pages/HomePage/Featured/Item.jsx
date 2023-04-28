import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaStarHalf } from 'react-icons/fa';


const Item = ({ item }) => {
    const { title, image, desc, price, rating } = item;

    return (
        <div className="p-3 space-y-5 flex flex-col justify-between rounded-lg shadow-xl hover:shadow-md">
            <img className='bg-cover shadow-lg object-cover object-center rounded-md' style={{ width: '400px', height: '200px' }} src={image} alt="Shoes" />
            <div className="">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className='text-slate-500'>{desc.slice(0, 50)}..</p>
            </div>
            <div>
                <div className='flex flex-row-reverse items-center justify-between px-2'>
                    <div className='flex text-center font-bold py-1 text-'>$ {price}</div>
                    <Rating
                        className='text-xs text-yellow-400'
                        readonly
                        placeholderRating={rating}
                        placeholderSymbol={
                            <FaStar />
                        }
                        emptySymbol={
                            <FaStarHalf />
                        }
                    />
                </div>
                <button className="rounded py-1 bg-cyan-100 font-bold w-full hover:bg-black hover:text-white">Buy Now</button>
            </div>
        </div>
    );
};

export default Item;