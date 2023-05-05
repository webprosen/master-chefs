import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl ring-red-600">
                <figure className=''>
                    <LazyLoad height={300} width="100%">
                        <img height={300} src={chefPicture} alt="Shoes" />
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{chefName}</h2>
                    <p className=' text-gray-500'>Years of experience: {yearsOfExperience}</p>
                    <p className=' text-gray-500'>Numbers of recipes: {numberOfRecipes}</p>
                    <p className=' text-gray-500'>Likes: {likes}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/chef-recipes/${id}`}>
                            <button className='ring-1 ring-red-600 text-red-600 py-2 px-4 rounded-md font-semibold mt-8 text-md hover:bg-red-600 hover:text-white transition-colors duration-300'>View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;