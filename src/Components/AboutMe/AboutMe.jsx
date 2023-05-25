import React, { Fragment, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assets/images/face.png';
import { init } from 'ityped';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';

const AboutMe = () => {

    const myElement = useRef(null);

    useEffect(() => {
        init(myElement.current, { showCursor: false, strings: ['Web Developer!', 'Front End Developer!'] });
    }, []);

    return (
        <Fragment>
            <Container className='text-center'>
                <LightSpeed top>
                    <h1 className='serviceMainTitle'>ABOUT ME</h1>
                    <div className='bottom'></div>
                </LightSpeed>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Flip top>
                            <div className='AboutMeImg'>
                                <Zoom top>
                                    <img className='aboutImg' src={face} />
                                </Zoom>
                            </div>
                        </Flip>
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
