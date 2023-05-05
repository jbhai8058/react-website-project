import React from 'react'
import { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const TopBanner = () => {
  return (
    <Fragment>
      <Container className='topfixedbanner p-0' fluid>
        <div className="topbanneroverlay">
          <Container className='topContent'>
            <Row>
              <Col className='text-center'>
                <h1 className='topTitle'>EASY STANDING</h1>
                <h4 className='topSubTitle'>LEARN PROFESSIONALY</h4>
                <Button variant='success'>Learn More</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  )
}

export default TopBanner
