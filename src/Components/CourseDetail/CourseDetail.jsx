import { faCheckSquare, faClipboard, faClock, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { BigPlayButton, Player } from 'video-react'
// import 'video-react/dist/video-react.css';

const CourseDetail = (props) => {

    let LongTitle ="";
    let LongDescription ="";
    let TotalDuration ="";
    let TotalLecture ="";
    let TotalStudent ="";
    let SkillAll ="";
    let VideoUrl ="";
    let SmallImg ="";

    let ConurseDetailsArray = props.courseallData;
    if(ConurseDetailsArray.length === 1){
         LongTitle = ConurseDetailsArray[0]['long_title'];
         LongDescription = ConurseDetailsArray[0]['long_description'];
         TotalDuration = ConurseDetailsArray[0]['total_duration'];
         TotalLecture = ConurseDetailsArray[0]['total_lecture'];
         TotalStudent = ConurseDetailsArray[0]['total_student'];
         SkillAll = ConurseDetailsArray[0]['skill_all'];
         VideoUrl = ConurseDetailsArray[0]['video_url'];
         SmallImg = ConurseDetailsArray[0]['small_img'];
    }

    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <h1 className='CourseDetailText'>{LongTitle}</h1>
                        <img className='CourseDetailImg' src={SmallImg} /><br /><br />
                        <p className='CourseallDescription'>{LongDescription}
                        </p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='widget widget_features'>
                            <h4 className='widget_title text-center'>Course Features</h4>
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon icon={faUser} /> <span>Enrolled :</span> {TotalStudent} students</li>
                                <li><FontAwesomeIcon icon={faClock} /> <span>Duration :</span> {TotalDuration} hours</li>
                                <li><FontAwesomeIcon icon={faClipboard} /> <span>Lectures :</span> {TotalLecture}</li>
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
