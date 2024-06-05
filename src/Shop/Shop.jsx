import React from 'react';
import AllProduct from '../componant/home/AllProduct';

const Shop = () => {
    return (
        <div className='mb-56'>
            <input placeholder='search your product' type="" className='border w-64 justify-center flex mx-auto px-5 py-3 mt-6 rounded-full' />
            <AllProduct></AllProduct>
        </div>
    );
};

export default Shop;