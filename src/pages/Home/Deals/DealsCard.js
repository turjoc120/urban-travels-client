import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DealsCard = ({ deal }) => {
    const { title, info, img, price, rooms, place, _id } = deal;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div>
            <Col >
                <Card style={{ borderRadius: "1rem" }} className="init-card " >
                    <Card.Img style={{ borderRadius: "1rem" }} variant="top" height="250" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        <div>


                            <p> {info.slice(0, 60)}..<Link to={`/deals/${_id}`}>see more</Link> </p>
                            <small>Last Booking Date: <span className="bg-secondary px-2 py-1 text-light ms-2 rounded-pill"> {today}</span></small>
                            <p className="card-text mt-2">Place: <small className="text-muted">{place}</small></p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="text-danger fw-bolder">${price}</h3>
                                <Link to={`/deals/${_id}`}><button className="book-button">Book Now <i class='fas fa-angle-right'></i></button></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default DealsCard;