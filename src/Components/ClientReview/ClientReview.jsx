import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import { useEffect } from 'react';

const ClientReview = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        RestClient.GetRequest(AppUrl.ClientReview).then((result) => {
            setData(result);
        }).catch((error) => {
            console.log(error);
        })
    })

    var settings = {
        autoPlay: true,
        autoPlaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows: false,
        vertical: true,
        visualSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const MyView = Data ? (Data.map(myItem => (
        <div key={myItem.id}>
            <Row className='text-center justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='circleImg' src={myItem.client_img} alt={myItem.client_title} />
                    <h2 className='reviewName'>{myItem.client_title}</h2>
                    <p className='reviewDescription'>{myItem.client_description}</p>
                </Col>
            </Row>
        </div>
    ))
    ) : null;


    return (
        <Fragment>
            <Container fluid={true} className='siderBack text-center'>
                <h1 className='reviewMainTitle p-3'>TESTIMOIAL</h1>
                <div className='reviewbottom'></div>
                <Slider {...settings}>
                    {MyView}
                </Slider>
            </Container>
        </Fragment>
    )
}

export default ClientReview
