import React from 'react'
import { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import RestClient from '../../Rest Api/RestClient';
import { useEffect } from 'react';
import { useState } from 'react';
import AppUrl from '../../Rest Api/AppUrl';


const TopBanner = () => {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    RestClient.GetRequest(AppUrl.HomeTopTitle).then((result) => {
      setTitle(result[0]['home_title']);
      setSubtitle(result[0]['home_subtitle']);
    }).catch(error => {
      console.log(error);
    });
  },[]);

  return (
    <Fragment>
      <Container className='topfixedbanner p-0' fluid>
        <div className="topbanneroverlay">
          <Container className='topContent'>
            <Row>
              <Col className='text-center'>
                <h1 className='topTitle'>{title}</h1>
                <h4 className='topSubTitle'>{subtitle}</h4>
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
