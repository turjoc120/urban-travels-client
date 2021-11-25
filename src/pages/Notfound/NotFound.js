
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notfound from "../../images/not-tour.jpg"

const NotFound = () => {
    const history = useHistory()
    return (
        <div className="">
            <img src={notfound} className="img-fluid" alt="" />
            <Button variant='danger' onClick={() => history.push('/')} className="px-4 py-3">Go Back To Home <i className="fa fa-home" aria-hidden="true"></i></Button>
        </div>
    );
};

export default NotFound;