import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Rest Api/RestClient'
import AppUrl from '../../Rest Api/AppUrl'

const Course = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.CourseHome).then((result) => {
            setData(result);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const MyView = Data ? (Data.map(myItem => (
        <Col lg={6} md={12} sm={12} key={myItem.id}>
            <Row>
                <Col lg={6} md={6} sm={12} className="p-2" >
                    <img className="courseImg" src={myItem.small_img} alt={myItem.short_title} />

                </Col>

                <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">{myItem.short_title}</h5>
                    <p className="text-justify serviceDescription">{myItem.short_description}</p>
                    <Link className="courseViewMore float-left" to={'/coursedetails/' + myItem.id + "/" +myItem.short_title} >View Details</Link>
                </Col>
            </Row>
        </Col>
    ))
    ) : null;

    return (
        <Fragment>
            <Container className="text-center">
                <h1 className="serviceMainTitle">MY COURSES</h1>
                <div className="bottom"></div>
                <Row>
                    {MyView}
                </Row>

            </Container>
        </Fragment>
    )
}

export default Course
