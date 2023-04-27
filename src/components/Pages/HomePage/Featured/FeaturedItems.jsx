import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from './Item';

const FeaturedItems = () => {
    const items = useLoaderData();
    console.log(items);

    return (
        <>
            <h4>Featured Items</h4>
            <div className='mt-5 p-5 grid grid-cols-3 gap-3'>
                {
                    items.map((item) => <Item
                        key={item.id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
        </>
    );
};

export default FeaturedItems;