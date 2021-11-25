import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import covid from "../../../images/covid.png"
const Covid = () => {
    return (
        <Container style={{ boxShadow: "0px 2px 13px 1px #ffc2a3", borderRadius: '1rem', border: '1px solid #e3bc30' }}>
            <Row className="g-4">
                <Col lg={6} md={6} xs={12} className="d-flex justify-content-lg-center align-items-center py-3">
                    <div> <h2>Get the COVID-19 travel info <br /> you need</h2>
                        <p>Plan your next trip with confidence - get the <br /> latest entry requirements and quarantine <br /> info.</p>
                        <Button varant="outline-danger" className="px-3 py-2">Get Travel Updates <i class='fas fa-angle-right'></i></Button></div>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <img src={covid} className="img-fluid py-2" alt="" />
                </Col>

            </Row>
        </Container>
    );
};

export default Covid;