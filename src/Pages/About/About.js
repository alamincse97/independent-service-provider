import React from 'react';
import aboutImg from '../../Images/naem.jpg';

import './About.css';


const About = () => {
    return (
        <div className='container d-flex my-4  align-items-center'>
            <div className='w-50'>
                <img className='about-img' src={aboutImg} alt="" />
            </div>
            <div className='w-50 px-4 '>
                <h2>About Me</h2>
                <p><b>Hello!</b> <br /> I am <span className='text-warning'><b>Abu Naem</b></span>, I work with wordpress, customize the theme, make woocommerce website or any website with wordpress.I have about 4 years working experience with wordpress on fiverr.But I want to learn more to develop skills.My dream is to be a successful freelancer.I like to work from home and do freelancing, so I want to improve my skill.</p>
                <button className='btn btn-warning text-white fw-semibold'>Call Now</button>
            </div>
        </div>
    );
};

export default About;