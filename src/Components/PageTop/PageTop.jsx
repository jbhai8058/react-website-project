import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const PageTop = (props) => {
    return (
        <Fragment>
            <Container className='topfixedPage p-0' fluid>
                <div className="topPageoverlay">
                    <Container className='topContentPage'>
                        <Row>
                            <Col className='text-center'>
                                <h4 className='topPageTitle'>{props.pagetitle}</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
    )
}

export default PageTop
