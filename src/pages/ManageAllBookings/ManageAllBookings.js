import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllBookings = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get('https://fathomless-lake-81751.herokuapp.com/allorders').then(res => {
            setOrders(res.data)
        })
    }, [orders])


    // update status
    const statusHandler = (id, order) => {
        const data = { status: "Completed" }
        if (order.status !== "Completed") {
            Swal.fire({
                title: 'Are You Sure ?',
                text: "Mark This Order As Completed",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.put(`https://fathomless-lake-81751.herokuapp.com/booking/update/${id}`, data).then((res) => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'This order has been Updated.',
                                'success'
                            )
                        }
                    })
                }
            })
        }


    }


    // delete an order 
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are You Sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://fathomless-lake-81751.herokuapp.com/mybookings/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'This Order has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    if (orders.length < 1) {
        return <Container className='mt-5'>
            <h3>No Bookings Here Yet</h3>
            <img className='w-50' src="https://image.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg" alt="" /></Container>
    }

    return (
        <Container className="my-5">
            <h2 className="mb-4">Manage All <span className="text-danger">Bookings</span> </h2>
            <h3 className="mb-4">Total Bookings <span className="text-danger">{orders.length}</span> </h3>
            <Table bordered hover size="lg" responsive>
                <thead >
                    <tr className="p-5">
                        <th>SN</th>
                        <th>Booked By</th>
                        <th>Package</th>
                        <th>Destination</th>
                        <th className="text-danger">Cost</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.email}</td>
                                <td>{order.title} </td>
                                <td>{order.place}</td>
                                <td className="text-danger fw-bolder">Price: ${order.price}</td>
                                <td><button onClick={() => statusHandler(order._id, order)} className={`btn ${order.status === "Pending" ? "btn-warning" : "btn-success"}  rounded-pill btn-sm`}>{order.status}</button></td>
                                <td><button onClick={() => deleteHandler(order._id)} className="btn btn-danger rounded-pill btn-sm">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>



        </Container>
    );
};

export default ManageAllBookings;