import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid={true} className='FooterSection'>
                <Row>
                    <Col lg={3} md={6} sm={12} className='p-1 mt-5 text-center'>
                        <h2 className='footerName text-center'>Follow Us</h2>
                        <div className='Social-container'>
                            <a className='facebook social' href="#">
                                <FontAwesomeIcon icon={faFacebook} size='2x' />
                            </a>
                            <a className='youtube social' href="#">
                                <FontAwesomeIcon icon={faYoutube} size='2x' />
                            </a>
                            <a className='twitter social' href="#">
                                <FontAwesomeIcon icon={faTwitter} size='2x' />
                            </a>
                            <a className='instagram social' href="#">
                                <FontAwesomeIcon icon={faInstagram} size='2x' />
                            </a>
                            <a className='snapchat social' href="#">
                                <FontAwesomeIcon icon={faSnapchat} size='2x' />
                            </a>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footerName'>Address</h2>
                        <p className='FooterDescription'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            <FontAwesomeIcon icon={faEnvelope} /> Email : support@gmail.com<br />
                            <FontAwesomeIcon icon={faPhone} /> Phone : +9240038989<br />
                        </p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footerName'>Information</h2>
                        <Link className='footerLink' to='/about'>About Us</Link><br />
                        <Link className='footerLink' to='/about'>Company Profile</Link><br />
                        <Link className='footerLink' to='/contact'>Contact Us</Link><br />
                    </Col>
                    <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h2 className='footerName'>Policy</h2>
                        <Link className='footerLink' to='/refund'>Refund Policy</Link><br />
                        <Link className='footerLink' to='/terms'>Term And Condition</Link><br />
                        <Link className='footerLink' to='/privacy'>Privacy Policy</Link><br />
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='text-center copyrightSection'>
                <a className='copyrightLink' href="#">&copy; Copyright 2022 by {/* digital softs */}, All Rights Reserved</a>
            </Container> 
        </Fragment>
    )
}

export default Footer
