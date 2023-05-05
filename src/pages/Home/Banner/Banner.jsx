import React from 'react';
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <div className='bg-yellow-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <div className='md:flex justify-between items-center'>
                    <div className='md:w-1/2'>
                        <LazyLoad height={409} width="100%" className='hidden md:block'>
                            <img src="banner-pizza.png" alt="" />
                        </LazyLoad>
                        <img src="banner-pizza.png" alt="" className='mx-auto md:hidden' />
                    </div>
                    <div className='md:w-1/2 mt-8'>
                        <h2 className='text-4xl md:text-5xl font-bold leading-[45px] md:leading-[55px]'>
                            Do You Love<br></br><span className='text-red-600'>Italian Pizza?</span>
                        </h2>
                        <p className='mt-5 text-justify w-full'>Pizza is a classic Italian dish that has become a global phenomenon, beloved by people of all ages and backgrounds. At its core, pizza consists of a round, flat bread dough that is topped with tomato sauce and cheese...</p>
                        <button className='bg-red-600 py-3 px-6 rounded-md text-white font-semibold mt-8 text-lg hover:bg-red-900 transition-colors duration-200'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;