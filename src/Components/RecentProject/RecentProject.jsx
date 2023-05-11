import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';

const RecentProject = () => {


    const [Data, setData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ProjectHome).then((result) => {
            setData(result);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const MyView = Data.map(myItem => (
        <Col lg={4} md={6} sm={12}  key={myItem.id}>
            <Card className='ProjectCard'>
                <Card.Img variant="top" src={myItem.img_one} />
                <Card.Body>
                    <Card.Title className='serviceName'>{myItem.project_name}</Card.Title>
                    <Card.Text className='serviceDescription'>
                        {myItem.project_description}
                    </Card.Text>
                    <Button variant="primary"><Link className='link-style' to='/projectDetails'>View More</Link> </Button>
                </Card.Body>
            </Card>
        </Col>
    ));

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

export default RecentProject
