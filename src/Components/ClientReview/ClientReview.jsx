import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReview = () => {

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

    return (
        <Fragment>
            <Container fluid={true} className='siderBack text-center'>
                <h1 className='reviewMainTitle p-3'>TESTIMOIAL</h1>
                <div className='reviewbottom'></div>
                <Slider {...settings}>
                    <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={6} md={6} sm={12}>
                                <img className='circleImg' src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=900&t=st=1682614581~exp=1682615181~hmac=c88b5e1925061e3e67635d6ef08086eb47515b01d80b595738b9ba282f54295b" alt="" />
                                <h2 className='reviewName'>Lorem ipsum</h2>
                                <p className='reviewDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corporis quis autem aliquid dolorum perspiciatis cumque exercitationem, porro, delectus error aut assumenda. Deleniti aperiam cupiditate illum itaque error quidem enim.</p>
                            </Col>
                        </Row>
                    </div>


                    <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={6} md={6} sm={12}>
                                <img className='circleImg' src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=900&t=st=1682614581~exp=1682615181~hmac=c88b5e1925061e3e67635d6ef08086eb47515b01d80b595738b9ba282f54295b" alt="" />
                                <h2 className='reviewName'>Lorem ipsum</h2>
                                <p className='reviewDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corporis quis autem aliquid dolorum perspiciatis cumque exercitationem, porro, delectus error aut assumenda. Deleniti aperiam cupiditate illum itaque error quidem enim.</p>
                            </Col>
                        </Row>
                    </div>



                    <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={6} md={6} sm={12}>
                                <img className='circleImg' src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=900&t=st=1682614581~exp=1682615181~hmac=c88b5e1925061e3e67635d6ef08086eb47515b01d80b595738b9ba282f54295b" alt="" />
                                <h2 className='reviewName'>Lorem ipsum</h2>
                                <p className='reviewDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corporis quis autem aliquid dolorum perspiciatis cumque exercitationem, porro, delectus error aut assumenda. Deleniti aperiam cupiditate illum itaque error quidem enim.</p>
                            </Col>
                        </Row>
                    </div>



                    <div>
                        <Row className='text-center justify-content-center'>
                            <Col lg={6} md={6} sm={12}>
                                <img className='circleImg' src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=900&t=st=1682614581~exp=1682615181~hmac=c88b5e1925061e3e67635d6ef08086eb47515b01d80b595738b9ba282f54295b" alt="" />
                                <h2 className='reviewName'>Lorem ipsum</h2>
                                <p className='reviewDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur corporis quis autem aliquid dolorum perspiciatis cumque exercitationem, porro, delectus error aut assumenda. Deleniti aperiam cupiditate illum itaque error quidem enim.</p>
                            </Col>
                        </Row>
                    </div>


                </Slider>
            </Container>
        </Fragment>
    )
}

export default ClientReview
