import React, { Fragment, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

const Service = () => {

    const [Data, setData] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Services).then((result) => {
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
                <Zoom top>
                    <div className="serviceCard text-center">
                        <img className="ecommerceIcon" src={'https://backend.securesoftwarehub.com/upload/service/' + myItem.service_logo} alt={myItem.service_name} />
                        <h2 className="serviceName">{myItem.service_name}</h2>
                        <p className="serviceDescription">{myItem.service_description}</p>
                    </div>
                </Zoom>
            </Col>
        ))
        ) : null;

        return (
            <Fragment>
                <Container className='text-center'>
                    <LightSpeed top>
                        <h1 className='serviceMainTitle'>MY SERVICES</h1>
                        <div className='bottom'></div>
                    </LightSpeed>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        )
    } // end if condition
}

export default Service
