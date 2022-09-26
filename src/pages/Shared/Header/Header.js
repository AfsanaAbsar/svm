import React from 'react';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonials</a>
                            </li>


                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link ">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Log In</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;