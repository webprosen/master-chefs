import { Rating } from '@smastrom/react-rating';
import React from 'react';
import '@smastrom/react-rating/style.css';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipe = ({ recipe }) => {
    const [favourite, setFavourite] = useState(false);
    const { recipeName, ingredients, cookingMethod, rating } = recipe;

    const handleFavourite = () => {
        setFavourite(true);
        toast.success('Recipe added sucessfully!');
    }

    return (
        <div className="card bg-base-100 shadow-2xl border-l-4 border-red-600">
            <div className="card-body">
                <h2 className="card-title font-bold text-red-600">{recipeName}</h2>
                <div className='text-gray-600 mb-1'>
                    <p className='font-bold'>Ingredients:</p>
                    <ul className='capitalize list-inside list-disc'>
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className='text-gray-600'>
                    <p className='font-bold mb-1'>Ingredients:</p>
                    <p>{cookingMethod}</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className='max-w-[140px] flex'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={Math.round(rating)}
                            readOnly
                        />
                        <p className='ml-2 font-bold text-[#e68528]'>{Math.round(rating)}</p>
                    </div>
                    <div>
                        <button disabled={favourite} onClick={handleFavourite} className={favourite ? 'opacity-50 flex items-center text-sm md:text-lg bg-red-600 py-2 px-4 rounded-md text-white font-semibold' : 'flex items-center text-sm md:text-lg bg-red-600 py-2 px-4 rounded-md text-white font-semibold'}>Favourite <FaRegHeart className='ml-1 mt-1'></FaRegHeart> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;