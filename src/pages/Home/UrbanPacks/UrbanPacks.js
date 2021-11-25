import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import topvisited from '../../../images/topvisited.jpg'
import '../Header/HeroSec.css';

const UrbanPacks = () => {
    return (
        <Container className="my-5">
            <h2>It’s time to plan your next <span className="text-danger">Urban</span> trip.</h2>
            <h4 className="my-5">Take in the beauty of it all – wild rivers, scenic bikeways, mountain vistas, abundant farmlands – and show your love for the people who make those place so special.</h4>
            <Row className="gx-4 my-5">
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2019/04/2019_threesisters_elenapressprich_slide00.jpg" alt="" />
                    <button className="tour-button book-button"> HIKING TOUR <i class='fas fa-angle-right'></i></button>

                </Col>
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2019/04/2019_cycleoregon_joyride_russroca02.jpg" alt="" />
                    <button className="tour-button book-button"> BICYCLING  <i class='fas fa-angle-right'></i></button>

                </Col>
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2017/03/MarchOutdoor_slideshow_kids5.jpg" alt="" />
                    <button className="tour-button book-button"> ADVENTURE <i class='fas fa-angle-right'></i></button>

                </Col>
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2016/09/Oct_slideshow_Haunted2-1.jpg" alt="" />
                    <button className="tour-button book-button">HISTORIC  <i class='fas fa-angle-right'></i></button>

                </Col>
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2016/09/Oct_slideshow_Haunted4.jpg" alt="" />
                    <button className="tour-button book-button">HOMESTAYS <i class='fas fa-angle-right'></i></button>

                </Col>
                <Col lg={4} xs={12} md={6} className="tour-catagory">
                    <img className="img-fluid" src="https://traveloregon.com/wp-content/uploads/2021/09/2021Oct_mushroom_hands.jpg" alt="" />
                    <button className="tour-button book-button">  FOOD TRAILS <i class='fas fa-angle-right'></i></button>

                </Col>

            </Row>
            <div className="my-5 guideline d-flex justify-content-center align-items-center">
                <div className="mb-5 p-5">
                    <h1 className="fw-bolder text-black">WE KNOW, THE WORLD IS BIG!</h1>
                    <h4>You might be excited to explore but feels like you are lost!</h4>
                    <p>thats why we are here to help</p>
                    <Button variant="danger" className="px-4 py-2">EXPLORE THE WORLD <i class="fas fa-globe-europe"></i></Button>
                </div>
            </div>
            <Row className="my-5">
                <Col lg={6} md={6} xs={12} className="d-flex justify-content-center align-items-center p-5">
                    <div>
                        <h3 >Our most visited destinations by international tourist arrivals</h3>
                        <div className="d-flex justify-content-evenly align-items-center my-4">
                            <h5><i class="fas fa-award"></i> France</h5>
                            <h5>124k Tours</h5>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center my-4">
                            <h5><i class="fas fa-award"></i> Spain</h5>
                            <h5>98k Tours</h5>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center my-4">
                            <h5><i class="fas fa-award"></i> China</h5>
                            <h5>78k Tours</h5>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center my-4">
                            <h5><i class="fas fa-award"></i> Italy</h5>
                            <h5>66k Tours</h5>
                        </div>
                        <Button variant="outline-danger" className="px-3 py-2">Pick Your Choice <i className='fas fa-angle-right'></i></Button>
                    </div>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <img className='img-fluid' src={topvisited} alt="" />
                </Col>
            </Row>
            <Row className="g-2">
                <Col lg={6} md={6} xs={12} className='guide d-flex justify-content-center align-items-center'>
                    <div className="semiFoot p-4">
                        <h6 className="fw-bold">Stil Confused! <br /> Get help From Our Registerd Travel Guide </h6>
                        <button className="btn btn-warning btn-sm mt-2 rounded-pill"  >Contact <i class="fas fa-phone-alt"></i></button>
                    </div>
                </Col>
                <Col lg={6} md={6} xs={12} className="subscribe d-flex justify-content-center align-items-center">
                    <div className="">
                        <h5 className="fw-bold bg-light py-1 px-5">Subscribe to our Newsletter </h5>
                        <form class="form-inline" method="post">
                            <div ><input class="form-control" type="email" name="email" placeholder="Your Email" /></div>
                            <div ><button className="btn btn-warning btn-sm mt-2 rounded-pill"  >Subscribe <i className="fab fa-telegram-plane"></i> </button></div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default UrbanPacks;