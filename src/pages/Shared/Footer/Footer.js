import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter.png'
import pinterest from '../../../images/pinterest.png'
const Footer = () => {
    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
            <div className='container py-4 py-md-5 px-4 px-md-3'>
                <div className='row'>
                    <div className="col-md-4">
                        <img src={logo} alt="" className='pb-4' />

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quaerat nesciunt soluta saepe commodi id? Repellat veritatis veniam dolorem. Eaque tempora quidem sunt possimus nesciunt nihil dolorem saepe cum animi!</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className='footer-title'>SOCIAL LINKS</h3>
                        <span className='social'><a href=""><img src={facebook} alt="" /></a><a href=""><img src={twitter} alt="" /></a><a href=""><img src={pinterest} alt="" /></a></span>
                    </div>
                    <div className="col-md-4">
                        <h3 className='pb-4 footer-title'>HELP LINKS</h3>
                        <h6 className='pb-2'>HOME</h6>
                        <h6 className='pb-2'>ABOUT US</h6>
                        <h6 className='pb-2'>RESULT</h6>
                        <h6 className='pb-2'>CONTACT US</h6>
                    </div>


                </div>

            </div>
        </footer>
    );
};

export default Footer;