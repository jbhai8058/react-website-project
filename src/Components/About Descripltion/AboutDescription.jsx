import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import HTMLReactParser from 'html-react-parser';
import Loading from '../Loading/Loading';

const AboutDescription = () => {

    const [aboutdesc, setaboutdesc] = useState('');
    const [loading, setloading] = useState(true)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then((result) => {
            setaboutdesc(result[0]['about']);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    if (loading === true) {
        return <Loading />
    } else {

        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            {HTMLReactParser(aboutdesc)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    } // end if condition
}

export default AboutDescription
