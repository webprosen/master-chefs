import React from 'react';

const ChefBanner = ({ chefInfo }) => {
    const { chefName, chefPicture, chefDescription, yearsOfExperience, numberOfRecipes, likes } = chefInfo;

    return (
        <div className='bg-yellow-100'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20'>
                <div className="card card-side shadow-2xl flex-col md:flex-row bg-[#0e1628]">
                    <figure className='rounded-t-2xl rounded-bl-none md:rounded-tr-none md:rounded-bl-2xl'>
                        <img className='h-[600px]' src={chefPicture} alt="Chef" />
                    </figure>
                    <div className="card-body md:max-w-[60%] justify-center text-gray-300">
                        <h2 className="card-title font-bold text-red-600 text-4xl">{chefName}</h2>
                        <p className='flex-grow-0'>{chefDescription}</p>
                        <p className=' text-gray-500 flex-grow-0'>Years of experience: {yearsOfExperience}</p>
                        <p className=' text-gray-500 flex-grow-0'>Numbers of recipes: {numberOfRecipes}</p>
                        <p className=' text-gray-500 flex-grow-0'>Likes: {likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;