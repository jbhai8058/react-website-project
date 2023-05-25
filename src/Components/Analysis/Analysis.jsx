import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../Rest Api/AppUrl';
import RestClient from '../../Rest Api/RestClient';
import HTMLReactParser from 'html-react-parser';
import Loading from '../Loading/Loading';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

const Analysis = () => {


    const [data, setData] = useState(null);
    const [techdes, settechdes] = useState('');
    const [loading, setloading] = useState(true)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ChartData).then(result => {
            setData(result);
            setloading(false)
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


    if (loading === true) {
        return <Loading />
    } else {

        const blue = "#051b35";

        return (
            <Fragment>
                <Container className='text-center'>
                    <LightSpeed top>
                        <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
                        <div className='bottom'></div>
                    </LightSpeed>
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
                            <Zoom top>
                                <p className='text-justify serviceDescription'>
                                    {HTMLReactParser(techdes)}
                                </p>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    } // end if condition
}

export default Analysis
