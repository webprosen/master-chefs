import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <h2 className='text-4xl md:text-4xl font-bold text-red-600 text-center'>Newsletter</h2>
                <h4 className='text-center font-semibold text-md sm:text-xl mt-3'>Subscribe to get our latest update!</h4>
                <div className='mt-6 flex justify-center'>
                    <input type="text" placeholder='name@example.com' className='border py-3 px-4 mr-3 rounded-md max-w-[320px] w-full border-red-600 placeholder:text-gray-600'/>
                    <button className='bg-red-600 py-3 px-4 text-white font-semibold rounded-md hover:bg-red-900 transition-colors duration-200'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;