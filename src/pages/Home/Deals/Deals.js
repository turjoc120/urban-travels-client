import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SyncLoader } from 'react-spinners';
import DealsCard from './DealsCard';

const Deals = () => {
    const [deals, setDeals] = useState([])

    useEffect(() => {
        axios.get('https://fathomless-lake-81751.herokuapp.com/deals').then(res => {
            setDeals(res.data)

        })
    }, [])


    // loader 
    if (!deals.length) {
        return <SyncLoader color={"#F5A623"} loading={true} size={20} />
    }

    return (
        <Container className="my-5" id="deals">
            <h1>Today's Best Deals On Urban Travels Vacation <br /> Packages</h1>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {
                    deals.map(deal => <DealsCard deal={deal} key={deal._id}></DealsCard>)
                }


            </Row>
        </Container>
    );
};

export default Deals;