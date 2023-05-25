import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import page1 from '../../assets/images/page1.png';
import page2 from '../../assets/images/page2.png';
import page3 from '../../assets/images/page3.png';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';


const Welcome = () => {
    return (
        <Fragment>
            <div className="intro-area--top">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className='section-title text-center'>
                                <div className="intro-area-inner">

                                    {/* Header Start */}

                                    <h6 className='sub-title double-line'>WELCOME</h6>
                                    <Jump>
                                        <h2 className='maintitle'>
                                            An examplary <br />
                                            Learning Community
                                        </h2>
                                    </Jump>

                                    {/* Header End */}


                                    <Container className='text-center mt-5'>

                                        {/* Center Content Start */}

                                        <Row>
                                            <Col lg={4} md={6} sm={12}>
                                                <Slide top>
                                                    <img src={page1} />
                                                </Slide>
                                                <Flip top>
                                                    <h1 className='serviceName'>Amet consectetur</h1>
                                                    <p className='serviceDescription'>Lorem ipsum dolor</p>
                                                </Flip>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Slide top>
                                                    <img src={page2} />
                                                </Slide>
                                                <Flip top>
                                                    <h1 className='serviceName'>Amet consectetur</h1>
                                                    <p className='serviceDescription'>Lorem ipsum dolor</p>
                                                </Flip>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Slide top>
                                                    <img src={page3} />
                                                </Slide>
                                                <Flip top>
                                                    <h1 className='serviceName'>Amet consectetur</h1>
                                                    <p className='serviceDescription'>Lorem ipsum dolor</p>
                                                </Flip>
                                            </Col>
                                        </Row>

                                        {/* Center Content End */}

                                        {/* Intro Footer Start */}

                                        <Row className='intro-footer bg-base text-center mt-5'>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className='sideImg' src={icon1} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className='text-justify homeIntro'>Development</h5>
                                                        <p className='text-justify serviceDescription'>Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className='sideImg' src={icon2} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className='text-justify homeIntro'>Web Design</h5>
                                                        <p className='text-justify serviceDescription'>Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className='sideImg' src={icon3} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className='text-justify homeIntro'>Ecommerce</h5>
                                                        <p className='text-justify serviceDescription'>Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        {/* Intro Footer End */}

                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default Welcome
