import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import image3 from '../../assets/images/project3.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';

const AllProjects = () => {

    const [Data, setdata] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ProjectAll).then((result) => {
            setdata(result);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const MyView = Data ? (Data.map(myItem => (
        <Col lg={4} md={6} sm={12} key={myItem.id}>
            <Card className='ProjectCard'>
                <Card.Img variant="top" src={myItem.img_one} alt={myItem.project_name} />
                <Card.Body>
                    <Card.Title className='serviceName'>{myItem.project_name}</Card.Title>
                    <Card.Text className='serviceDescription'>
                        {myItem.project_description}
                    </Card.Text>
                    <Button variant="primary"> <Link className='link-style' to={'/projectDetails/'+ myItem.id + '/' +myItem.project_name}>View More</Link> </Button>
                </Card.Body>
            </Card>
        </Col>
    ))
    ) : null;

    return (
        <Fragment>
            <Container className='text-center mt-5 p-5'>
                <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
                <div className='bottom'></div>
                <Row>
                   {MyView}
                </Row>
            </Container>
        </Fragment>
    )
}

export default AllProjects
