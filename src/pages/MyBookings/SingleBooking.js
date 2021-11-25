
import axios from 'axios';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SingleBooking = ({ order }) => {

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Tour Will Be Canceled !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://fathomless-lake-81751.herokuapp.com/mybookings/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Canceled!',
                            'Your Tour has been Canceled.',
                            'success'
                        )
                    }

                })

            }
        })
    }

    return (
        <Col>

            <Row className=" gx-4 " style={{ boxShadow: "0px 2px 13px 1px #ffc2a3", borderRadius: '1rem', border: '1px solid #e3bc30' }} >
                <Col xs={12} lg={6} md={6}>
                    <img style={{ borderRadius: "15px" }} className=" w-100 h-100 py-2" src={order.img} alt="" />
                </Col>
                <Col xs={12} lg={6} md={6} className="d-flex justify-content-center align-items-center py-5">
                    <div> <h4>{order.title}</h4>
                        <p style={{ textAlign: 'justify' }}> {order.info.slice(0, 200)}</p>
                        <h4>Total: <span className="fw-bolder text-danger ">${parseInt(order?.price) + 5}</span></h4> <small>including vat and service fee!</small>
                        <div className='mt-3'> <Button onClick={() => handelDelete(order._id)} variant="danger" className="px-3 py-3">Cancel This Tour <i className="fas fa-plane-slash"></i></Button></div>
                    </div>

                </Col>
            </Row>


        </Col>
    );
};

export default SingleBooking;