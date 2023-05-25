import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Zoom from 'react-reveal/Zoom';


const Summary = () => {

    return (
        <Fragment>
            <Container className='Summarybanner p-0' fluid>
                <div className="Summarybanneroverlay">
                    <Container className='text-center'>
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className='CountSection'>
                                    <Col>
                                        <Zoom top>
                                            <FontAwesomeIcon className='iconProject' icon={faGlobe} />
                                            <h1 className='CountNumber'>
                                                <CountUp start={0} end={35000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                        </Zoom>
                                        <h4 className='CountTitle'>Happy Clients</h4>
                                        <hr className='bottomCount' />
                                    </Col>
                                    <Col>
                                        <Zoom top>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop} />
                                            <h1 className='CountNumber'>
                                                <CountUp start={0} end={350}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                        </Zoom>
                                        <h4 className='CountTitle'>Complete Projects</h4>
                                        <hr className='bottomCount' />
                                    </Col>
                                    <Col>
                                        <Zoom top>
                                            <FontAwesomeIcon className='iconProject' icon={faStar} />
                                            <h1 className='CountNumber'>
                                                <CountUp start={0} end={4000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                        </Zoom>
                                        <h4 className='CountTitle'>Hour Of Support</h4>
                                        <hr className='bottomCount' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12} className='mb-2'>
                                <Card className='WorkCard'>
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>What I Have Achieved?</Card.Title>
                                        <Card.Text className='cardSubTitle text-justify'>
                                            <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. <br /> <br />
                                            <FontAwesomeIcon icon={faSquareCheck} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quas veniam, temporibus voluptates et rerum, consequatur ratione mollitia.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
    )
}

export default Summary
