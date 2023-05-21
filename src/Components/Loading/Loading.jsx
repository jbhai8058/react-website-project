import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoaderIcon from '../../assets/images/loader.svg'

const Loading = () => {
  return (
   <Fragment>
    <Container className='text-center'>
        <Row>
            <Col>
            <img className='loaderAnimation' src={LoaderIcon} />
            </Col>
        </Row>
    </Container>
   </Fragment>
  )
}

export default Loading
