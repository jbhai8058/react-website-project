import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Rest Api/RestClient'
import AppUrl from '../../Rest Api/AppUrl'
import Loading from '../Loading/Loading'
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

const Course = () => {

    const [Data, setData] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.CourseHome).then((result) => {
            setData(result);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    if (loading === true) {
        return <Loading />
    } else {

        const MyView = Data ? (Data.map(myItem => (
            <Col lg={6} md={12} sm={12} key={myItem.id}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-2" >
                        <Zoom top>
                            <img className="courseImg" src={myItem.small_img} alt={myItem.short_title} />
                        </Zoom>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <Zoom top>
                            <h5 className="text-justify serviceName">{myItem.short_title}</h5>
                            <p className="text-justify serviceDescription">{myItem.short_description}</p>
                        </Zoom>
                        <Link className="courseViewMore float-left" to={'/coursedetails/' + myItem.id + "/" + myItem.short_title} >View Details</Link>
                    </Col>
                </Row>
            </Col>
        ))
        ) : null;

        return (
            <Fragment>
                <Container className="text-center">
                    <LightSpeed top>
                        <h1 className="serviceMainTitle">MY COURSES</h1>
                        <div className="bottom"></div>
                    </LightSpeed>
                    <Row>
                        {MyView}
                    </Row>

                </Container>
            </Fragment>
        )
    } // end if condition
}

export default Course
