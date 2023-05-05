import React from 'react';
import LazyLoad from 'react-lazy-load';

const About = () => {
    return (
        <div className='bg-yellow-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <div className='md:flex justify-between items-center flex-row-reverse'>
                    <div className='md:w-1/2'>
                        <LazyLoad height={408} width="100%" className='hidden md:block'>
                            <img src="burger.png" alt="" />
                        </LazyLoad>
                        <img src="burger.png" alt="" className='md:hidden' />
                    </div>
                    <div className='md:w-1/2 mt-8 md:pl-12'>
                        <h2 className='text-4xl md:text-5xl font-bold leading-[45px] md:leading-[55px]'>
                            Our Story<br></br><span className='text-red-600'>Food is Love?</span>
                        </h2>
                        <p className='mt-5 max-w-[460px] text-justify'>A chef is a professional cook who is trained and skilled in the preparation of food. Chefs can work in a variety of settings, from restaurants and hotels to private homes and catering companies. They are responsible for creating menus, sourcing ingredients, preparing and cooking food.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;