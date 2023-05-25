import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
    return (
        <Fragment>
            <Container>
                <Row className='text-center'>
                    <Col>
                    <h1 className="serviceName">Page is Not Found</h1>
                    <h1 className='notfound'>404</h1>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default NotFound
