import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ErrorIcon from '../../assets/images/error_icon.svg'

const WentWrong = () => {
  return (
    <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                <img className='errorIcon' src={ErrorIcon} alt="" />
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default WentWrong
