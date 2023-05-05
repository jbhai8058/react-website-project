import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useState } from 'react';
import 'video-react/dist/video-react.css'; // import css
import { BigPlayButton, Player } from 'video-react';

const Videos = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <p className='text-justify serviceDescription'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt autem doloribus consectetur omnis fugit, neque temporibus tempore quaerat quos earum accusamus, itaque esse numquam saepe repudiandae voluptatum alias non. <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum amet facilis expedita distinctio eaque assumenda libero soluta qui provident. Optio debitis tenetur rerum inventore adipisci facilis, totam dicta similique eaque! <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eligendi ullam magnam? Cupiditate corrupti cumque enim maiores nobis itaque perspiciatis dicta magnam, animi sit, id saepe iusto laudantium corporis architecto?<br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat provident ducimus, sed laborum debitis sit est aut quod, et corporis vel blanditiis. Sapiente nulla et possimus, cumque impedit molestias.
                        </p>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='VideoCard'>
                        <FontAwesomeIcon className='Videoicon' onClick={handleShow} icon={faVideoSlash} />
                    </Col>
                </Row>
            </Container>



            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Body>
                    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
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
