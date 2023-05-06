import { faCheckSquare, faClipboard, faClock, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { BigPlayButton, Player } from 'video-react'
// import 'video-react/dist/video-react.css';

const CourseDetail = () => {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <h1 className='CourseDetailText'>Lorem ipsum dolor sit amet adipisicing elit</h1>
                        <img className='CourseDetailImg' src='http://solverwp.com/demo/html/edumint/assets/img/course/9.png' /><br /><br />
                        <p className='CourseallDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis alias, quas porro aspernatur eius saepe sed rem sint quis vero tempore quasi debitis eveniet animi, at corrupti, non laudantium? <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam consectetur impedit fugit in magni iusto quaerat, quae, illo fugiat labore nihil nobis atque voluptatum rem animi minus porro nemo sed? <br /><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cum recusandae velit odio ea eos beatae fugit doloribus animi totam esse tempora deserunt provident, dolor facilis, consectetur ratione illum omnis.
                        </p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='widget widget_features'>
                            <h4 className='widget_title text-center'>Course Features</h4>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon icon={faUser} /> <span>Enrolled :</span> 1200 students</li>
                                <li><FontAwesomeIcon icon={faClock} /> <span>Duration :</span> 2 hours</li>
                                <li><FontAwesomeIcon icon={faClipboard} /> <span>Lectures :</span> 8</li>
                                <li><FontAwesomeIcon icon={faClone} /> <span>Categories :</span> Technology</li>
                                <li><FontAwesomeIcon icon={faTags} /> <span>Tags :</span> Andriod , JavaScript</li>
                                <li><FontAwesomeIcon icon={faClone} /> <span>Instructor :</span> Junaid</li>
                            </ul>
                            <div className='price-wrap text-center'>
                                <h5>Price : <span>$54.00</span></h5>
                                <Button variant='warning'>Enroll Course</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <br /><br />
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='widget_features'>
                            <h1 className='CourseDetailText'>Skill You Need</h1>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Fuga corporis alias</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Fuga corporis alias</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Fuga corporis alias</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Fuga corporis alias</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} /> Fuga corporis alias</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container> */}
        </Fragment>
    )
}

export default CourseDetail
