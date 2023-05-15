import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import HTMLReactParser from 'html-react-parser';

const RefundDescription = () => {

    const [data , setdata] = useState('');

    useEffect(()=>{
        RestClient.GetRequest(AppUrl.Information).then((response)=>{
            setdata(response[0]['refund']);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        {HTMLReactParser(data)}
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default RefundDescription
