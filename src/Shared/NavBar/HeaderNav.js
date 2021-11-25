import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import './HeaderNav.css'
import useAuth from '../../Hooks/useAuth';

const HeaderNav = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar bg="transparent" expand="lg" >
            <Container >
                <Navbar.Brand as={Link} to="/home" className='d-flex'><img src={logo} width='70' alt="" /><div className='brand'><span className='comfort'>URBAN</span><span className='dental'>TOURS</span></div></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link as={HashLink} to='/home#deals'>Deals</Nav.Link>

                        {user?.displayName && <>
                            <Nav.Link as={Link} to="/mybookings">My Bookings</Nav.Link>
                            <Nav.Link as={Link} to="/manageBookings">Manage Bookings</Nav.Link>
                            <Nav.Link as={Link} to="/addnew">Add Offers</Nav.Link>
                        </>}

                        {!user?.displayName && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {!user?.displayName && <Nav.Link as={Link} to="/register" ><Button variant="warning" className="rounded-pill px-4">SignUp</Button></Nav.Link>}


                    </Nav>
                    {user?.displayName && <Nav.Link as={Link} to="/">{user.photoURL ? <img width="39" className="rounded-pill me-2" src={user?.photoURL} alt="" /> : <i className="fas fa-user-circle me-1"></i>}{user?.displayName}</Nav.Link>}
                    {user?.displayName && <Button onClick={logOut} variant='outline-danger' className=" px-3 py-2 rounded-pill" >logOut</Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;