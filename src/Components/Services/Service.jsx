import React, { Fragment, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import { useState } from 'react';

const Service = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Services).then((result) => {
            setData(result);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const MyView = Data.map(myItem => (
        <Col lg={4} md={6} sm={12} key={myItem.id}>
            <div className="serviceCard text-center">
                <img className="ecommerceIcon" src={myItem.service_logo} alt={myItem.service_name} />
                <h2 className="serviceName">{myItem.service_name}</h2>
                <p className="serviceDescription">{myItem.service_description}</p>
            </div>
        </Col>
    ));

    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>MY SERVICES</h1>
                <div className='bottom'></div>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Service
