import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import HTMLReactParser from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';

const RefundDescription = () => {

    const [data, setdata] = useState('');
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.Information).then((response) => {

            if (response === null) {
                seterror(true)
            } else {
                setdata(response[0]['refund']);
                setloading(false)
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    if (loading === true) {
        return <Loading />
    } else if (error === true) {
        return <WentWrong />
    } else {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Zoom top>
                                {HTMLReactParser(data)}
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    } // end if condition
}

export default RefundDescription
