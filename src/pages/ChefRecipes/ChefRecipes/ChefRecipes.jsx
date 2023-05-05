import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';
import Recipes from '../Recipes/Recipes';

const ChefRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    const chefInfo = useLoaderData();
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://master-chefs-server-webprosen.vercel.app/chef-recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [id]);

    return (
        <div>
            <ChefBanner chefInfo={chefInfo}></ChefBanner>
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

export default ChefRecipes;