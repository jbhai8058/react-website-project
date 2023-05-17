import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import 'video-react/dist/video-react.css'; // import css
import { BigPlayButton, Player } from 'video-react';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import HTMLReactParser from 'html-react-parser';

const Videos = () => {


    const [videodescription , setvideodescription ] = useState('');
    const [videourl , setvideourl ] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        RestClient.GetRequest(AppUrl.HomeVideo).then((response)=>{
            setvideodescription(response[0]['video_description']);
            setvideourl(response[0]['video_url']);
        })
    },[])


    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        {HTMLReactParser(videodescription)}
                    </Col>

                    <Col lg={6} md={6} sm={12} className='VideoCard'>
                        <FontAwesomeIcon className='Videoicon' onClick={handleShow} icon={faVideoSlash} />
                    </Col>
                </Row>
            </Container>



            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Body>
                    <Player src={videourl}>
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>




        </Fragment>
    )
}

export default Videos
