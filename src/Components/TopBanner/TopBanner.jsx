import React from 'react'
import { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import RestClient from '../../Rest Api/RestClient';
import { useEffect } from 'react';
import { useState } from 'react';
import AppUrl from '../../Rest Api/AppUrl';
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade';


const TopBanner = () => {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [loadingclass, setloadingclass] = useState('text-center');
  const [maindivclass, setmaindivclass] = useState('d-none');

  useEffect(() => {
    RestClient.GetRequest(AppUrl.HomeTopTitle).then((result) => {
      setTitle(result[0]['home_title']);
      setSubtitle(result[0]['home_subtitle']);
      setloadingclass('d-none');
      setmaindivclass('text-center')
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Fragment>
      <Container className='topfixedbanner p-0' fluid>
        <div className="topbanneroverlay">
          <Container className='topContent'>
            <Row>

              <Col className={loadingclass}>
                <Loading />
              </Col>

              <Col className={maindivclass}>
                <Fade top>
                  <h1 className='topTitle'>{title}</h1>
                  <h4 className='topSubTitle'>{subtitle}</h4>
                </Fade>
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
