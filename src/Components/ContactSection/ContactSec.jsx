import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ContactSec = () => {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1>Quick Connect</h1>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group> <br />
                            <Form.Group>
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group> <br />
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows={3} placeholder="Your Message" />
                            </Form.Group> <br />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h1>Disscuss Now</h1>
                        <p className='serviceDescription'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            <FontAwesomeIcon icon={faEnvelope} /> Email : support@gmail.com<br />
                            <FontAwesomeIcon icon={faPhone} /> Phone : +9240038989<br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ContactSec
