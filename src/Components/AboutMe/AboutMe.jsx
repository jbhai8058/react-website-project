import React, { Fragment, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assets/images/face.png';
import { init } from 'ityped';

const AboutMe = () => {

    const myElement = useRef(null);

    useEffect(() => {
      init(myElement.current, { showCursor: false, strings: ['Web Developer!', 'Front End Developer!'] });
    }, []);

    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>ABOUT ME</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='AboutMeImg'>
                            <img className='aboutImg' src={face} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='aboutmeBody'>
                            <h2 className='aboutmeDetails'>Hi I am</h2>
                            <h2 className='aboutmeTitle'>Junaid Rehman Siddiqui</h2>
                            <h3 className='aboutmeDetails'>Work as <span ref={myElement}></span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default AboutMe
