import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../../images/image-2.jpeg'
import img2 from '../../../images/image-3.jpg'
import img3 from '../../../images/image-4.jpeg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        height="300"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        height="300"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        height="300"
                        />
                        
                    </Carousel.Item>
                    </Carousel>
            
        </div>
    );
};

export default Banner;