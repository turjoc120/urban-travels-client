
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const DealBooking = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams()
    const serviceFee = 5
    const [deals, setDeals] = useState({})
    const history = useHistory()

    const { user } = useAuth()

    useEffect(() => {
        axios.get(`https://fathomless-lake-81751.herokuapp.com/deals/${id}`).then(res => {
            setDeals(res.data)
        })
    }, []);

    const handelBack = () => {
        history.push("/");
    };

    const onSubmit = data => {
        deals.email = user.email;
        deals.status = "Pending";
        delete deals._id;

        axios.post('https://fathomless-lake-81751.herokuapp.com/deals/booking', deals).then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    'Great!',
                    'Your Booking is being reviewed..',
                    'success'
                )
            }
        })


    };

    return (
        <Container className="my-5 ">
            <div className="d-flex justify-content-start">
                <Button onClick={handelBack} variant="tranparent" className="mb-4 fs-5"><i className="fas fa-arrow-circle-left fs-4"></i> Go Back </Button>

            </div>
            <Row className="g-5">


                {/* booking sec  */}

                <Col style={{ boxShadow: "0px 2px 13px 1px rgba(0,0,0,0.75)" }} className="rounded py-3 px-5" xs={12} lg={6} md={6}>
                    <div className="d-flex justify-content-between align-items-center" style={{ textAlign: 'left' }} >
                        <span> <h5 className="mt-5 mb-3 ">Price details: ${deals?.price} </h5>
                            <h5>Service Fee : ${serviceFee}</h5></span>
                        <h3 className="mt-5 mb-3 ">Total : ${parseInt(deals?.price) + serviceFee} </h3>
                    </div>

                    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mt-4 mb-1 fw-bold">Persinal Info</p>
                        <input defaultValue={user.displayName} className="w-100 px-2  py-3 rounded-3  border border-secondary border-2" {...register("name")} />
                        <input defaultValue={user.email} className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("email")} />
                        <div >
                            <p className="mt-4 mb-1 fw-bold">Billing address</p>
                            <input style={{ borderTopLeftRadius: '10px', borderTopRightRadius: "10px", border: "2px solid lightgray" }} className="w-100 px-2 py-3" {...register("street")} placeholder='Street Address..' />

                            <input className="w-100 px-2  py-3" {...register("apt")} placeholder='Apt OR Suite..' />
                            <input className="w-100 px-2  py-3" {...register("city")} placeholder='city' />
                            <input style={{ borderBottomLeftRadius: "10px", border: "2px solid lightgray" }} className="w-50 px-2  py-3" {...register("state")} placeholder='state' />
                            <input style={{ borderBottomRightRadius: '10px', border: "2px solid lightgray" }} className="w-50 px-2  py-3" type='number' {...register("zip")} placeholder='state' />
                        </div>
                        <small className="mt-5">By selecting the button below, I agree to the Host's House Rules, UrbanTours's COVID-19 Safety Requirements and the Guest Refund Policy. I agree to pay the total amount shown if the host accepts my booking request.</small>
                        <input className="btn btn-danger px-5 py-3 mt-5" type="submit" value='Proceed To Checkout' />
                    </form>
                    <div style={{ textAlign: "left" }} className="mt-5">
                        <Link to="/">Enter A Cupon</Link>
                        <div className="mt-4">
                            <h4>Cancellation policy</h4>
                            <p>Free cancellation before 9:00 AM on Nov 8. After that, cancel before 9:00 AM on Nov 9 and get a full refund, minus the first night and service fee. Learn more</p>
                            <p className="mt-4">
                                Our Extenuating Circumstances policy does not cover travel disruptions caused by COVID-19. <Link to="/">Learn more</Link>
                            </p>
                            <h5 className="mt-4">
                                Your reservation won’t be confirmed until the Host accepts your request (within 24 hours).
                            </h5>
                            <p>You won’t be charged until then.</p>


                        </div>
                    </div>
                </Col>


                {/* hotel info  */}


                <Col className='px-5' xs={12} lg={6} md={6}>
                    <h4 className="mt-5 mb-3">TOUR | HOTEL DESCRIPTION</h4>
                    <img src={deals.img} className="img-fluid mb-4" alt="" />
                    <Row className="gy-3">
                        <Col lg={6} >
                            <img src={deals?.img2} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={6}>
                            <img src={deals?.img3} className="img-fluid" alt="" />
                        </Col>
                    </Row>

                    <h3 className="my-5">{deals?.title}</h3>

                    <p style={{ textAlign: "justify" }} className="my-4"> <span className="fs-4">TOUR | HOTEL INFO :</span>  {deals?.info}</p>
                    <h4 className='mt-4'>HOTEL AMENITIES AND SERVICES</h4>
                    <ul style={{ textAlign: "left" }}>
                        <li>24 hour front desk</li>
                        <li>24 hour gym</li>
                        <li>Bar</li>
                        <li>Boardroom</li>

                        <li>EV Charging Station</li>
                        <li>Luggage storage</li>
                        <li>Golf nearby</li>
                        <li>Garden</li>
                        <li>Free wi-fi</li>
                        <li>Free parking</li>
                    </ul>
                    {deals?.rooms && <h5 style={{ textAlign: "left" }}>ROOMS : {deals?.rooms}</h5>}
                    <h5 style={{ textAlign: "left" }}>CITY : {deals?.place}</h5>

                    <p style={{ textAlign: "left" }} className="card-text"><small className="text-muted">{deals?.place}</small></p>
                </Col>

            </Row>
        </Container >
    );
};

export default DealBooking;