import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import Loading from '../Loading/Loading';

const RecentProject = () => {


    const [Data, setData] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ProjectHome).then((result) => {
            setData(result);
            setloading(false)
        }).catch(error => {
            console.log(error);
        });
    }, []);

    if (loading === true) {
        return <Loading />
    } else {

        const MyView = Data ? (Data.map(myItem => (
            <Col lg={4} md={6} sm={12} key={myItem.id}>
                <Card className='ProjectCard'>
                    <Card.Img variant="top" className="courseImg" src={myItem.img_one} />
                    <Card.Body>
                        <Card.Title className='serviceName'>{myItem.project_name}</Card.Title>
                        <Card.Text className='serviceDescription'>
                            {myItem.project_description}
                        </Card.Text>
                        <Button variant="primary"><Link className='link-style' to={'/projectDetails/' + myItem.id + '/' + myItem.project_name}>View More</Link> </Button>
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
    } // end if condition
}

export default RecentProject
