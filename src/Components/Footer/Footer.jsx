import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RestClient from '../../Rest Api/RestClient';
import AppUrl from '../../Rest Api/AppUrl';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

const Footer = () => {

    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [facebook, setfacebook] = useState('');
    const [youtube, setyoutube] = useState('');
    const [instagram, setinstagram] = useState('');
    const [twitter, settwitter] = useState('');
    const [snapchat, setsnapchat] = useState('');
    const [footercredit, setfootercredit] = useState('');
    const [loadingclass, setloadingclass] = useState('p-5 text-justify');
    const [maindivclass, setmaindivclass] = useState('d-none');
    const [error, seterror] = useState(false)

    useEffect(() => {
        RestClient.GetRequest(AppUrl.FooterData).then((response) => {

            if (response === null) {
                seterror(true)
            } else {
                setaddress(response[0]['address']);
                setphone(response[0]['phone']);
                setemail(response[0]['email']);
                setfacebook(response[0]['facebook']);
                setyoutube(response[0]['youtube']);
                setinstagram(response[0]['instagram']);
                settwitter(response[0]['twitter']);
                setsnapchat(response[0]['snapchat']);
                setfootercredit(response[0]['footer_credit']);
                setloadingclass('d-none');
                setmaindivclass('p-5 text-justify')
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    if (error === true) {
        return <WentWrong />
    } else {
        return (
            <Fragment>
                <Container fluid={true} className='FooterSection'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-1 mt-5 text-center'>
                            <h2 className='footerName text-center'>Follow Us</h2>
                            <div className='Social-container'>
                                <a className='facebook social' href={facebook}>
                                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                                </a>
                                <a className='youtube social' href={youtube}>
                                    <FontAwesomeIcon icon={faYoutube} size='2x' />
                                </a>
                                <a className='twitter social' href={twitter}>
                                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                                </a>
                                <a className='instagram social' href={instagram}>
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                                </a>
                                <a className='snapchat social' href={snapchat}>
                                    <FontAwesomeIcon icon={faSnapchat} size='2x' />
                                </a>
                            </div>
                        </Col>

                        <Col className={loadingclass}>
                            <Loading />
                        </Col>

                        <Col lg={3} md={6} sm={12} className={maindivclass}>
                            <h2 className='footerName'>Address</h2>
                            <p className='FooterDescription'>
                                {address}<br />
                                <FontAwesomeIcon icon={faEnvelope} /> Email : {email}<br />
                                <FontAwesomeIcon icon={faPhone} /> Phone : {phone}<br />
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h2 className='footerName'>Information</h2>
                            <Link className='footerLink' to='/about'>About Us</Link><br />
                            <Link className='footerLink' to='/about'>Company Profile</Link><br />
                            <Link className='footerLink' to='/contact'>Contact Us</Link><br />
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h2 className='footerName'>Policy</h2>
                            <Link className='footerLink' to='/refund'>Refund Policy</Link><br />
                            <Link className='footerLink' to='/terms'>Term And Condition</Link><br />
                            <Link className='footerLink' to='/privacy'>Privacy Policy</Link><br />
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyrightSection'>
                    <a className='copyrightLink' href="#">{footercredit}</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer
