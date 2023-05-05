import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='bg-yellow-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <section className="quick-list">
                    <div className="quick-list-left">

                        <div className="four-image">
                            <div className="quick-list-left-image"><img src="https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team1" /></div>
                            <div className="quick-list-left-image"><img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team1" /></div>
                            <div className="quick-list-left-image"><img src="https://images.pexels.com/photos/4252146/pexels-photo-4252146.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team1" /></div>
                            <div className="quick-list-left-image"><img src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=600" alt="team1" /></div>
                        </div>

                    </div>
                    <div className="quick-list-right">
                        <h2 className='text-4xl md:text-5xl font-bold leading-[45px] md:leading-[55px]'>
                            Explore Our<br></br><span className='text-red-600'>Gallery</span>
                        </h2>
                        <p className='mt-5 text-justify'>Food and chefs are two inseparable elements in the world of culinary arts. Food is not just a necessity, but it is also a way to bring people together, share cultures and traditions, and create unforgettable experiences.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;