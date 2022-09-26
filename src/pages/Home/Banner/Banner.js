import React from 'react';
import './Banner.css'
import bannerImage from '../../../images/bannerimage.jpg'
const Banner = () => {
    return (
        <section className='banner-section'>
            <div className="container p-5">
                <div className=' text-center banner-title mt-5 mb-5'>
                    <h1>Master Maths And Science</h1>
                    <h1> for Classes 9 And 10</h1>
                    <h1> with Shivang Aggarwal </h1>
                    <h5 className='mt-5 mb-5'>B.Tech , PEC Chandigarh </h5>
                    <h3> Empowering Students Since 2010</h3>
                </div>
                <div className='shadow-lg'>
                    <img className='img-fluid  border rounded shadow' src={bannerImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;