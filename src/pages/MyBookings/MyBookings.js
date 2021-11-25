import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import SingleBooking from './SingleBooking';


const MyBookings = () => {
    const [myOrders, setMyOrders] = useState([])

    const { user } = useAuth()

    useEffect(() => {
        axios.get(`https://fathomless-lake-81751.herokuapp.com/mybookings/${user.email}`).then(res => {
            setMyOrders(res.data)
        })
    }, [myOrders])

    if (!myOrders.length) {
        return <Container className='mt-5'>
            <h3>You Don't Have Any Bookings Yet</h3>
            <img className='w-50' src="https://i.ibb.co/k8HrZbB/empty.png" alt="" /></Container>
    }
    return (
        <Container className='my-5'>
            <h2>All Your <span className="text-danger">Bookings</span> Are Here</h2>
            <Row lg={1} md={1} xs={1} className="g-5 my-3">
                {
                    myOrders.map(order => <SingleBooking key={order._id} setMyOrders={setMyOrders} order={order}></SingleBooking>)
                }
            </Row>
        </Container>
    );
};

export default MyBookings;