import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProjectDetail from '../../assets/images/ProjectDeail.png'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import RestClient from '../../Rest Api/RestClient'
import AppUrl from '../../Rest Api/AppUrl'
import HTMLReactParser from 'html-react-parser'

const ProjectDetails = (props) => {


    const { projectID } = useParams();

    const [imgtwo , setimgtwo] = useState('');
    const [projectname , setprojectname] = useState('');
    const [projectdescription , setprojectdescription] = useState('');
    const [projectfeature , setprojectfeature] = useState('');
    const [livepreview , setlivepreview] = useState('');

    useEffect(()=>{
        RestClient.GetRequest(AppUrl.ProjectDetails+projectID).then((result)=>{
            setimgtwo(result[0]['img_two'])
            setprojectname(result[0]['project_name'])
            setprojectdescription(result[0]['project_description'])
            setprojectfeature(result[0]['project_features'])
            setlivepreview(result[0]['live_preview'])
        })
    },[])


  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='about-thumb-wrap after-shape'>
                        <img className='project_img' src={imgtwo} alt={projectname} />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className='mt-5'>
                    <div className='Project-Details'>
                        <h1 className='ProjectDetailText'>{projectname}</h1>
                        <p className='ProjectDetailDesc'> {HTMLReactParser(projectdescription)}</p>
                        <FontAwesomeIcon icon={faSquareCheck} /> { HTMLReactParser(projectfeature) } <br />

                        <Button variant="info" href={livepreview}> Live Preview </Button>

                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default ProjectDetails
