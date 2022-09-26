import React from 'react';
import './MobileApp.css'
import mobileapp from '../../../images/mobileapp.PNG'
const MobileApp = () => {
    return (
        <div className='d-flex align-items-center  justify-content-evenly  mobileapp-div'>
            <div className='p-5 mobile-app-title w-50 '>
                <h1 className='mb-5'>DOWNLOAD OUR MOBILE APP</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla harum sequi vel officia sapiente obcaecati minima eaque corrupti laboriosam itaque? Nulla temporibus deserunt blanditiis? Quisquam id consequuntur eum? Explicabo libero quo alias veritatis saepe nam autem numquam hic debitis tenetur eveniet error, consequatur optio, deleniti aut atque sequi voluptas provident.</p>
            </div>
            <div >
                <img className=' mt-[-200px] pop-up' src={mobileapp} alt="" />
            </div>

        </div>
    );
};

export default MobileApp;