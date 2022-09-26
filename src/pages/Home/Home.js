import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import MobileApp from './MobileApp/MobileApp';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <MobileApp></MobileApp>
            <Review></Review>
        </div>
    );
};

export default Home;