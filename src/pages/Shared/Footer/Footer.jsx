import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#0e1628] first-letter'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-white border-b border-red-400'>
                    <div className=''>
                        <h2 className='text-3xl font-bold mb-4 text-red-600'>Master Chef's</h2>
                        <p className='leading-[22px] mb-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4 text-red-600'>Quick Links</h2>
                        <ul>
                            <li className='mb-2'>Home</li>
                            <li className='mb-2'>Blog</li>
                            <li className='mb-2'>About</li>
                        </ul>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4 text-red-600'>Our Chef's</h2>
                        <ul>
                            <li className='mb-2'>Pro Chef's</li>
                            <li className='mb-2'>Normal Chef's</li>
                            <li className='mb-2'>Intern Chef's</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mb-4 text-red-600'>Contact</h2>
                        <p className='mb-2'>524 Broadway , Italy</p>
                        <p className='mb-5'>+1 777 - 978 - 5570</p>
                    </div>
                </div>
                <div className='text-sm text-white pt-10'>
                    <p className='text-red-600 text-center'>© 2023 Master Chef's. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;