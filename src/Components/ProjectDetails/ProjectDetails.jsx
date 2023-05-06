import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectDetail from '../../assets/images/ProjectDeail.png'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectDetails = () => {
  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='about-thumb-wrap after-shape'>
                        <img src={ProjectDetail} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className='mt-5'>
                    <div className='Project-Details'>
                        <h1 className='ProjectDetailText'>Lorem ipsum dolor sit amet.</h1>
                        <p className='ProjectDetailDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam atque deleniti odio odit explicabo iusto? Cum voluptate ea labore. Beatae exercitationem accusamus corrupti, quaerat nemo officia nobis maxime quisquam.</p>
                        <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. <br />
                        <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. <br />
                        <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. <br />
                        <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. <br />
                        <FontAwesomeIcon icon={faSquareCheck} />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae repellat voluptatem laborum modi magnam nam consequatur. 
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default ProjectDetails
