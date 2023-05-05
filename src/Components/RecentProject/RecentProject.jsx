import React from 'react'
import { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import image3 from '../../assets/images/project3.jpg';

const RecentProject = () => {
    return (
        <Fragment>
            <Container className='text-center mt-5 p-5'>
                <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='ProjectCard'>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title className='serviceName'>Project Name one</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='ProjectCard'>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title className='serviceName'>Project Name Two</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Card className='ProjectCard'>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title className='serviceName'>Project Name Three</Card.Title>
                                <Card.Text className='serviceDescription'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Visit Site</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default RecentProject
