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

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2 mt-5 justify-between'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>All products
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>Gadgets
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>Home appliance
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>tech
                        <FaAngleDown />
                    </Link>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>Misc
                        <FaAngleDown />
                    </Link>
                </div>
                <div>
                    <Link className='border-2 rounded-full px-2 border-slate-300 flex items-center gap-1 bg-slate-50 justify-between'>
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