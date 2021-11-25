import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import google from "../../images/google.png";

const Register = () => {
    const { googleLogin, setUser, mailPassRegister, user, handelName, setErr, error, setLoading } = useAuth()
    const { register, handleSubmit } = useForm();

    const history = useHistory()

    const handelGoogle = () => {
        googleLogin().then((res) => {
            setLoading(true)
            setUser(res.user)
            history.push('/')
        }).catch(err => {
            setErr(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }


    const onSubmit = data => {
        mailPassRegister(data.email, data.password).then((res) => {
            setLoading(true)
            setUser(res.user)
            handelName(data.name)
            history.push('/')
        }).catch(err => {
            setErr(err.message)
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <Container className='my-5'>

            <Row className='d-flex justify-content-center align-items-center '>
                <Col className='p-5 py-5' style={{ boxShadow: "0px 2px 13px 1px rgba(0,0,0,0.75)", borderRadius: '1rem' }} lg={6} xs={10} md={6}>
                    <img src="https://image.flaticon.com/icons/png/512/1254/1254740.png" width='100' alt="" />
                    <h3 className="mb-5" >Sign Up to unlock the best of URBAN TOURS</h3>
                    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name.. ' className="w-100 px-2 mb-3 py-3 rounded-3  border border-secondary border-2" {...register("name")} />
                        <input placeholder='email.. ' className="w-100 px-2  py-3 rounded-3  border border-secondary border-2" {...register("email")} />
                        <input placeholder="password" className="w-100 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("password")} />
                        <small className="text-danger">{error}</small>
                        <input className="btn btn-outline-danger px-5 py-3 mt-4" type="submit" value='Sign Up' />

                        <Button onClick={handelGoogle} variant="outline-dark" className='px-3 py-2 rounded-pill my-3 '><img src={google} width='20' className='me-2' alt="" />Sign Up With Google</Button>
                    </form>
                    <p>Already Have A Account ? <Link to="/login">Sign In</Link></p>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;