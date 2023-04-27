import React from 'react';

const Item = ({ item }) => {
    const { title, image, desc, price, rating } = item;

    return (
        <div className="bg-slate-200 border border-black p-3 space-y-5">
            <img style={{ width: '400px', height: '200px' }} src={image} alt="Shoes" />
            <div className="">
                <h2 className="">{title}</h2>
                <p>{desc.slice(0, 50)}..</p>
            </div>
            <div className="flex justify-between">
                <div>$ {price}</div>
                <button className="">Buy Now</button>
            </div>
        </div>
    );
};

export default Item;