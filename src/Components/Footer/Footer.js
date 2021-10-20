import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-5 bg-dark ">
                <div className="p-3">
                    <h3 className="text-white">About Us</h3>
                    <p className="text-white">The Nazim's  Health Cure and  Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.</p>
                </div>
                <div className="p-3">
                    <h3 className="text-white">CONTACT INFO</h3>
                    <p className="text-white"> <i class="fas fa-map-marker-alt"></i> 23/2, Khilji Road, Block-B,
                        Shyamoli, Dhaka-1207</p>
                    <p className="text-white"> <i class="far fa-envelope"></i>  info@Nazim_Health_Cure.com</p>
                    <p className="text-white"> <i class="fas fa-phone-alt"></i> 10662</p>
                </div>

                <div className="p-3">
                    <h3 className="text-white">NAVIGATION</h3>
                    <div className='footer-navigation text-white'>
                        <Link className='footer-link' to='/doctors'> <i class="fas fa-arrow-right"></i> Doctor's</Link>
                        <Link className='footer-link' to='/about'> <i class="fas fa-arrow-right"></i> About</Link>
                        <Link className='footer-link' to='/ambulance'> <i class="fas fa-arrow-right"></i> Ambulance</Link>
                        <Link className='footer-link' to='/services'> <i class="fas fa-arrow-right"></i> Services</Link>

                    </div>
                </div>
            </div>
            <p className="text-center">© 2021 - Healthcare Diagnostics Center Limited. All rights reserved</p>
        </div>
    );
};

export default Footer;