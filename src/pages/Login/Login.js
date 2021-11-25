import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.png'
import google from '../../images/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { googleLogin, setUser, setErr, mailPassLogin, user, setLoading } = useAuth()

    const history = useHistory()
    const location = useLocation()

    const handelGoogle = () => {
        googleLogin().then((res) => {
            setLoading(true)
            setUser(res.user)
            history.push(location.state?.from || "/")


        }).catch(err => {
            setErr(err.message)
        }).finally(() => {
            setLoading(false)
        })

    }

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        mailPassLogin(data.email, data.password).then((res) => {
            setLoading(true)
            setUser(res.user)
            history.push(location.state?.from || "/")


        }).catch(err => {
            setErr(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Container >

            <Row className='d-flex justify-content-center align-items-center'>
                <Col className='p-5 py-5' style={{ boxShadow: "0px 2px 13px 1px rgba(0,0,0,0.75)", borderRadius: '1rem' }} lg={6} xs={10} md={6}>
                    <img src={logo} width='100' alt="" />
                    <h3 className="mb-5" >Sign in to unlock the best of URBAN TOURS</h3>
                    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='email.. ' className="w-100 px-2  py-3 rounded-3  border border-secondary border-2" {...register("email")} />
                        <input placeholder="password" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("password")} />
                        <input className="btn btn-outline-danger px-5 py-3 mt-4" type="submit" value='Login' />


                        <Button variant="outline-dark" onClick={handelGoogle} className='px-3 py-2 rounded-pill my-3 '><img src={google} width='20' className='me-2' alt="" />Sign In With Google</Button>
                        <p>Don't Have A Account ? <Link to="/register">Sign Up</Link></p>

                    </form>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;