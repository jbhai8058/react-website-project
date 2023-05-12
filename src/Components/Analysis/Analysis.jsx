import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../Rest Api/AppUrl';
import RestClient from '../../Rest Api/RestClient';
import HTMLReactParser from 'html-react-parser';

const Analysis = () => {


    const [data, setData] = useState(null);
    const [techdes, settechdes] = useState('');

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
            setData(result);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.HomeTechDesc).then(result => {
            settechdes(result[0]['tech_description']);
        }).catch((error) => {
            console.log(error);
        })
    }, []);


    const blue = "#051b35";

    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='text-justify serviceDescription'>
                            {HTMLReactParser(techdes)}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Analysis
