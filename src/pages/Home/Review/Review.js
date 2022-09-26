import React from 'react';
import './Review.css'
import person from '../../../images/user.png'
import star from '../../../images/star.png'
const Review = () => {
    return (
        <div className='d-flex align-items-center justify-content-between container review-area p-5 mt-5'>
            <div className='review-description'>
                <img src={person} alt="" />
                <h3>JOHN DOE</h3>
                <p>STUDENT</p>
                <p className='star'><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span><span><img src={star} alt="" /></span></p>
            </div>
            <div className='w-75'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga similique nam veritatis sed esse dolorum quisquam, iusto ex voluptas officia autem expedita! Quia ullam laborum quis voluptatem impedit magnam dolore, ipsam culpa quaerat fugiat nisi ab nemo sint facilis minima corrupti porro! Voluptatibus architecto delectus eligendi perferendis, porro ducimus!
                </p>
            </div>
        </div>
    );
};

export default Review;