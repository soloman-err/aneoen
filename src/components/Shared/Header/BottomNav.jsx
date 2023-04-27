import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    const [categories, setCategories] = useState([]);

    // Fetching categories from remote server:
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error))
    }, []);


    return (
        <div className='justify-center hidden md:static md:flex gap-3 mt-2'>
            {
                categories?.map((category) => <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className='hover:underline hover:font-bold underline-offset-4 uppercase'
                >
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default BottomNav;