import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TermDescription = () => {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className='serviceName'>Terms And Conditions</h1>
                        <hr />
                        <p className='serviceDescription'>
                            <b>Comments</b> <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam nesciunt aperiam consectetur, veniam recusandae, nobis itaque nulla possimus architecto ullam at vero dolor vitae consequatur placeat aliquam, obcaecati laudantium?<br /><br />

                            <b>Remarks</b> <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam nesciunt aperiam consectetur, veniam recusandae, nobis itaque nulla possimus architecto ullam at vero dolor vitae consequatur placeat aliquam, obcaecati laudantium?<br /><br />

                            <b>Conditions</b> <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam nesciunt aperiam consectetur, veniam recusandae, nobis itaque nulla possimus architecto ullam at vero dolor vitae consequatur placeat aliquam, obcaecati laudantium?<br /><br />

                            <b>Terms</b> <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nam nesciunt aperiam consectetur, veniam recusandae, nobis itaque nulla possimus architecto ullam at vero dolor vitae consequatur placeat aliquam, obcaecati laudantium?<br /><br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default TermDescription
