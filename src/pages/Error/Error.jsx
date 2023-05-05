import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Error = () => {
    return (
        <>
            <Header></Header>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='py-20'>
                    <div className='text-center'>
                        <img className='max-w-[300px] md:max-w-[500px] mx-auto w-full' src="/error.png" alt="" />
                        <h2 className='font-bold text-4xl md:text-7xl text-center mb-8 leading-[60px]'>Page Not Found</h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;