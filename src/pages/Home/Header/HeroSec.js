import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './HeroSec.css'


const HeroSec = () => {


    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100 slide-img"
                    src="https://media.tdc.travel/tdc_media/tmp/new/1634328009.2000.big-banner-BIG.jpg"
                    alt="First slide"
                />
                <div className="text-white captions" >
                    <h1 >Book Early. Save Big.</h1>
                    <h5>SAVE on vacation packages to our hottest beach destinations.</h5>

                    <Button variant='outline-light' className="hero-button mt-3">Book Your Trip <i className="fas fa-plane-departure"></i></Button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src="https://media.tdc.travel/tdc_media/tmp/new/1633640702.2000.big-banner-BIG.jpg"
                    alt="Second slide"
                />

                <div className="text-white captions"  >
                    <h1 >Take the worry out of any trip!</h1>
                    <h5>NEW! Out of Country COVID-19 Insurance Coverage</h5>
                    <Button variant='outline-light ' className='hero-button mt-3'>Contact Now <i className="fas fa-map-marker-alt"></i></Button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src="https://media.tdc.travel/tdc_media/tmp/new/1634306151.2000.big-banner-BIG.jpg"
                    alt="Third slide"
                />

                <div className="text-white captions" >
                    <h1 >Flexible Booking!</h1>
                    <h5>Up-to-date information on holidaying on Your Favorite Place right now.</h5>
                    <Button variant='outline-light' className='hero-button mt-3'>Emergency Booking <i className="fas fa-bus"></i></Button>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSec;