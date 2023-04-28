import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Item from './Item';

const FeaturedItems = () => {
    const items = useLoaderData();
    console.log(items);

    return (
        <div className='mt-10 px-5'>
            <h4 className='font-bold text-2xl border-b-2'>Featured Items</h4>

            <div className='flex items-center gap-2 mt-5 justify-between'>
                <div className='flex flex-row gap-3'>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>All products
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>Gadgets
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>Home appliance
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>tech
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>Misc
                        <FaAngleDown />
                    </Link>
                </div>
                <div>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50'>
                        Filter
                        <HiOutlineAdjustments size={20} />
                    </Link>
                </div>
            </div>

            <div className='mt-5 grid md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-20'>
                {
                    items.map((item) => <Item
                        key={item.id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default FeaturedItems;