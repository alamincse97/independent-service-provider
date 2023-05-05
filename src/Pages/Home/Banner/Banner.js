import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../Images/banner-1.png';
import banner2 from '../../../Images/banner-2.png';
import banner3 from '../../../Images/banner-3.png';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The Majestic Kashmir</h3>
                    <p>Now is the time to enjoy the beauty of the sea</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 tales"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Simply Istanbul Tour</h3>
                    <p>Want to get lost in the beauty of nature?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 tales"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Kathmandu World</h3>
                    <p>
                    St. Martin's Island is a small island in the northeastern part of the Bay of Bengal
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;