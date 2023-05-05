import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://master-chefs-server-webprosen.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);

    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20'>
                <h2 className="text-4xl text-center font-bold text-red-600">Our Chef's</h2>
                <p className="text-center mt-3 mx-auto mb-10">Here is our six master chef's. Lets explore their recipes</p>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chefs;