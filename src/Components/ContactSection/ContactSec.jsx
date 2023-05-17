import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient'
import AppUrl from '../../Rest Api/AppUrl'
import { useState } from 'react'

const ContactSec = () => {

    const[address , setaddress]= useState('');
    const[phone , setphone]= useState('');
    const[email , setemail]= useState('');

    useEffect(()=>{
        RestClient.GetRequest(AppUrl.FooterData).then((response)=>{
            setaddress(response[0]['address']);
            setphone(response[0]['phone']);
            setemail(response[0]['email']);
        })
    },[])

    const ContactSend = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let jsonObject = {name:name,email:email,message:message}

        RestClient.PostRequest(AppUrl.ContactSend.JSON.stringify(jsonObject)).then((result=>{
            alert(result)
        })).catch((error)=>{
            console.log(error);
        })
    }


    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1>Quick Connect</h1>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control id='name' type="text" placeholder="Enter Your Name" />
                            </Form.Group> <br />
                            <Form.Group>
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control id='email' type="email" placeholder="Enter Your Email" />
                            </Form.Group> <br />
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control id='message' as='textarea' rows={3} placeholder="Your Message" />
                            </Form.Group> <br />

                            <Button variant="primary" type="submit" onClick={ContactSend}>
                                Send
                            </Button>
                        </Form>

                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1>Disscuss Now</h1>
                        <p className='serviceDescription'>{address}<br />
                            <FontAwesomeIcon icon={faEnvelope} /> Email : {email}<br />
                            <FontAwesomeIcon icon={faPhone} /> Phone : {phone}<br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ContactSec
