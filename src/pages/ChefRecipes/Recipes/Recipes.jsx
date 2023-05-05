import React from 'react';
import { ToastContainer } from 'react-toastify';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20'>
                <h2 className="text-3xl text-center font-bold text-red-600">All Recipes</h2>
                <p className="text-center mt-3 mx-auto mb-10">Lets explore all recipes! Learn, cook, eat!</p>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2'>
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                    }
                </div>
            </div>
            <ToastContainer position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={true}
                theme="light">
            </ToastContainer>
        </div>
    );
};

export default Recipes;