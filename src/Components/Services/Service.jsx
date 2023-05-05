import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';

const Service = () => {
    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>MY SERVICES</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <div className='serviceCard text-center'>
                            <img src={image1} className='image' />
                            <h2 className='serviceName'>Ecommerce</h2>
                            <p className='serviceDescription'>I will design and develop ecommerce online store website</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className='serviceCard text-center'>
                            <img src={image2} className='image' />
                            <h2 className='serviceName'>Web Design</h2>
                            <p className='serviceDescription'>Qualified web design and attractive effects which catches vistors Eye.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className='serviceCard text-center'>
                            <img src={image3} className='image' />
                            <h2 className='serviceName'>Web Development</h2>
                            <p className='serviceDescription'>Clean and Fresh issue free code to make your website dynamic perfectly.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Service
