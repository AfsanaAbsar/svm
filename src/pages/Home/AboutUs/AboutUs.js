import React from 'react';
import './AboutUs.css'
import aboutimg from '../../../images/aboutimage.png'
const AboutUs = () => {
    return (
        <div className='d-flex align-items-center justify-content-start container p-5'>
            <div className=' border rounded shadow about-image-div me-5'>
                <img src={aboutimg} alt="" />
            </div>
            <div className='ps-5 w-50 about-us-description'>
                <h1 className='text-center pb-5'>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit reprehenderit deleniti ratione quidem dolores sapiente dignissimos animi reiciendis laborum illo officiis ad unde voluptatum, possimus architecto perferendis, dolorum eligendi optio enim recusandae ut. Soluta iusto quidem pariatur numquam obcaecati placeat recusandae accusantium. Assumenda ut dicta iure aliquam veniam perspiciatis.</p>
                <div >
                    <div className='row  about-description-area pb-5'>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                        <div className='col-lg-5 shadow-lg p-3 m-2 rounded'>lorem ipsum</div>
                    </div>
                    <button className='about-btn border-0 rounded p-3'>EXPLORE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;