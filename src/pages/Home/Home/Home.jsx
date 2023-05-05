import React from 'react';
import { ToastContainer } from 'react-toastify';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Gallery from '../Gallery/Gallery';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Gallery></Gallery>
            <Newsletter></Newsletter>
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

export default Home;